import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './styles/navbar.jsx';
import { Cart } from './components/pages/carts/carts.jsx';
import { Shop } from './components/pages/shops/shops.jsx';
import "./styles/navbar.css";
import { ShopContextProvider } from './context/shop-context.jsx';


function App() {
  return (
    <div className="App">
     <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>);
}

export default App;
