import AddProductModal from "./addProduct/addProductModal";
import './css/SubNavBar.css'

const SubNavBar = ({ user }) => {
  return (
    <>
      {user &&
        <ul className="subnav-container">
          <AddProductModal />
        </ul>
      }
    </>
  )
}

export default SubNavBar;
