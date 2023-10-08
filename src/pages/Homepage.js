import React from 'react';
import './Homepage.css';
import ProductCard from '../components/ProductCard';
// import ContactUs from '../components/Contactus';

function Homepage() {
    // const goToCartPage = () => {


    // };

    const products = [
        // {
        //     id: 1,
        //     productName: 'Plant Based Peppy Popcorn',
        //     imageUrl: './images/plantbasedpeppypopcorn.png', // Replace with the actual image URL
        // },
        {
            id: 1,
            productName: 'Plant Based Peppy Popcorn',
            imageUrl: './images/plantbasedpeppypopcorn.png', // Replace with the actual image URL
        },
        {
            id: 2,
            productName: 'Plant Based Chicken Keema',
            imageUrl: './images/keema.png', // Replace with the actual image URL
        },
        {
            id: 3,
            productName: 'Plant Based Mutton Seekh Kebab',
            imageUrl: './images/kebab.png', // Replace with the actual image URL
        },
        {
            id: 4,
            productName: 'Plant Based Chicken Nuggets',
            imageUrl: './images/nuggets.png', // Replace with the actual image URL
        },
        {
            id: 5,
            productName: 'Plant Based Chicken Momo',
            imageUrl: './images/momo.png', // Replace with the actual image URL
        },
        {
            id: 6,
            productName: 'Plant Based Chicken Momo',
            imageUrl: './images/pepperoni.png', // Replace with the actual image URL
        },

        // Add more product objects as needed
    ];
    return (
        <div className="Homepage">

            {/* <nav class="navbar navbar-expand-lg bg-body-tertiary ">
                <div class="container-fluid">
                    <img src=" " alt=" logo"></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item ">
                                <a className="nav-link active" href="#">Community</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link active" href="#">About Us

                                </a>
                            </li>
                        </ul>

                    </div>
                    <form className="form-inline d-flex">
                        <a href="./Cart.js" >
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit"><img className="search" src="https://cdn-icons-png.flaticon.com/128/2951/2951199.png" alt="search" onClick={goToCartPage} ></img></button>
                        </a>
                    </form>
                    <form className="form-inline d-flex">

                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit"><img className="search" src="https://cdn-icons-png.flaticon.com/128/833/833314.png" alt="cart" onClick={goToCartPage} ></img></button>
                    </form>

                </div>
            </nav> */}

            <div className="slogan d-flex justify-content-center">
                <img src="./images/Slogan.png" alt="slogan" style={{ marginBottom: '20px' }}


                ></img>

            </div>
            <div className="appetite d-flex justify-content-center">
                <img className="appetite-img" src="./images/appetite.png" alt="slogan"
                    width="550" height="70" style={{ marginBottom: '20px' }}
                ></img>

            </div>
            <div className="container">
                <div className="product">



                    <div className="row">
                        {products.map((product) => (
                            <div className="col-md-4" key={product.id}>
                                <ProductCard productName={product.productName} imageUrl={product.imageUrl} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <form className='form'>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>

            </div>
        </div>
    );
}
export default Homepage;
