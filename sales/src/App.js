
import './App.css';
import logo from './images/logo.svg'
import imageProduct from "./images/image-product-1.jpg"
import imageProduct1 from "./images/image-product-1-thumbnail.jpg"
import imageProduct2 from "./images/image-product-2-thumbnail.jpg"
import imageProduct3 from "./images/image-product-3-thumbnail.jpg"
import imageProduct4 from "./images/image-product-4-thumbnail.jpg"
import avatar from "./images/image-avatar.png"

function App() {
  return (
    <div className="App">
      <header>
        <div className="assy">
          <img className="img logo" src={logo} alt="logo"></img>
          </div>
      <div className="wrapper">
            <ul>
            <li><a href="#">Collectors</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a>-</li>
            </ul>
          </div>
          <div className="icon_wrapper">
          <button><img ></img></button>
          <img src={avatar}></img>
          </div>
      </header>
      <div className="content">
        <div className="image-model">
            <div className="img-product grid-item" ><img className="img" src={imageProduct}></img></div>
            <div className="img-product1 grid-item"><img className="img" src={imageProduct1} alt="item-1"></img></div>
            <div className="img-product2 grid-item"><img className="img" src={imageProduct2} alt="item-2"></img></div>
            <div className="img-product3 grid-item"><img className="img" src={imageProduct3} alt="item-3"></img></div>
            <div className="img-product4 grid-item"><img className="img" src={imageProduct4} alt="item-4"></img></div>
           

        </div>

        <div className="product-info">
          <h3 className="company-name">SNEAKER COMPANY</h3>
          <h2 className="product-name">Fall Limited Sneakers</h2>
          <p className="product-description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
          <div>

          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
