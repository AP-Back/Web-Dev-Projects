import React from "react";
import Link from "next/link";

import { useSelector } from "react-redux";

import { StateProps, StoreProduct } from "../../type";
import CartProduct from "@/components/CartProduct";
import ResetCart from "@/components/ResetCart";
import CartPayment from "@/components/CartPayment";

const CartPage = () => {
  const { products } = useSelector((state: StateProps) => state.next);

  return (
    <div className="max-w-screen-2xl mx-auto px-6 gap-10 py-4">
      {products.length > 0 ? (
        <div className="flex items-start justify-center flex-col md:flex-row gap-4">
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1">
              <p className="text-xl font-semibold text-amazon_blue">
                Shopping Cart
              </p>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              {products.map((item: StoreProduct) => (
                <div key={item._id}>
                  <CartProduct item={item} />
                </div>
              ))}
              <ResetCart />
            </div>
          </div>
          <div className="bg-white w-full md:w-[50%] h-64 p-4 rounded-lg flex items-center justify-center">
            <CartPayment />
          </div>
        </div>
      ) : (
        <div className="bg-white h-screen col-span-5 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg">
          <h1 className="text-lg font-medium mb-3">Your cart is empty!</h1>
          <Link href={"/"}>
            <button className="w-52 h-10 bg-amazon_blue text-white rounded-lg text-sm font-semibold hover:bg-amazon_yellow hover:text-black">
              Go to shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
