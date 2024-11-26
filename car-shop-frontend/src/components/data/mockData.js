export const cars = [
  {
    id: 1,
    name: '2022 Audi Q7',
    year: 2022,
    specs: {
      price: 55800,
      horsepower: '335hp',
      fuelType: 'Gasoline',
      fuelEconomy: '19 MPG city / 25 MPG highway',
      seatingCapacity: 7,
      cargoSpace: '69.6 cu.ft',
      safetyRating: '5-Star',
    },
    images: [
      'https://avatars.mds.yandex.net/get-verba/216201/2a00000190ba3707792975ddf821124d3eee/auto_main',
      'https://avatars.mds.yandex.net/get-verba/216201/2a00000190ba3707792975ddf821124d3eee/auto_main',
      'https://avatars.mds.yandex.net/get-verba/216201/2a00000190ba3707792975ddf821124d3eee/auto_main'
    ],
    description: 'The Audi Q7 is a luxurious SUV with excellent features and spacious seating.',
    seller: {
      name: 'John Doe',
      contact: 'johndoe@example.com',
      phone: '+1 234 567 890',
    }
  },
  {
    id: 2,
    name: '2021 BMW X5',
    year: 2021,
    specs: {
      price: 60500,
      horsepower: '335hp',
      fuelType: 'Gasoline',
      fuelEconomy: '21 MPG city / 26 MPG highway',
      seatingCapacity: 5,
      cargoSpace: '72.3 cu.ft',
      safetyRating: '5-Star',
    },
    images: [
      'https://www.allcarz.ru/wp-content/uploads/2023/02/foto-x5-g05-upd_01.jpg',
      'https://www.allcarz.ru/wp-content/uploads/2023/02/foto-x5-g05-upd_01.jpg',
      'https://www.allcarz.ru/wp-content/uploads/2023/02/foto-x5-g05-upd_01.jpg'
    ],
    description: 'The BMW X5 combines luxurious interior, powerful engine, and advanced technology.',
    seller: {
      name: 'Jane Smith',
      contact: 'janesmith@example.com',
      phone: '+1 345 678 901',
    }
  },
];

export const purchasedCars = [
  {
    id: 1,
    name: '2021 Tesla Model 3',
    purchaseDate: 'March 20, 2021',
    specs: {
      price: 39999,
      year: 2021,
      mileage: '5,000 miles',
      color: 'Blue',
    },
    images: [
      'https://img.freepik.com/free-photo/curly-stylish-girl-wear-blue-jeans-skirt-blouse-glasses-posed-near-blue-car-street-city_627829-10180.jpg?semt=ais_hybrid',
      'https://example.com/tesla-model-3-image2.jpg'
    ],
    description: 'The Tesla Model 3 is a popular electric vehicle with excellent range and performance.',
  },
  {
    id: 2,
    name: '2020 Audi A4',
    purchaseDate: 'July 14, 2020',
    specs: {
      price: 35000,
      year: 2020,
      mileage: '20,000 miles',
      color: 'Black',
    },
    images: [
      'https://img.freepik.com/free-photo/close-up-car-dealership_23-2148130076.jpg?t=st=1731237873~exp=1731241473~hmac=70884591dd0f770524a303bc4ba80798e9d21908e7faabc2556c349947c0e6d5&w=996',
      'https://example.com/audi-a4-image2.jpg'
    ],
    description: 'The Audi A4 combines luxury and performance in a compact sedan package.',
  },
];

export const compareCars = [
  {
    id: 1,
    name: 'Acura MDX',
    specs: {
      year: 2022,
      engine: '3.7L V6',
      transmission: '9-spd auto',
      price: 47200,
      horsepower: '290hp',
      fuelType: 'Gasoline',
      fuelEconomy: '19 MPG city / 26 MPG highway',
      maxSpeed: '130 mph',
      seatingCapacity: '7',
      cargoSpace: '90.9 cu.ft',
      safetyRating: '5-Star',
      warranty: '5 years / 60,000 miles',
      carplay: 'Standard',
      driverAssistance: 'Standard',
      infotainmentSystem: 'Touchscreen',
    },
    images: [
      'https://img.freepik.com/free-photo/high-angle-guard-woman-watching-area_23-2148404121.jpg'
    ],
  },
  {
    id: 2,
    name: 'Audi Q5',
    specs: {
      year: 2022,
      engine: '2.5L I4',
      transmission: '8-spd auto',
      price: 43300,
      horsepower: '261hp',
      fuelType: 'Gasoline',
      fuelEconomy: '23 MPG city / 28 MPG highway',
      maxSpeed: '130 mph',
      seatingCapacity: '5',
      cargoSpace: '53.1 cu.ft',
      safetyRating: '5-Star',
      warranty: '4 years / 50,000 miles',
      carplay: 'Standard',
      driverAssistance: 'Standard',
      infotainmentSystem: 'Touchscreen',
    },
    images: [
      'https://img.freepik.com/free-photo/young-happy-woman-drinking-coffee-by-car_1303-22434.jpg'
    ],
  },
];
