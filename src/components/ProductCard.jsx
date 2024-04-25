import React from "react";
import StarRatings from "react-star-ratings";
import { IoShareSocialOutline } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";

const ProductCard = ({
  name,
  subName,
  type,
  price,
  stock,
  star,
  unit,
  imageUrl,
  discount,
}) => {
  return (
    <div className=" border-b rounded shadow cursor-pointer p-3 pt-6 relative">
      {/* discount */}
      <span className="bg-green-500 py-1 px-6 text-sm font-semibold text-white rounded-tl-md rounded-br-md absolute top-2">
        {discount}% Off
      </span>

      {/* image */}
      <div className="w-full overflow-hidden h-[200px] ">
        <img className="w-full h-full object-cover" src={imageUrl} alt={name} />
      </div>

      {/* info */}
      <div className="flex flex-col w-full items-start ">
        <span className="text-lg font-bold text-[#03989e]">{name}</span>
        <span className=" font-semibold">{subName}</span>
        <span className="text-[#03989e] text-sm opacity-85">{type}</span>
        <div className="font-semibold text-sm">
          {price}{" "}
          <s className="text-gray-400 font-normal text-xs ">
            MRP &#8377;{price - 1}
          </s>
        </div>
        <div className="w-full text-sm flex justify-between">
          <span>{stock}</span>
          <span className="text-[#03989e]">
            <IoShareSocialOutline />
          </span>
        </div>
        <span className="flex text-sm">
          <StarRatings
            rating={star}
            starRatedColor="yellow"
            numberOfStars={5}
            starEmptyColor="grey"
            starDimension="15px"
            starSpacing="2px"
            name="rating"
          />
        </span>

        <span className="text-sm mb-0.5">Unit : {unit}</span>
        <div className="flex w-full justify-between">
          <span className="text-xs flex justify-center items-center border border-gray-300 bg-gray-100 rounded overflow-hidden font-semibold p-1">
            Qty:
            <select className="outline-none bg-gray-100" name="Qty" id="Qty">
              <option value="600">600</option>
              <option value="700">700</option>
            </select>
          </span>
          <button className="flex text-xs cursor-pointer bg-[#03989e] text-white font-semibold p-1 gap-1 justify-center items-center rounded">
            <span className="cursor-pointer">
              <BsCartPlus />
            </span>
            <span className="cursor-pointer">Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
