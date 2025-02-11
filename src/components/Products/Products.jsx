import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    tittle: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    tittle: "Women Western",
    rating: 4.0,
    color: "red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    tittle: "Googles",
    rating: 4.9,
    color: "yellow",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    tittle: "Women Ethnic",
    rating: 4.5,
    color: "brown",
    aosDelay: "6000",
  },
  {
    id: 4,
    img: Img4,
    tittle: "Women Ethnic",
    rating: 4.7,
    color: "black",
    aosDelay: "7000",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] bg-red-40 mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold ">
            Produts
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
            voluptates ipsum necessitatibus!
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-dely={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt="Cover Image"
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.tittle}</h3>
                  <p className="text-sm text-gray-600 ">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md ">
              Veiw All button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
