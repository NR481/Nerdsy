import AddProductModal from "./addProduct/addProductModal";
import './css/SubNavBar.css'

const SubNavBar = () => {
  return (
    <ul className="subnav-container">
      <li>Jewelry & Accessories</li>
      <li>Clothing</li>
      <li>Home & Living</li>
      <li>Art & Collectibles</li>
      <AddProductModal />
    </ul>
  )
}

export default SubNavBar;
