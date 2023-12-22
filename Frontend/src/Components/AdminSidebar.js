import { Link } from "react-router-dom";
import "./AdminSidebar.css";

function AdminSidebar() {

    return(
        <div className="container-fluid">
        <div className="sidebar-menu d-flex ">
          <div class="col-md-2 sidebar"style={{marginLeft:"10px"}}>
            <ul>
              <li>
                <i class="bi bi-house-fill"></i> Dashboard
              </li>
              <li>
                <i class="bi bi-box"></i> Catalog
              </li>
              <li>
                <Link className="Link" to="/add-item">
                  <i className="bi bi-plus-square"></i> Add Product
                </Link>
              </li>
              <li>
                <i class="bi bi-eye"></i> View Product
              </li>
              <li>
                <i class="bi bi-pencil"></i> Update Product
              </li>
  
              <li>
                <i class="bi bi-trash"></i> Delete Product
              </li>
              <li>
                <i class="bi bi-bell-fill"></i> Notifications
              </li>
              <li>
                <i class="bi bi-person-fill"></i> Profile
              </li>
            </ul>
          </div>
          <div className="col-md-8 main-content" style={{width:"1510px"}}>
          </div>
        </div>
        </div>
    )
}
export default AdminSidebar;