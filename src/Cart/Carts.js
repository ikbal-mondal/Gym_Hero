import React from "react";
import "./Carts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Carts = ({ cart, getData, breckTime }) => {
  let time = 0;

  for (const data of cart) {
    time = time + data.Time;
  }

  const tosTyFy = () => {
    toast(" Your Activity done ! ");
  };

  return (
    <div>
      {/* ---------- box start--------------------- */}
      <div className=" custom-asideBar w-11/12 mx-auto  bg-slate-900 rounded shadow-2xl pb-3 mb-4">
        <div className="containWrapper  ">
          <div className="flex p-3">
            <div className="mx-2">
              <img
                className="w-12 rounded-2xl"
                src="https://www.seekpng.com/png/detail/847-8474751_download-empty-profile.png"
                alt=""
              />
            </div>
            <div className="mx-2 text-white">
              <h2> ikbal Mondal</h2>
              <h3>India</h3>
            </div>
          </div>

          <div className="flex bg-slate-200 m-3 rounded ">
            <div className="p-4  mx-1">
              <div className="">
                <h1 className="text-2xl font-bold">
                  52 <small className="text-sm">kg</small>
                </h1>
                <p className="text-1xl font-semibold">Weight</p>
              </div>
            </div>
            <div className="p-4 mx-1">
              <div className="">
                <h1 className="text-2xl font-bold">5.3</h1>
                <p className="text-1xl font-semibold">Height</p>
              </div>
            </div>
            <div className="p-4 mx-1">
              <div className="">
                <h1 className="text-2xl font-bold">
                  21 <small className="text-sm">years</small>
                </h1>
                <p className="text-1xl font-semibold">Age</p>
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="text-2xl font-semibold m-2 text-white">Add A Break</h1>
          </div>
          {/* ------------------------------ */}

          <div className="flex bg-slate-200 rounded m-3">
            <div 
              className=" hover:bg-slate-400 bg-slate-100 rounded-full p-5 m-2"
              onClick={(e) => getData(e.target.innerText)}
            >
              <span className="">7s</span>
            </div>
            <div
              className="bg-slate-100 hover:hover:bg-slate-400 rounded-full p-5 m-2"
              onClick={(e) => getData(e.target.innerText)}
            >
              <span className="">1s</span>
            </div>
            <div
              className="bg-slate-100 hover:hover:bg-slate-400 rounded-full p-5 m-2"
              onClick={(e) => getData(e.target.innerText)}
            >
              <span className="">2s</span>
            </div>
            <div
              className="bg-slate-100 hover:hover:bg-slate-400 rounded-full p-5 m-2"
              onClick={(e) => getData(e.target.innerText)}
            >
              <span className="">4s</span>
            </div>
          </div>

          <div className="">
            <h1 className="text-2xl font-semibold m-2 text-white">Exercise Details</h1>
          </div>

          <div className="flex bg-slate-200 rounded m-3 justify-around">
            <div className=" p-3">
              <h1>Exercise time</h1>
            </div>
            <div className=" p-3">
              <h2>{time} Seconds</h2>
            </div>
          </div>
          {/* ------------- ------------------ */}
          <div className="flex bg-slate-200 rounded m-3 justify-around mt-5">
            <div className=" p-3">
              <h1>Break time</h1>
            </div>
            <div className=" p-3">
              <h2> {breckTime} seconds</h2>
            </div>
          </div>
          {/* ---------------------------- */}

          <div className="">
            <button
              className="btn btn-primary w-full  

"
              onClick={tosTyFy}
            >
              Activity Completed
            </button>
          </div>
          <ToastContainer />
        </div>
      </div>
      {/* ------------- box end ------------------- */}
    </div>
  );
};

export default Carts;
