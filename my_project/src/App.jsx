import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Greeting from "./components/Greeting";
import imageOne from "./assets/background.jpeg";
import Counter from "./components/Counter";
import CreateProduct from "./components/CreateProduct";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import ProductDetail from "./components/ProductDetail";


const products = [{ id: 1, name: 'PS-5', discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, molestias.", price: 2345, stock: 5 },
{ id: 2, name: 'Books', discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, molestias.", price: 2345, stock: 15 },
{ id: 3, name: 'Pencil', discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, molestias.", price: 2345, stock: 16 }
]

function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/counter' element={<Counter />}></Route>
          <Route path='/login' element={<LoginForm />}></Route>
          <Route path='greet' element={<Greeting name1={{ n1: 'Pranav', n2: 'Kavade' }} />}></Route>
          <Route path='/products' element={<ProductsList products={products} />} ></Route>
          <Route path='/products/:id' element={<ProductDetail products={products} />} ></Route>
          <Route path='/CreateProduct' element={<CreateProduct/>}></Route>
        </Routes>
      </Router>
      {/* <CreateProduct />
      <Counter />
      <h1>Learning REACT</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quis omnis. Cum excepturi dolorem molestiae quo optio officiis! Dignissimos sit quae aperiam voluptas ab cupiditate iure esse? Neque, optio fuga!</p>
      <Button buttonValue="Click Me" />
      <Button buttonValue="Register" />
      <Button buttonValue="Login" />
      <Button buttonValue="Submit" />
      <Button buttonValue="Reset" />
      <Greeting name1={{ n1: 'AKASH', n2: 'Gat' }} />
      <Greeting name1={{ n1: "Om", n2: "Mohite" }} />
      <img src={imageOne} alt="Image 1 is not showing" className='headerImage ' />
      <img src={imageOne} alt="Image 1 is not showing" className='rounded-circle' /> */}
    </>
  );
}

export default App;