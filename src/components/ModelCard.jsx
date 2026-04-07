import React, { useState } from 'react';
import { toast } from 'react-toastify';


const ModelCard = ({model, carts, setCarts}) => {
    const [isSubscribe, setSubscribe] = useState(false)
    const handleSubscription = ()=>{
        setSubscribe(true)
        const alreadyAdded = carts.find(cartItem => cartItem.id === model.id)
        if(alreadyAdded){
            toast.error(`${model.title} is already in the cart!`)
            return
        }
        setCarts([...carts, model])
        toast.success(`${model.title} added to cart!`)
    }
    return (
        <div className='shadow-lg rounded-lg overflow-hidden w-11/12 mx-auto'>
            <div className='flex justify-center items-center h-56 bg-zinc-300'>
                <img className='h-40 w-40 object-contain' src={model.image} alt="image" />
            </div>
            <div className='p-4 space-y-3'>
                <h3 className='text-2xl font-bold'>{model.title}</h3>
                <p>{model.description}</p>
                <div className='text-2xl font-bold'>${model.price}/month</div>
                <button onClick={handleSubscription} className='btn w-full bg-red-500 rounded-lg text-white mt-5'>{isSubscribe ? "Subscribed" : "Subscribe Now"}</button>
            </div>
        </div>
    );
};

export default ModelCard;