import React, { useState } from 'react';
import '../components/ProductCard.css';
import ProductCard from '../components/ProductCard';
import "./Search.css"


function Search() {
    const [search, setSearch] = useState('');
    console.log(search);


    const products = [

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


    ];
    return (
        <>
            <form className="form-inline">
                <input class="form-control mr-sm-2" type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
                {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
            </form>


            <div className="container">
                <div className="product">
                    <div className="row">
                        {products
                            .filter((product) => {
                                const productName = product.productName || " "; // Ensure productName is a string
                                return search.toLowerCase() === "" ? true : productName.toLowerCase().includes(search.toLowerCase());
                            })
                            .map((product) => (
                                <div className="col-md-4" key={product.id}>
                                    <ProductCard productName={product.productName} imageUrl={product.imageUrl} />
                                </div>
                            ))}

                    </div>
                </div>
            </div>
        </>
    );

}
export default Search;