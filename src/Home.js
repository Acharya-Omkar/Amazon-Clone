import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Nov/1500x600_Hero-Tall_np._CB416108473_.jpg"
          alt="amazon cover page"
          className="home__image"
        />
        <div className="home__row">
          <Product
            id="1000"
            title="Samsung Galaxy A51 (Blue, 6GB RAM, 128GB Storage)"
            image="https://images-na.ssl-images-amazon.com/images/I/81qVoEhymIL._SL1500_.jpg"
            rating={5}
            price={22999}
          />
          <Product
            id="1001"
            title="New Apple iPhone 11 (128GB) - Black"
            rating={4}
            price={58999}
            image="https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg"
          />
          <Product
            id="1002"
            title="OPPO F17 Pro (Matte Black, 8GB RAM, 128GB Storage)"
            rating={3}
            price={21490}
            image="https://images-na.ssl-images-amazon.com/images/I/71cLxfNqyFL._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1003"
            title="Samsung 80 cm (32 inches) Wondertainment Series HD Ready LED Smart TV"
            rating={4}
            price={15499}
            image="https://images-na.ssl-images-amazon.com/images/I/71hk35dbxoL._SL1500_.jpg"
          />
          <Product
            id="1004"
            title="OnePlus Y Series 80 cm (32 inches) HD Ready LED Smart Android TV"
            rating={4}
            price={14990}
            image="https://images-na.ssl-images-amazon.com/images/I/71h%2BUNWW-xL._SL1500_.jpg"
          />
          <Product
            id="1005"
            title="TCL 138.78 cm (55 inches)  AI 4K UHD Certified Android Smart LED TV"
            rating={4}
            price={13499}
            image="https://images-na.ssl-images-amazon.com/images/I/71oRARZmKnL._SL1500_.jpg"
          />
          <Product
            id="1006"
            title="OnePlus 138.8 cm (55 inches) Q1 Series 4K Certified Android QLED TV"
            rating={4}
            price={84999}
            image="https://images-na.ssl-images-amazon.com/images/I/71D89swgrvL._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1007"
            title="Pigeon by Stovekraft Kessel 1.2-Litre Multi-Purpose Kettle"
            rating={3}
            price={849}
            image="https://images-na.ssl-images-amazon.com/images/I/51Y21By5TzL._SL1000_.jpg"
          />
          <Product
            id="1008"
            title="Pigeon by Stovekraft New Handy Mini Plastic Chopper"
            rating={5}
            price={239}
            image="https://images-na.ssl-images-amazon.com/images/I/5144tlFo%2B5L._SL1080_.jpg"
          />
          <Product
            id="1009"
            title="Pigeon by Stovekraft Basics Aluminium Non-stick Cookware Set"
            rating={5}
            price={741}
            image="https://images-na.ssl-images-amazon.com/images/I/61JlllBcGpL._SL1390_.jpg"
          />
        </div>
        <img
          className="banner__image"
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
        />
        <div className="home__row">
          <Product
            id="1010"
            title="Alpino Natural Peanut Butter Crunch 1 KG | Unsweetened | Made with 100% Roasted Peanuts | No Added Sugar"
            rating={5}
            price={379}
            image="https://images-na.ssl-images-amazon.com/images/I/71n6gXQn79L._SL1500_.jpg"
          />
          <Product
            id="1011"
            title="Naturevibe Botanicals Organic Tomato Powder Dry - 275gm "
            rating={3}
            price={230}
            image="https://images-na.ssl-images-amazon.com/images/I/41SXtN%2Bq-kL.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
