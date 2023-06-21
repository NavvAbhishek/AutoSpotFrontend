import React from "react";
import Blog1 from "../assets/Blog1.jpg";

export default function Blog() {
  return (
    <div className="max-w-full pt-16">
      <div className="flex justify-center text-3xl font-bold pb-12">
        Our Featured
      </div>
      <div className=" flex flex-wrap justify-center items-center gap-10">
        {/*  */}
        <div className="">
          <img src={Blog1} alt="Featured image 1" className="w-72 h-auto" />
          <div className="bg-green-200 flex flex-col justify-center items-start px-4 py-6 gap-2">
            <div className="flex justify-center items-center gap-20 pb-3">
              <p className="text-xs">By Smith</p>
              <p className="text-sm font-bold bg-green-900 text-white px-2 py-1">
                10th Jan, 2019
              </p>
            </div>
            <p className="text-1xl font-bold">General Car Service</p>
            <p className="text-sm text-green-900 font-semibold cursor-pointer">Read more...</p>
          </div>
        </div>
        {/*  */}
        <div className="">
          <img src={Blog1} alt="Featured image 1" className="w-72 h-auto" />
          <div className="bg-green-200 flex flex-col justify-center items-start px-4 py-6 gap-2">
            <div className="flex justify-center items-center gap-20 pb-3">
              <p className="text-xs">By Smith</p>
              <p className="text-sm font-bold bg-green-900 text-white px-2 py-1">
                10th Jan, 2019
              </p>
            </div>
            <p className="text-1xl font-bold">General Car Service</p>
            <p className="text-sm text-green-900 font-semibold cursor-pointer">Read more...</p>
          </div>
        </div>
        {/*  */}
        <div className="">
          <img src={Blog1} alt="Featured image 1" className="w-72 h-auto" />
          <div className="bg-green-200 flex flex-col justify-center items-start px-4 py-6 gap-2">
            <div className="flex justify-center items-center gap-20 pb-3">
              <p className="text-xs">By Smith</p>
              <p className="text-sm font-bold bg-green-900 text-white px-2 py-1">
                10th Jan, 2019
              </p>
            </div>
            <p className="text-1xl font-bold">General Car Service</p>
            <p className="text-sm text-green-900 font-semibold cursor-pointer">Read more...</p>
          </div>
        </div>
        {/*  */}
        <div className="">
          <img src={Blog1} alt="Featured image 1" className="w-72 h-auto" />
          <div className="bg-green-200 flex flex-col justify-center items-start px-4 py-6 gap-2">
            <div className="flex justify-center items-center gap-20 pb-3">
              <p className="text-xs">By Smith</p>
              <p className="text-sm font-bold bg-green-900 text-white px-2 py-1">
                10th Jan, 2019
              </p>
            </div>
            <p className="text-1xl font-bold">General Car Service</p>
            <p className="text-sm text-green-900 font-semibold cursor-pointer">Read more...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
