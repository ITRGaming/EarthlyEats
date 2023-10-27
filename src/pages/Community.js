import React from 'react';
import NavBar from '../components/NavBar';
import NavBarseller from '../components/NavBarseller';
import './Community.css';
import Footer from '../components/Footer';
import { useAuth } from '../components/AuthContext';
function Community() {
  const { sellerIsLoggedIn } = useAuth();
  return (
    <>
       {sellerIsLoggedIn ?  <NavBarseller /> : <NavBar />}
      <div>
        <div className="bg">
          <img
            className=" pigu"
            src="./images/piguuuu.png"
            alt="community"
          ></img>
        </div>
        <div className="card-container">
          <div className="card card3">
            <div className="card-icon">
              <img className="earth" src="./images/earth.png" alt="Icon 1" />
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
            <img src="./images/ras.png" alt="Description " />
          </div>
          <div className="description">
            <h2 className="ras">Reduction of Animal Suffering</h2>
            <p className="para">
              One of the primary motivations for going vegan is to reduce the
              suffering of animals raised for food. In many conventional animal
              farming systems, animals endure harsh living conditions,
              overcrowding, confinement, and often inhumane treatment. By
              abstaining from animal products, you actively avoid contributing
              to these practices and send a clear message that you do not
              support the cruelty associated with factory farming.
            </p>
          </div>
        </div>
        {/* //2nd card */}
        <div className="horizontal-box-reversed">
          <div className="description-left">
            <h2 className="ras">Prevention of Animal Exploitation</h2>
            <p className="para">
              The vast majority of animals in the meat, dairy, and egg
              industries are bred, raised, and slaughtered for human
              consumption. Going vegan means refusing to participate in the
              commodification and exploitation of animals for food. I t's a
              stance against treating animals as mere commodities and promotes
              the idea that animals have intrinsic value and deserve to be
              treated with respect and compassion.
            </p>
          </div>
          <div className="image-right">
            <img src="./images/poae.png" alt="Description " />
          </div>
        </div>
        {/* //3rd card */}
        <div className="horizontal-box">
          <div className="image">
            <img src="./images/ras.png" alt="Description " />
          </div>
          <div className="description">
            <h2 className="ras">Conservation of Wildlife</h2>
            <p className="para">
              The animal agriculture industry is a major driver of habitat
              destruction, deforestation, and loss of biodiversity. Land is
              often cleared to make way for livestock farming or to grow animal
              feed crops. By choosing a vegan lifestyle, you reduce the demand
              for these practices, which can help protect the natural habitats
              of wildlife and prevent the extinction of endangered species.
            </p>
          </div>
        </div>
        {/* //4th card */}
        <div className="horizontal-box-reversed">
          <div className="description-left">
            <h2 className="ras">
              Reduction of Animal Agriculture's Environmental Impact
            </h2>
            <p className="para">
              :Animal agriculture is a significant contributor to environmental
              issues such as greenhouse gas emissions, water pollution, and soil
              degradation. By reducing your consumption of animal products, you
              lessen the environmental footprint associated with food
              production. This, in turn, can help preserve ecosystems where many
              wild animals reside.
            </p>
          </div>
          <div className="image-right">
            <img src="./images/poae.png" alt="Description" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Community;
