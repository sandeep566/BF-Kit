import React from 'react'
import deliveryBoy from '../static/deliveryBoy.png';
import './Home.css';

const Home = () => {
return (
    <>
        <div className='container' id='home'>
            <div className='row align-items-center'>
                <div className='col-12 col-md-6 hero-heading mt-5'>
                    <h1>Savor South India On-the-Go!</h1>
                    <p>Experience the essence of South Indian cuisine wherever you are with our mobile idly's and vada service. Fresh, flavorful, and delivered with a smile, it's a taste journey you won't want to miss!</p>
                </div>
                <div className='col-12 col-md-6'>
                    <img className='align-middle delivery-img' src={deliveryBoy}></img>
                </div>
            </div>
        </div>
    </>
)
}
export default Home;
