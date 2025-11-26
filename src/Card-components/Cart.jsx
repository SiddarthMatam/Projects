import React, {useState} from 'react'
import "./Cart.css"

function Cart() {
    const [products, setProducts] = useState([
      {
        id: 1,
        name: "Masala Dosa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5bE-5hpc_7P39QwwKLXorWDOxaIZ3IzHEaiQY2nrwJj09Gng_Zfpfd5nMe3Outd-1xEs&usqp=CAU",
        qty: 1,
        price: "$35"
      },
      {
        id: 2,
        name: "Onion Dosa",
        image: "https://thumbs.dreamstime.com/b/onion-dosa-plain-recipe-finely-chopped-topping-over-which-gives-very-yummy-taste-also-can-be-eaten-195902443.jpg",
        qty: 1,
        price: "$40"
      },
      {
        id: 3,
        name: "Idli",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/idli-recipe.jpg",
        qty: 1,
        price: "$30"
      },
      {
        id: 4,
        name: "Poori",
        image: "data:image/jpeg;base64,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",
        qty: 1,
        price: "$40"
      },
      {
        id: 5,
        name: "Pongal",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKRkyDHG10iLd_qLCOv0WwrtF8BUm7UYRGjg&s",
        qty: 1,
        price: "$35"
      },
      {
        id: 6,
        name: "Utappam",
        image: "https://www.awesomecuisine.com/wp-content/uploads/2007/12/Vegetable-Uttapam.jpg",
        qty: 1,
        price: "$40"
      },
      {
        id: 7,
        name: "Lemon Rice",
        image: "https://images.picxy.com/cache/2020/7/11/2716a4a9f06131ed91f89053629b72ff.jpg",
        qty: 1,
        price: "$50"
      },
      {
        id: 8,
        name: "Meals",
        image: "https://png.pngtree.com/background/20250319/original/pngtree-south-indian-vegetarian-thali-with-rice-sambar-and-vegetable-curry-picture-image_16273961.jpg",
        qty: 1,
        price: "$90"
      },
      {
        id: 9,
        name: "Ragi Sangati",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5f8creMt8jIrGW_waSZtwd52MvI5RnUqwGQ&s",
        qty: 1,
        price: "$65"
      },
      {
        id: 10,
        name: "Chapati",
        image: "https://www.shutterstock.com/image-photo/mix-vegetable-curry-indian-main-260nw-2526319819.jpg",
        qty: 1,
        price: "$55"
      }
    ]);  

    function handleAdd(id){
      const product = products.find(p => p.id === id);

      if (product.qty === 1){
        alert(`1 ${product.name} is added`);
      }else{
        alert(`${product.qty} ${product.name} are added`);
      };
    }

    function handleIncrease(id){
      setProducts(products.map(p=>
        p.id === id ? {...p, qty : p.qty + 1} : p 
      ))
    }

    function handleDecrease(id){
        setProducts(products.map(p=>
        p.id === id && p.qty > 1 ? {...p, qty : p.qty - 1} : p 
      ))
    }

  return (
    <>
        <h2 className="main-heading">Todo List</h2>
        {products.map((product) => (
          <div key = {product.id} className="container">
              <div className="card-container">
                <h3 className="item-name">{product.name}</h3>
                <img className="item-image" src={product.image} alt="item image"/><br/>
                <span className="item-price">{product.price}</span><br/>
                <button className="button sub-btn" onClick={()=>handleDecrease(product.id)}>-</button>
                <span className="item-quantity">{product.qty}</span>
                <button className="button add-btn" onClick={()=>handleIncrease(product.id)}>+</button>
                <button className="button cart-btn" onClick={()=>handleAdd(product.id)}>Add to Cart</button>
              </div>
            </div>
        ))}
    </>
  )
};
export default Cart





// if(products.qty === 1){
      //   alert("1 product added to cart");
      // }
      // else{
      //   alert(`${products.qty} products added to cart`);
      // }