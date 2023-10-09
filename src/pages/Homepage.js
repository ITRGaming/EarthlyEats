import React from 'react';
import './Homepage.css';
import ProductCard from '../components/ProductCard';
import NavBar from '../components/NavBar';
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
        {
            id: 7,
            productName: 'Plant Based Sudo Chicken Samosa',
            imageUrl: './images/samosa.png', // Replace with the actual image URL
        },
        {
            id: 8,
            productName: 'Plant Based Chicken Burger Patty',
            imageUrl: './images/keeema.png', // Replace with the actual image URL
        },
        {
            id: 9,
            productName: 'Plant Based Mozarella style Shreds ',
            imageUrl: './images/shreds.png', // Replace with the actual image URL
        },
        {
            id: 10,
            productName: 'Plant Based Drink Chocolate ',
            imageUrl: './images/drink.png', // Replace with the actual image URL
        },
        {
            id: 11,
            productName: 'Plant Based Beyond Beef ',
            imageUrl: './images/beef.png', // Replace with the actual image URL
        },

        // Add more product objects as needed
    ];
    return (
        <>
            <NavBar />

            <div className="Homepage">



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
        </>
    );
}
export default Homepage;
