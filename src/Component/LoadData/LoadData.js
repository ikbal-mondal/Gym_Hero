import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Carts from '../../Cart/Carts';

import './LoadData.css'


const LoadData = () => {

const [data,setData] = useState([])
const [cart,setCart] = useState([])

useEffect(() =>{

    fetch('FakeData.json')
    .then(res => res.json())
    .then(data => setData(data))
},[])

const handleAddToCart = (data) => {

    // console.log(data);
    const newCart = [...cart , data] 
   setCart(newCart);
}


    return (
        <div className="all-cartWrap grid  grid-cols-1 lg:grid-cols-4  mx-auto">

<div className="cart-container w-11/12  grid  col-span-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 m-12  bg-white-100">

            {
                
                data.map(data =><DisplayData
                   
                 key={data.id}
                 data={data}
                 handleAddToCart={handleAddToCart}
                 ></DisplayData>)
               
                 
             }     
              
           
              </div>

        
      
      <div className=' '>
 
    <Carts carts={data}></Carts>


      </div>



     </div>
      
    );
};


const DisplayData = ({data,handleAddToCart}) => {

    const {img, name,Time,date, } = data;

    
  

    return (
      
        <div className='shadow-2xl rounded'>
   <figure><img className='rounded' src={img} alt="Shoes" /></figure>
   <div className="card-body">
    <h2 className="card-title">Name:{name}</h2>
    <p>Time: {Time}</p>
    <p>date: {date}</p>
    <div className="card-actions justify-end">
      <button onClick={() =>  handleAddToCart(data)} className="btn btn-primary w-full" >Add to list</button>
    </div>
    </div>

    
   </div>
      
    )

}



 export default LoadData;