import React from 'react';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const Cart = ({carts, setCarts}) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0) 
    const handlePayment = ()=>{
        setCarts([])
        toast.success(`Payment successful! Total: $${totalPrice}`)  
    } 
    const handleDelete = (item)=>{
        const newCarts = carts.filter(cartItem => cartItem.id !== item.id)
        setCarts(newCarts)
        toast.success(`${item.title} removed from cart!`) 
    }
    return (
        <div className='p-10 max-w-7xl mx-auto'>
            <h1 className='text-2xl font-bold'>Your Cart</h1>
            {
                carts.length === 0 ? <p className='text-center text-2xl p-5'>Cart is empty</p> :
                <>
                    <div className='space-y-5 mt-4'>
                {
                    carts.map(item => <div className='flex items-center justify-between border rounded-lg p-3 bg-zinc-300' key={item.id}>
                        <div className='flex items-center gap-2'>
                            <div>
                                <img className='h-20 w-20 object-contain' src={item.image} alt="" />
                            </div>
                            <div>
                                <h2 className='text-xl font-bold'>{item.title}</h2>
                            </div>
                        </div>
                        <div className='flex items-center md:gap-10'>
                            <div className='text-xl md:text-3xl font-bold'>${item.price}/month</div>
                            <button onClick={()=>handleDelete(item)} className='btn btn-error rounded-full text-xl'><MdDelete /></button>
                        </div>
                    </div>
                )}
                </div>
                <div className='flex justify-between bg-black text-white p-5 mt-5 rounded-lg text-3xl font-bold'>
                    <div>Total</div>
                    <div>${totalPrice}</div>
                </div>
                <button onClick={handlePayment} className='btn w-full bg-red-500 mt-5 rounded-lg text-2xl text-white py-6'>Proceed to Checkout</button>
                </>
            }
                
        </div>
    );
};

export default Cart;