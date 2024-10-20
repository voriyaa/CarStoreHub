import React from 'react';

const carData = [
  {
    id: 1,
    name: "2022 Audi Q7",
    price: "$55,800",
    img: "https://avatars.mds.yandex.net/get-verba/216201/2a00000190ba3707792975ddf821124d3eee/auto_main"
  },
  {
    id: 2,
    name: "2021 BMW X5",
    price: "$60,500",
    img: "https://www.allcarz.ru/wp-content/uploads/2023/02/foto-x5-g05-upd_01.jpg"
  },
  {
    id: 3,
    name: "2020 Mercedes-Benz GLE",
    price: "$75,200",
    img: "https://di-uploads-pod16.dealerinspire.com/mercedesbenzofhuntington/uploads/2019/10/gle-2020-2.png"
  }
];

const CarCard = () => {
  return (
    <div className="car-section">
      {carData.map((car) => (
        <div key={car.id} className="car-card">
          <img src={car.img} alt={car.name} />
          <div className="car-info">
            <h3>{car.name}</h3>
            <p>{car.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarCard;
