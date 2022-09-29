import React from 'react';


const Carts = ({carts}) => {

    const {data} = carts;
   
    return (
        <div>
                   {/* ---------- box start--------------------- */}
        <div className=" custom-asideBar w-11/12 mx-auto  bg-slate-300 rounded shadow-2xl">


<div className="containWrapper  ">

<div className="flex p-3">
<div className="mx-2">
<img className='w-12' src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" alt="" />
</div>
<div className="mx-2">
<h2> Hello World</h2>
<h3>location...</h3>
</div>
</div>

<div className="flex bg-slate-200 m-3 rounded ">
<div className="p-4  mx-1">
<div className="">
<h1 className='text-2xl font-bold'>75 <small className='text-sm'>kg</small></h1>
<p className='text-1xl font-semibold'>Weight</p>

</div>
</div>
<div className="p-4 mx-1">
<div className="">
<h1 className='text-2xl font-bold'>7.3</h1>
<p className='text-1xl font-semibold'>Height</p>

</div>
</div>
<div className="p-4 mx-1">
<div className="">
<h1 className='text-2xl font-bold'>45 <small className='text-sm'>years</small></h1>
<p className='text-1xl font-semibold'>Age</p>

</div>
</div>
</div>
<div className="">
<h1 className='text-2xl font-semibold m-2'>Add A Break</h1>
</div>
{/* ------------------------------ */}


<div className="flex bg-slate-200 rounded m-3">

<div className="bg-slate-100 rounded-full p-5 m-2"><span>3s</span></div>
<div className="bg-slate-100 rounded-full p-5 m-2"><span>6s</span></div>
<div className="bg-slate-100 rounded-full p-5 m-2"><span>9s</span></div>
<div className="bg-slate-100 rounded-full p-5 m-2"><span>4s</span></div>

</div>
{/* hkjdfhkdjshfkjdsfhkjsdhfjk */}

<div className="">
<h1 className='text-2xl font-semibold m-2'>Exercise Details</h1>
</div>

<div className="flex bg-slate-200 rounded m-3 justify-around">

<div className=" p-3">
<h1>Exercise time</h1>
</div>
<div className=" p-3">
<h2>totalTime:{data}</h2>
</div>

</div>
{/* ------------- ------------------ */}
<div className="flex bg-slate-200 rounded m-3 justify-around mt-5">

<div className=" p-3">
<h1>Break time</h1>
</div>
<div className=" p-3">
<h2>18 seconds</h2>
</div>

</div>
{/* ---------------------------- */}
<div className="">
<button className="btn btn-primary w-full ">Activity Completed</button>
</div>
</div>

</div>
{/* ------------- box end ------------------- */}
  

        </div>
    );
};

export default Carts;