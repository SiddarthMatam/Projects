import React, {useState} from 'react'
import "./Cart.css"

function Cart() {
    const [value, setValue] = useState(0);
    const [products, setProducts] = useState([
      {
        id: 1,
        name: "Masala Dosa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5bE-5hpc_7P39QwwKLXorWDOxaIZ3IzHEaiQY2nrwJj09Gng_Zfpfd5nMe3Outd-1xEs&usqp=CAU",
      },
      {
        id: 2,
        name: "Masala Dosa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0Mi5gYVG04bU5vJw4no3MU8RUCiA1FLqkA&s",
      },
      {
        id: 3,
        name: "Masala Dosa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0Mi5gYVG04bU5vJw4no3MU8RUCiA1FLqkA&s",
      },
      {
        id: 4,
        name: "Masala Dosa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0Mi5gYVG04bU5vJw4no3MU8RUCiA1FLqkA&s",
      },
      {
        id: 5,
        name: "Masala Dosa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0Mi5gYVG04bU5vJw4no3MU8RUCiA1FLqkA&s",
      },
      {
        id: 6,
        name: "Masala Dosa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0Mi5gYVG04bU5vJw4no3MU8RUCiA1FLqkA&s",
      },
      {
        id: 7,
        name: "Masala Dosa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0Mi5gYVG04bU5vJw4no3MU8RUCiA1FLqkA&s",
      },
      {
        id: 8,
        name: "Masala Dosa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0Mi5gYVG04bU5vJw4no3MU8RUCiA1FLqkA&s",
      },
      {
        id: 9,
        name: "Masala Dosa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0Mi5gYVG04bU5vJw4no3MU8RUCiA1FLqkA&s",
      },
      {
        id: 10,
        name: "Masala Dosa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0Mi5gYVG04bU5vJw4no3MU8RUCiA1FLqkA&s",
      },
      {
        id: 11,
        name: "Masala Dosa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0Mi5gYVG04bU5vJw4no3MU8RUCiA1FLqkA&s",
      },
      {
        id: 12,
        name: "Masala Dosa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0Mi5gYVG04bU5vJw4no3MU8RUCiA1FLqkA&s",
      },
      {
        id: 13,
        name: "Masala Dosa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0Mi5gYVG04bU5vJw4no3MU8RUCiA1FLqkA&s",
      },
      {
        id: 14,
        name: "Masala Dosa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0Mi5gYVG04bU5vJw4no3MU8RUCiA1FLqkA&s",
      },
      {
        id: 15,
        name: "Masala Dosa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0Mi5gYVG04bU5vJw4no3MU8RUCiA1FLqkA&s",
      },
      {
        id: 16,
        name: "Masala Dosa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0Mi5gYVG04bU5vJw4no3MU8RUCiA1FLqkA&s",
      },
      {
        id: 17,
        name: "Masala Dosa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0Mi5gYVG04bU5vJw4no3MU8RUCiA1FLqkA&s",
      },
      {
        id: 18,
        name: "Masala Dosa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0Mi5gYVG04bU5vJw4no3MU8RUCiA1FLqkA&s",
      },
      {
        id: 19,
        name: "Masala Dosa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0Mi5gYVG04bU5vJw4no3MU8RUCiA1FLqkA&s",
      },
      {
        id: 20,
        name: "Masala Dosa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0Mi5gYVG04bU5vJw4no3MU8RUCiA1FLqkA&s",
      }
    ]);  

    function handleAdd(){
      if (value === 0){
        alert("Atlest add one product to cart");
      }
      else{
        alert(`${value} product(s) added to cart`);
      }
    }

    function handleIncrease(){
        setValue(value + 1);
    }

    function handleDecrease(){
        if(value > 0){
            setValue(value - 1);
        }
    }

  return (
    <>
        <h2 className="main-heading">Todo List</h2>
        {/* <div className="card-container">
          <h3 className="product-name">Masala Dosa</h3>
          <img className="image" src="" alt="item image"/><br/>
          <span className="item-quantity">{value}</span><br/>
          <button className="button add-btn" onClick={handleIncrease}>+</button>
          <button className="button cart-btn" onClick={handleAdd}>Add to Cart</button>
          <button className="button sub-btn" onClick={handleDecrease}>-</button>
        </div> */}
        {products.map((product) => (
          <div className="card-container">
            <h3 className="product-name">{product.name}</h3>
            <img className="image" src={product.image} alt="item image"/><br/>
            <span className="item-quantity">{value}</span><br/>
            <button className="button add-btn" onClick={handleIncrease}>+</button>
            <button className="button cart-btn" onClick={handleAdd}>Add to Cart</button>
            <button className="button sub-btn" onClick={handleDecrease}>-</button>
          </div>
        ))}
    </>
  )
};
export default Cart
