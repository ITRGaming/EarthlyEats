import React from 'react'
import './AboutUs.css'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function AboutUs() {

    return (
        <>
            <NavBar />
            <img
                src='https://i.pinimg.com/564x/77/ee/82/77ee82816cebf6dccba8a9b044c737e1.jpg' // Replace with the path to your image
                alt='EarthlyEats'
                className='background-image'
            />
             <section className='title' id='hero'> 
                <div className='container position-relative text-center'>
                    <div className='row my-5'>
                        <div className='col-lg-12'>
                            <h1>Welcome to EarthlyEats</h1>
                            <h4>Delivering the best quality plant based meat</h4>
                        </div>
                    </div>
                </div>
            </section> 
            <section id='main' className='about'>
                <div className='container ' data-aos='fade-up'>
                    <div className=" row my-4">
                        <div className='col-lg-6 order-1 order-lg-2 ' >
                            <div className='about-img'>
                                <img src='./images/img3.jpg'></img>
                            </div>
                        </div>
                        <div className='col-lg-6 pt-4 pt-lg-0 order-0 order-lg-1 content'>
                            <h5>At EarthlyEats, we are on a mission to make plant-based living accessible, delicious, and convenient for everyone. Our journey began with a simple idea: to create a centralised platform where you can buy and enjoy your favorite meals guilt-free, knowing that they are cruelty-free and environmentally sustainable.</h5>
                            <p className='fst-italic'>
                                Our mission is to make it easy and convenient for you to access high-quality, delicious, and nutritious vegan products. Whether you've been a long-time vegan, are just starting your plant-based journey, or simply looking to incorporate more vegan options into your diet, we've got you covered.
                            </p>
                            <ul>
                                <li>
                                    <i className='bi bi-check-circle' />
                                    EarthlyEats offers a wide range of delectable vegan food crafted with the finest plant-based ingredients.
                                </li>
                                <li>
                                    <i className='bi bi-check-circle' />
                                    Our platform lets the users to order vegan food from a variety of manufacturers on a single platform.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id='why-us' className='why-us'>
                <div className='container'>
                    <div className='section-title'>
                        <h1>Why Us ?</h1>
                        <hr></hr>
                        <p>How are we different from others</p>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='box'>
                                <span>01</span>
                                <h4>One Stop Platform</h4>
                                <p>Our centralized platform for plant based meat is one of a kind where you can order various products produced by different manufacturers</p>
                            </div>
                        </div>
                        <div className='col-lg-4 mt-4 mt-lg-0'>
                            <div className='box'>
                                <span>02</span>
                                <h4>Curated Selection</h4>
                                <p>We carefully curate a wide range of products, from fresh produce to pantry staples, ensuring that everything we offer meets our high standards for quality and ethics</p>
                            </div>
                        </div>
                        <div className='col-lg-4 mt- mt-lg-0'>
                            <div className='box'>
                                <span>03</span>
                                <h4>Eco-Friendly Packaging</h4>
                                <p>We are committed to minimizing our environmental footprint. Our packaging is eco-friendly, recyclable, and designed to reduce waste</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default AboutUs;