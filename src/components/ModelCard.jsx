import React, { useState } from 'react';


const ModelCard = ({model}) => {
    const [isSubscribe, setSubscribe] = useState(false)
    const handleSubscription = ()=>{
        setSubscribe(true)
    }
    return (
        <div className='shadow-lg rounded-lg overflow-hidden'>
            <div className='flex justify-center items-center h-56 bg-zinc-300'>
                <img className='h-40 w-40 object-contain    ' src={model.image} alt="image" />
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