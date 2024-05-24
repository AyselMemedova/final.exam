import React from "react";
import "./Product.css";
import MainContext from "../../context/context";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Basket from "../../pages/site/basket/basket";

const Product = () => {

  
  const { data, setdata, basket, setBasket, wishlist, setWishlist } = useContext(MainContext);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [basketItem, setBasketItems] = useState(
    localStorage.getItem("basketItems")
      ? JSON.parse(localStorage.getItem("basketItems"))
      : []
  );


  function addToBasket(_id) {
    const target = basket.find((x) => x._id == _id);
    if (target) {
      target.count++;
      target.totalPrice += target.price
    }
    else {
      const items = data.find((x) => x._id == _id);
      basket.push(items)
    }
    setBasket([...basket])
    console.log(basket);
  }


  function addToWishlist(id) {
    const target = wishlist.find((x) => x._id ==id)
    if (target) {
      const result = wishlist.filter((x) => x._id !=id)
      setWishlist(result)
    }
    else {
      const targetOfDataBase = data.find((x) => x._id ==id)
      setWishlist([...wishlist, targetOfDataBase])
    }

  }


  return (
    <div className="basket">
      <div className="basket_text">
        <span>POPULAR PRODUCTS</span>
        <h3>Our Products</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
          consequatur laboriosam ipsam.
        </p>
      </div>

      <div className='button_sira'>
        <input type='text' placeholder='search data' value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => setSortBy({ field: "title", asc: true })}>A-Z</button>
        <button onClick={() => setSortBy({ field: "title", asc: false })}>Z-A</button>
        <button id='az' onClick={() => setSortBy({ field: "price", asc: true })}>Azalan</button>
        <button onClick={() => setSortBy({ field: "price", asc: false })}>Artan</button>
        <button onClick={() => setSortBy(null)}>default</button>
      </div>

      <div className="container">
        <div className="row">
          {data
            .filter(x => x.title.toLowerCase().includes(search.toLocaleLowerCase()))
            .sort((a, b) => {
              if (!sortBy) {
                return 0;
              }
              else if (sortBy.asc) {
                return (a[sortBy.field] > b[sortBy.field]) ? 1 : ((b[sortBy.field] > a[sortBy.field]) ? -1 : 0)
              }
              else if (sortBy.asc == false) {
                return (a[sortBy.field] < b[sortBy.field]) ? 1 : ((b[sortBy.field] < a[sortBy.field]) ? -1 : 0)
              }
            })

            .map((item, index) => (
              <div key={index} className="col-lg-4 col-md-8 col-sm-12">
                <div className="basket_card">
                  <div className="basket_card_img">
                    <img src={item.image} alt="" />
                  </div>

                  <div className="basket_card_text">
                    <h4>{item.title}</h4>
                    <i class="fa-solid fa-star star"></i> <span>5.0</span>
                    <i class="fa-solid fa-heart heart"></i>
                    <span> {item.price}$</span>
                    <p>{item.description}</p>
                    <button id="main">
                      <Link to={`/detail/${item._id}`}>
                        LEARN MORE <i class="fa-solid fa-arrow-right"></i>
                      </Link>
                    </button>
                    <button id="main" onClick={() => {
                      addToBasket(item._id)
                    }}><i class="fa-solid fa-bag-shopping"></i></button>

                    <button id="main" onClick={() => {
                      addToWishlist(item._id)
                    }}> <i class="fa-solid fa-heart heart"></i></button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Product;