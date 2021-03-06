const db = require("../db/connection");

exports.selectDucks = async (maker_id) => {
  const queryStr = `SELECT ducks.*, makers.user_name AS maker_name, finders.user_name AS finder_name
  FROM ducks
  JOIN users AS makers ON ducks.maker_id = makers.user_id
  LEFT JOIN users AS finders ON ducks.finder_id = finders.user_id
  ${maker_id ? "WHERE maker_id = $1" : ""};`;

  const queryValues = maker_id ? [maker_id] : null;

  const { rows } = await db.query(queryStr, queryValues);

  return rows;
};

exports.selectFoundDucks = async (finder_id, maker_id) => {
  let queryStr = `SELECT ducks.*, makers.user_name AS maker_name, finders.user_name AS finder_name
  FROM ducks
  JOIN users AS makers ON ducks.maker_id = makers.user_id
  JOIN users AS finders ON ducks.finder_id = finders.user_id `;

  const queryValues = [];

  if (finder_id) {
    queryStr += `WHERE finder_id = $1;`;
    queryValues.push(finder_id);
  } else if (maker_id) {
    queryStr += `WHERE finder_id IS NOT NULL
    AND maker_id = $1;`;
    queryValues.push(maker_id);
  } else {
    queryStr += `WHERE finder_id IS NOT NULL;`;
  }

  const { rows } = await db.query(queryStr, queryValues);

  return rows;
};

exports.selectUnfoundDucks = async ({
  location_placed_lat,
  location_placed_lng,
}) => {
  const queryStr = `SELECT ducks.duck_id, ducks.duck_name, ducks.finder_id, ducks.location_placed_lat, ducks.location_placed_lng, ducks.clue, users.user_name AS maker_name
  FROM ducks
  JOIN users ON ducks.maker_id = users.user_id
  WHERE finder_id IS NULL
  ${
    location_placed_lat
      ? " AND location_placed_lat = $1 AND location_placed_lng = $2"
      : ";"
  }`;

  const queryValues = location_placed_lat
    ? [location_placed_lat, location_placed_lng]
    : null;

  const { rows } = await db.query(queryStr, queryValues);

  return rows;
};

exports.selectDuckById = async (id) => {
  const { rows } = await db.query(
    `SELECT ducks.*, makers.user_name AS maker_name, finders.user_name AS finder_name
    FROM ducks
    JOIN users AS makers ON ducks.maker_id = makers.user_id
    LEFT JOIN users AS finders ON ducks.finder_id = finders.user_id
    WHERE duck_id = $1;`,
    [id]
  );

  return rows[0];
};

exports.updateDuckById = async (
  duck_id,
  { finder_id, location_found_lat, location_found_lng, image, comments }
) => {
  await db.query(
    `UPDATE ducks
    SET finder_id = $1,
        location_found_lat = $2,
        location_found_lng = $3,
        image = $4,
        comments = $5
    WHERE duck_id = $6;`,
    [
      finder_id,
      location_found_lat,
      location_found_lng,
      image,
      comments,
      duck_id,
    ]
  );

  const duck = await this.selectDuckById(duck_id);

  return duck;
};

exports.insertDuckByMakerId = async ({
  duck_name,
  maker_id,
  location_placed_lat,
  location_placed_lng,
  clue,
}) => {
  const { rows } = await db.query(
    `INSERT INTO ducks
      (duck_name, maker_id, location_placed_lat, location_placed_lng, clue)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;`,
    [duck_name, maker_id, location_placed_lat, location_placed_lng, clue]
  );

  return rows[0];
};

exports.updateDuckByName = async ({
  duck_name,
  finder_id,
  location_found_lat,
  location_found_lng,
  image,
  comments,
}) => {
  const { rows } = await db.query(
    `UPDATE ducks
    SET finder_id = $1,
        location_found_lat = $2,
        location_found_lng = $3,
        image = $4,
        comments = $5
    WHERE duck_name = $6
    RETURNING *;`,
    [
      finder_id,
      location_found_lat,
      location_found_lng,
      image,
      comments,
      duck_name,
    ]
  );

  const duck_id = rows[0].duck_id;

  const duck = await this.selectDuckById(duck_id);

  return duck;
};
