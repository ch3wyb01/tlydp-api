exports.endpointsDescription = {
  "GET /api": {
    description:
      "serves up a json representation of all the available endpoints of the api",
  },
  "GET /api/ducks": {
    descripton: "serves an array of all ducks",
    queries: ["maker_id"],
    exampleResponse: {
      ducks: [
        {
          duck_id: 2,
          duck_name: "Coralie",
          maker_id: 5,
          finder_id: 1,
          location_placed_lat: -11.8480193,
          location_placed_lng: -55.5081012,
          location_found_lat: 31.57551,
          location_found_lng: 35.01223,
          clue: "in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo",
          image: "http://dummyimage.com/124x100.png/cc0000/ffffff",
          comments:
            "integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus",
          maker_name: "opaddell4",
          finder_name: "etimblett0",
        },
      ],
    },
  },
  "GET /api/ducks/:duck_id": {
    description: "serves an object of a duck with the given ID",
    queries: [],
    exampleResponse: {
      duck: {
        duck_id: 3,
        duck_name: "Althea",
        maker_id: 2,
        finder_id: 1,
        location_placed_lat: 35.242057,
        location_placed_lng: 116.087054,
        location_found_lat: 58.2721251,
        location_found_lng: 54.2388504,
        clue: "pede posuere nonummy integer non velit donec diam neque vestibulum eget",
        image: "http://dummyimage.com/136x100.png/ff4444/ffffff",
        comments:
          "etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit",
        maker_name: "mgallgher1",
        finder_name: "etimblett0",
      },
    },
  },
  "GET /api/ducks/found": {
    description: "serves an array of all ducks that have been found",
    queries: ["finder_id", "maker_id"],
    exampleResponse: {
      ducks: [
        {
          duck_id: 5,
          duck_name: "Joni",
          maker_id: 4,
          finder_id: 6,
          location_placed_lat: -27.4697707,
          location_placed_lng: 153.0251235,
          location_found_lat: -5.8406158,
          location_found_lng: -35.9369952,
          clue: "eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet",
          image: "http://dummyimage.com/248x100.png/ff4444/ffffff",
          comments:
            "penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis",
          maker_name: "lroskam3",
          finder_name: "epaladino5",
        },
      ],
    },
  },
  "GET /api/ducks/unfound": {
    description: "serves an array of all unfound ducks",
    queries: ["location_placed_lat", "location_placed_lng"],
    exampleResponse: {
      ducks: [
        {
          duck_id: 104,
          duck_name: "Theresita",
          finder_id: null,
          location_placed_lat: 35.9594106,
          location_placed_lng: 38.9981052,
          clue: "sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse",
          maker_name: "etimblett0",
        },
      ],
    },
  },
  "PATCH /api/ducks/:duck_id": {
    description:
      "accepts an object to update the selected duck with the relevant finder information",
    queries: [],
    exampleRequest: "/api/ducks/39",
    exampleRequestBody: {
      finder_id: 3,
      location_found_lat: 52.6435136,
      location_found_lng: 4.754,
      image:
        "https://www.shutterstock.com/image-vector/yellow-duck-toy-inflatable-rubber-vector-1677879052",
      comments: "I found this duck by the water fountain",
    },
    exampleResponse: {
      duck: {
        duck_id: 39,
        duck_name: "Miranda",
        maker_id: 1,
        finder_id: 3,
        location_placed_lat: 52.6435136,
        location_placed_lng: 4.7270746,
        location_found_lat: 52.6435136,
        location_found_lng: 4.754,
        clue: "rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus",
        image:
          "https://www.shutterstock.com/image-vector/yellow-duck-toy-inflatable-rubber-vector-1677879052",
        comments: "I found this duck by the water fountain",
        maker_name: "etimblett0",
        finder_name: "ydarbey2",
      },
    },
  },
  "POST /api/ducks/": {
    description:
      "accepts an object with relevant information about a newly created duck",
    queries: [],
    exampleRequest: "/api/ducks",
    exampleRequestBody: {
      duck_name: "Quacky",
      maker_id: 2,
      location_placed_lat: 53.488087,
      location_placed_lng: -10.022186,
      clue: "Find me",
    },
    exampleResponse: {
      duck: {
        duck_id: 555,
        duck_name: "Quacky",
        maker_id: 2,
        finder_id: null,
        location_placed_lat: 53.488087,
        location_placed_lng: -10.022186,
        location_found_lat: null,
        location_found_lng: null,
        clue: "Find me",
        image: null,
        comments: null,
      },
    },
  },
};
