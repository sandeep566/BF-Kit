import React from 'react'
import './Menu.css';
import idli from '../static/Menu/idli.jpg';
import vada from '../static/Menu/vada.jpg';
import combo from '../static/Menu/combo.jpg';
import gheeIdli from '../static/Menu/gheeIdli.jpg';
import gheePudiIdli from '../static/Menu/gheePudiIdli.jpg';
const Menu = () => {
  return (
    <div className='menu-section' id='menu'>
        <div className='container'>
        <div className='row'>
            <div className='col-sm-12'>
                <h1 className='menu-heading mt-3'>Our Menu</h1>
            </div>
            <div className='col-sm-12'>
                <div className='menu-item d-flex mb-3 border p-3 shadow animate__animated animate__fadeInLeftBig animate__delay-1s'>
                    <img src={idli} className='menu-item-img rounded'></img>
                    <div className="menu-item-text">
                        <h3 className='menu-item-heading d-flex justify-content-between'>
                            <span className="menu-item-name">idli</span>
                            {/* <span class="menu-item-price">35 rs</span> */}
                        </h3>
                        <p className="menu-item-desc">
                        A South Indian staple perfected through generations, our idlis are soft, fluffy rice cakes with a delicate texture. Light and easily digestible, they serve as a wholesome breakfast or a comforting snack any time of the day. Paired with sambar and chutneys, our idlis promise a taste of authentic South Indian cuisine that's both satisfying and nourishing.
                        </p>
                    </div>
                </div>
                <div className='menu-item d-flex mb-3 border p-3 shadow animate__animated animate__fadeInRightBig animate__delay-2s'>
                    <img src={vada} className='menu-item-img rounded'></img>
                    <div className="menu-item-text">
                        <h3 className='menu-item-heading d-flex justify-content-between'>
                            <span className="menu-item-name">vada</span>
                            {/* <span class="menu-item-price">35 rs</span> */}
                        </h3>
                        <p className="menu-item-desc">
                        Crispy and flavorful South Indian fritters made from a blend of lentils, herbs, and spices. Deep-fried to golden perfection, these savory delights are a delightful accompaniment to any meal or a satisfying snack on their own.
                        </p>
                    </div>
                </div>
                <div className='menu-item d-flex mb-3 border p-3 shadow animate__animated animate__fadeInLeftBig animate__delay-3s'>
                    <img src={combo} className='menu-item-img rounded'></img>
                    <div className="menu-item-text">
                        <h3 className='menu-item-heading d-flex justify-content-between'>
                            <span className="menu-item-name">idli and vada (combo)</span>
                            {/* <span class="menu-item-price">35 rs</span> */}
                        </h3>
                        <p className="menu-item-desc">
                        Experience the best of both worlds with our signature combo featuring soft and fluffy idlis paired with crispy vadas. Served with an assortment of chutneys and sambar, this flavorful duo offers a perfect balance of textures and tastes for a truly satisfying meal.
                        </p>
                    </div>
                </div>
                <div className='menu-item d-flex mb-3 border p-3 shadow animate__animated animate__fadeInRightBig animate__delay-4s'>
                    <img src={gheeIdli} className='menu-item-img rounded'></img>
                    <div className="menu-item-text">
                        <h3 className='menu-item-heading d-flex justify-content-between'>
                            <span className="menu-item-name">Ghee idli</span>
                            {/* <span class="menu-item-price">35 rs</span> */}
                        </h3>
                        <p className="menu-item-desc">
                        Indulge in a taste of tradition with our aromatic ghee-infused idlis. Soft, fluffy rice cakes enriched with the richness of clarified butter, offering a melt-in-your-mouth experience. Enjoy the subtle sweetness and buttery goodness of ghee combined with the comforting texture of idlis, creating a delightful culinary journey.
                        </p>
                    </div>
                </div>
                <div className='menu-item d-flex mb-3 border p-3 shadow animate__animated animate__fadeInLeftBig animate__delay-5s'>
                    <img src={gheePudiIdli} className='menu-item-img rounded'></img>
                    <div className="menu-item-text">
                        <h3 className='menu-item-heading d-flex justify-content-between'>
                            <span className="menu-item-name">Ghee pudi idli</span>
                            {/* <span class="menu-item-price">35 rs</span> */}
                        </h3>
                        <p className="menu-item-desc">
                        Elevate your idli experience with our Ghee Pudi Idli, where the delicate flavors of traditional South Indian spices blend harmoniously with the richness of ghee-infused idlis. Each bite offers a burst of aromatic spices, complemented by the subtle sweetness of ghee, creating a symphony of flavors that tantalize the taste buds. It's a culinary adventure you won't want to miss.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Menu