import Image from "next/image";
import React from "react";
import FormattedPrice from "./FormattedPrice";
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoMdClose, IoMdTrash } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@/store/nextSlice";
interface Item {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
  quantity: number;
}
interface cartProductsProps {
  item: Item;
}

const CartProduct = ({ item }: cartProductsProps) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-100 rounded-lg flex items-center gap-3 py-3 md:flex-row flex-col">
      <Image
        className="object-cover"
        width={150}
        height={150}
        src={item.image}
        alt="productImage"
      />
      <div className="flex items-center px-2 gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-amazon_blue">{item.title}</p>
          <p className="text-sm text-gray-600 mb-2">{item.description}</p>
          <p className="text-sm text-gray-600 mb-2">
            Unit Price:{" "}
            <span className="font-semibold text-amazon_blue">
              <FormattedPrice amount={item.price} />
            </span>
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-5">
              <div className="flex items-center mt-1 justify-between border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300">
                <span
                  onClick={() =>
                    dispatch(
                      increaseQuantity({
                        _id: item._id,
                        brand: item.brand,
                        category: item.category,
                        description: item.description,
                        image: item.image,
                        isNew: item.isNew,
                        oldPrice: item.oldPrice,
                        price: item.price,
                        title: item.title,
                        quantity: 1,
                      })
                    )
                  }
                  className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
                >
                  <LuPlus />
                </span>
                <span>{item.quantity}</span>
                <span
                  onClick={() =>
                    dispatch(
                      decreaseQuantity({
                        _id: item._id,
                        brand: item.brand,
                        category: item.category,
                        description: item.description,
                        image: item.image,
                        isNew: item.isNew,
                        oldPrice: item.oldPrice,
                        price: item.price,
                        title: item.title,
                        quantity: 1,
                      })
                    )
                  }
                  className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
                >
                  <LuMinus />
                </span>
              </div>
              <div
                onClick={() => dispatch(deleteProduct(item._id))}
                className="flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300"
              >
                <IoMdTrash className="mt-[2px] text-xl" />
              </div>
            </div>
            <div className="text-lg font-semibold text-amazon_blue">
              <FormattedPrice amount={item.price * item.quantity} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
