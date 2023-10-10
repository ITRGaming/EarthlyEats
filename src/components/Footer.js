import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <>
            <div className='fixed-footer' id='footer'>
                {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
                <div className="my-5">
                    {/* <!-- Footer --> */}
                    <footer
                        className="text-center text-lg-start text-white"
                        style={{backgroundColor: "#183D3D"}}
                    >
                        {/* <!-- Grid container --> */}
                        <div className="container p-4 pb-0">
                            {/* <!-- Section: Links --> */}
                            <section className="">
                                {/* <!--Grid row--> */}
                                <div className="row">
                                    {/* <!-- Grid column --> */}
                                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                        <h6 className="text-uppercase mb-4 font-weight-bold">
                                            EarthlyEats
                                        </h6>
                                        <p>
                                            Our mission is to provide the customers with the best
                                            vegan food provided by our certified sellers.
                                        </p>
                                    </div>
                                    {/* <!-- Grid column --> */}

                                    <hr className="w-100 clearfix d-md-none" />

                                    {/* <!-- Grid column --> */}
                                    <div className="col-md-2 col-lg-24 col-xl-3 mx-auto mt-3">
                                        <h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
                                        <p>
                                            <a className="text-white">Become a Certified Seller</a>
                                        </p>
                                        <p>
                                            <a className="text-white">Buy Products</a>
                                        </p>
                                        <p>
                                            <a className="text-white">Checkout the Community</a>
                                        </p>
                                        <p>
                                            <a className="text-white">About Us </a>
                                        </p>
                                    </div>
                                    {/* <!-- Grid column --> */}

                                    <hr className="w-100 clearfix d-md-none" />

                                    {/* <!-- Grid column --> */}
                                    <hr className="w-100 clearfix d-md-none" />

                                    {/* <!-- Grid column --> */}
                                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                        <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                        <p><i className="fas fa-home mr-3"></i> Mumbai, Malad, INDIA</p>
                                        <p><i className="fas fa-envelope mr-3"></i> earthlyeats@gmail.com</p>
                                        <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                        <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                                    </div>
                                    {/* <!-- Grid column --> */}

                                    {/* <!-- Grid column --> */}
                                    <div className="col-md-3 col-lg-2 col-xl-3 mx-auto mt-3">
                                        <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                                        {/* <!-- Facebook --> */}
                                        <a
                                            className="btn btn-primary btn-floating m-1"
                                            style={{backgroundColor: "#3b5998"}}
                                            href="#!"
                                            role="button"
                                        ><i className="fab fa-facebook-f"></i
                                        ></a>

                                        {/* <!-- Twitter --> */}
                                        <a
                                            className="btn btn-primary btn-floating m-1"
                                            style={{backgroundColor: "#55acee"}}
                                            href="#!"
                                            role="button"
                                        ><i className="fab fa-twitter"></i
                                        ></a>

                                        {/* <!-- Google --> */}
                                        <a
                                            className="btn btn-primary btn-floating m-1"
                                            style={{backgroundColor: "#dd4b39"}}
                                            href="#!"
                                            role="button"
                                        ><i className="fab fa-google"></i
                                        ></a>

                                        {/* <!-- Instagram --> */}
                                        <a
                                            className="btn btn-primary btn-floating m-1"
                                            style={{backgroundColor: "#ac2bac"}}
                                            href="#!"
                                            role="button"
                                        ><i className="fab fa-instagram"></i
                                        ></a>

                                        {/* <!-- Linkedin --> */}
                                        <a
                                            className="btn btn-primary btn-floating m-1"
                                            style={{backgroundColor: "#0082ca"}}
                                            href="#!"
                                            role="button"
                                        ><i className="fab fa-linkedin-in"></i
                                        ></a>
                                        {/* <!-- Github --> */}
                                        <a
                                            className="btn btn-primary btn-floating m-1"
                                            style={{backgroundColor: "#333333"}}
                                            href="#!"
                                            role="button"
                                        ><i className="fab fa-github"></i
                                        ></a>
                                    </div>
                                </div>
                                {/* <!--Grid row--> */}
                            </section>
                            {/* <!-- Section: Links --> */}
                        </div>
                        {/* <!-- Grid container --> */}

                        {/* <!-- Copyright --> */}
                        <div
                            className="text-center p-3"
                            style={{ backgroundColor: "black"}}>
                            © 2023 Copyright:
                            <a className="text-white"
                            ></a>
                        </div>
                        {/* <!-- Copyright --> */}
                    </footer>
                    {/* <!-- Footer --> */}
                </div>
                {/* <!-- End of .container --> */}
            </div>
        </>
    );
};

export default Footer;