import React, { useState, useEffect } from 'react';
import { Navbar, ProductCard, Cart, Footer } from './Components';

const App = () => {

  const productItems = [
    {
      id: 1,
      image1: "https://m.media-amazon.com/images/I/61f++c2tqkL._SY675_.jpg",
      image2: "https://m.media-amazon.com/images/I/61evWgCyFxL._SY675_.jpg",
      discountTxt: "17% OFF",
      title: "adidas Mens Cricket Shoes",
      price: "₹12449",
      mrp: "₹14999"
    },
    {
      id: 2,
      image1: "https://m.media-amazon.com/images/I/91lSCOaUv7L._SX679_.jpg",
      image2: "https://m.media-amazon.com/images/I/61DTavKZcZL._SX679_.jpg",
      discountTxt: "9% OFF",
      title: "Blue Cricket Kit Bag",
      price: "₹1440",
      mrp: "₹1589"
    },
    {
      id: 3,
      image1: "https://m.media-amazon.com/images/I/51Kpc1iF7qL._SX569_.jpg",
      image2: "https://m.media-amazon.com/images/I/51Kpc1iF7qL._SX569_.jpg",
      discountTxt: "10% OFF",
      title: "MRF English Willow Bat",
      price: "₹44999",
      mrp: "₹49999"
    },
    {
      id: 4,
      image1: "https://m.media-amazon.com/images/I/515eZL1yqvL._SY741_.jpg",
      image2: "https://m.media-amazon.com/images/I/51kWduyLW2L._SX679_.jpg",
      discountTxt: "10% OFF",
      title: "Indian T20 Cricket Jersey 2024",
      price: "₹799",
      mrp: "₹899"
    },
    {
      id: 5,
      image1: "https://m.media-amazon.com/images/I/61sZOQDU6tL._SX679_.jpg",
      image2: "https://m.media-amazon.com/images/I/61BJbqwPXHL._SX679_.jpg",
      discountTxt: "10% OFF",
      title: "ICC Approved Leather Ball",
      price: "₹22842",
      mrp: "₹25380"
    },
    {
      id: 6,
      image1: "https://m.media-amazon.com/images/I/51u21kkxNcL._SX679_.jpg",
      image2: "https://m.media-amazon.com/images/I/51mQI5m4-OL._SX679_.jpg",
      discountTxt: "50% OFF",
      title: "Custom Sports Cricket Jersey",
      price: "₹699",
      mrp: "₹1399"
    }
  ];

  const [cartItems, setCartItems] = useState(() => {
    const data = localStorage.getItem('cartItems');
    return data ? JSON.parse(data) : [];
  });

  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (!existingProduct) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    } else {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
    setShowCart(true);
  };

  return (
    <>
      <Navbar setShowCart={setShowCart} cartItems={cartItems}/>

      {showCart ? (
        <Cart cartItems={cartItems} setCartItems={setCartItems} setShowCart={setShowCart} />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto my-12 p-6">
          {productItems.map(product => (
            <ProductCard key={product.id} {...product} addToCart={addToCart} />
          ))}
        </div>
      )}

      <Footer />
    </>
  );
};

export default App;
