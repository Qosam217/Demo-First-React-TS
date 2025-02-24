import "./Cards.css";
import CardItem from "./CardItem";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check Out This Awesome Destionation</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/assets/images/img-9.jpg"
              text="Explore Hidden Waterfall"
              label="Adventure"
              path="/service"
            />
            <CardItem
              src="/assets/images/img-2.jpg"
              text="Enjoy Relaxing in Bali"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/assets/images/img-3.jpg"
              text="Sail in Atlantic Oceans"
              label="Sail"
              path="/services"
            />
            <CardItem
              src="/assets/images/img-4.jpg"
              text="Football in Himalayan Mountain"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="/assets/images/img-8.jpg"
              text="Ride Through Sahara Dessert"
              label="Travel"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
