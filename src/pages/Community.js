import React from 'react';
import NavBar from '../components/NavBar';
import './Community.css';
function Community() {
    return (
        <>
            <NavBar />
            <div>
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
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit"><img className="search" src="https://cdn-icons-png.flaticon.com/128/2951/2951199.png" alt="search"  ></img></button>
                        </a>
                    </form>
                    <form className="form-inline d-flex">

                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit"><img className="search" src="https://cdn-icons-png.flaticon.com/128/833/833314.png" alt="cart"></img></button>
                    </form>

                </div>
            </nav> */}
                <div className="bg">
                    <img className=" pigu" src="./images/piguuuu.png" alt="community"></img>
                </div>
                <div className="card-container">
                    <div className="card card3">

                        <div className="card-icon">
                            <img className='earth' src="./images/earth.png" alt="Icon 1" />
                        </div>
                        <div className="card-content">
                            <h5>Environmental Sustainability</h5>

                        </div>

                    </div>

                    <div className="card card2">

                        <div className="card-icon">
                            <img src="./images/1.png" alt="Icon 2" />
                        </div>
                        <div className="card-content">
                            <h5>Health Benefits</h5>
                        </div>
                    </div>


                    <div className="card card1">

                        <div className="card-icon">
                            <img src="./images/2.png" alt="Icon 3" />
                        </div>
                        <div className="card-content">
                            <h5>Ethical and Compassionate Choice</h5>

                        </div>
                    </div>
                </div>
                {/* //1st card */}
                <div className="horizontal-box">
                    <div className="image">
                        <img src="./images/ras.png" alt="Description Image" />
                    </div>
                    <div className="description">
                        <h2 className="ras">Reduction of Animal Suffering</h2>
                        <p className="para" >
                            One of the primary motivations for going vegan is to reduce the suffering of animals raised for food. In many conventional animal farming systems, animals endure harsh living conditions, overcrowding, confinement, and often inhumane treatment.
                            By abstaining from animal products, you actively avoid contributing to these practices and send a clear message that you do not support the cruelty associated with factory farming.
                        </p>
                    </div>
                </div>
                {/* //2nd card */}
                <div className="horizontal-box-reversed">
                    <div className="description-left">
                        <h2 className="ras">Prevention of Animal Exploitation</h2>
                        <p className="para">
                            The vast majority of animals in the meat, dairy, and egg industries are bred, raised, and slaughtered for human consumption.
                            Going vegan means refusing to participate in the commodification and exploitation of animals for food. I
                            t's a stance against treating animals as mere commodities and promotes the idea that animals have intrinsic value and deserve to be treated with respect and compassion.
                        </p>
                    </div>
                    <div className="image-right">
                        <img src="./images/poae.png" alt="Description Image" />
                    </div>
                </div>
                {/* //3rd card */}
                <div className="horizontal-box">
                    <div className="image">
                        <img src="./images/ras.png" alt="Description Image" />
                    </div>
                    <div className="description">
                        <h2 className="ras">Conservation of Wildlife</h2>
                        <p className="para" >
                            The animal agriculture industry is a major driver of habitat destruction, deforestation, and loss of biodiversity. Land is often cleared to make way for livestock farming or to grow animal feed crops. By choosing a vegan lifestyle, you reduce the demand for these practices, which can help protect the natural habitats of wildlife and prevent the extinction of endangered species.
                        </p>
                    </div>
                </div>
                {/* //4th card */}
                <div className="horizontal-box-reversed">
                    <div className="description-left">
                        <h2 className="ras">Reduction of Animal Agriculture's Environmental Impact</h2>
                        <p className="para">
                            :Animal agriculture is a significant contributor to environmental issues such as greenhouse gas emissions, water pollution, and soil degradation. By reducing your consumption of animal products, you lessen the environmental footprint associated with food production. This, in turn, can help preserve ecosystems where many wild animals reside.
                        </p>
                    </div>
                    <div className="image-right">
                        <img src="./images/poae.png" alt="Description Image" />
                    </div>
                </div>

            </div>
        </>



    );
}
export default Community;