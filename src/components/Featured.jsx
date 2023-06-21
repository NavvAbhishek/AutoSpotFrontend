import React from "react";
import Featured1 from "../assets/featured1.jpg";

export default function Featured() {
  return (
    <div className="max-w-full pt-16">
      <div className="flex justify-center text-3xl font-bold pb-12">Our Featured</div>
      <div className=" flex flex-wrap justify-center items-center gap-10">
        {/*  */}
        <div className="">
          <img src={Featured1} alt="Featured image 1" className="w-72 h-auto" />
          <div className="bg-green-200 flex flex-col justify-center items-start px-4 py-6 gap-2">
          <p className="text-1xl font-bold">General Car Service</p>
          <p className="text-sm">
            In terms of staffing, we are a very <br />
            small company, In terms Of sales, <br />
            we are huge;
          </p>
          <p className="text-sm text-green-900 font-bold">Read more...</p>
          </div>
        </div>
        {/*  */}
        <div className="">
          <img src={Featured1} alt="Featured image 1" className="w-72 h-auto" />
          <div className="bg-green-200 flex flex-col justify-center items-start px-4 py-6 gap-2">
          <p className="text-1xl font-bold">General Car Service</p>
          <p className="text-sm">
            In terms of staffing, we are a very <br />
            small company, In terms Of sales, <br />
            we are huge;
          </p>
          <p className="text-sm text-green-900 font-bold">Read more...</p>
          </div>
        </div>
        {/*  */}
        <div className="">
          <img src={Featured1} alt="Featured image 1" className="w-72 h-auto" />
          <div className="bg-green-200 flex flex-col justify-center items-start px-4 py-6 gap-2">
          <p className="text-1xl font-bold">General Car Service</p>
          <p className="text-sm">
            In terms of staffing, we are a very <br />
            small company, In terms Of sales, <br />
            we are huge;
          </p>
          <p className="text-sm text-green-900 font-bold">Read more...</p>
          </div>
        </div>
        {/*  */}
        <div className="">
          <img src={Featured1} alt="Featured image 1" className="w-72 h-auto" />
          <div className="bg-green-200 flex flex-col justify-center items-start px-4 py-6 gap-2">
          <p className="text-1xl font-bold">General Car Service</p>
          <p className="text-sm">
            In terms of staffing, we are a very <br />
            small company, In terms Of sales, <br />
            we are huge;
          </p>
          <p className="text-sm text-green-900 font-bold">Read more...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
