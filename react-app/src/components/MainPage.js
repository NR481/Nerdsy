import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { allProducts } from "../store/products";
import gitHubLogo from "../assets/github-logo.png";
import linkedinLogo from "../assets/linkedin-logo.png";
import '../components/MainPage.css'


const MainPage = () => {
  const productObj = useSelector(state => state.products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts())
  }, [dispatch])


  const products = Object.values(productObj);


  return (
    <div className="page-container">
      <img
        className="splash-image"
        src="https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2014/11/bhsftd485724.jpg"
        alt="city skyline"
      />
      <div>
        <div className="products-container">
          {products?.length > 0 &&
            products.map((product) => (
              <div key={product.id} className="prod-listing">
                <Link to={`/products/${product.id}`}>
                  <img src={product?.imageUrl} className="img" alt="product" />
                </Link>
                <div className="prod-price">${product.price.toFixed(2)}</div>
              </div>
            ))}
        </div>
      </div>
      <footer className="footer">
        <div className="footer-info">
          <div className="single-item">
            <p className="footer-name">Gabriel Aspuria</p>
            <div className="profile-icons">
              <a href="https://github.com/GabrielAspuria">
                <img src={gitHubLogo} alt="github logo" className="footer-img git-links"/>
              </a>
              <a href="https://www.linkedin.com/in/gabriel-aspuria-032398226/">
                <img src={linkedinLogo} alt="linkedin logo" className="footer-img linkedin-links"/>
              </a>
            </div>
          </div>
          <div className="single-item">
            <p>Jedd Basden</p>
            <div className="profile-icons">
              <a href="https://github.com/Jeddbasden">
                <img src={gitHubLogo} alt="github logo" className="footer-img git-links"/>
              </a>
              <a href="https://www.linkedin.com/in/jedd-basden-080149155/">
                <img src={linkedinLogo} alt="linkedin logo" className="footer-img linkedin-links"/>
              </a>
            </div>
          </div>
          <div className="single-item">
            <p>Zachery Estefano</p>
            <div className="profile-icons">
              <a href="https://github.com/zestefano">
                <img src={gitHubLogo} alt="github logo" className="footer-img git-links"/>
              </a>
              <a href="https://www.linkedin.com/in/zachery-estefano-a72668230/">
                <img src={linkedinLogo} alt="linkedin logo" className="footer-img linkedin-links"/>
              </a>
            </div>
          </div>
          <div className="single-item">
            <p>Nick Rogers</p>
            <div className="profile-icons">
              <a href="https://github.com/NR481">
                <img src={gitHubLogo} alt="github logo" className="footer-img git-links"/>
              </a>
              <a href="https://www.linkedin.com/in/nick-rogers-635388107/">
                <img src={linkedinLogo} alt="linkedin logo" className="footer-img linkedin-links"/>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainPage
