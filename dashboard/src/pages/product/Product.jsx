import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import "./product.css";
import { Pdata } from "./dataa";
import { Publish } from "@material-ui/icons";

function Product() {
  return (
    <div className="prodcut">
      <div className="producttitlecontainer">
        <h1 className="producttitle">Product</h1>
        <Link to="/newproduct">
          <button className="productbtn">Create</button>
        </Link>
      </div>
      <div className="prodcuttop">
        <div className="producttopleft">
          <Chart data={Pdata} datakey="sales" title="sale performace"></Chart>
        </div>
        <div className="producttopright">
          <div className="productinfotop">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBBnvtrUFdeCfqtxw301IR3WxlCaq6uzTSQ&usqp=CAU"
              alt=""
              className="productinfoimg"
            />
            <span className="productname">Apple Airpodes</span>
          </div>
          <div className="productinfobottom">
            <div className="productinfoitem">
              <span className="productinfokey">Id:</span>
              <span className="productinfovalue">123</span>
            </div>
            <div className="productinfoitem">
              <span className="productinfokey">Sales:</span>
              <span className="productinfovalue">5123</span>
            </div>
            <div className="productinfoitem">
              <span className="productinfokey">Active:</span>
              <span className="productinfovalue">yes</span>
            </div>
            <div className="productinfoitem">
              <span className="productinfokey">Stock:</span>
              <span className="productinfovalue">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="prodcutbottom">
        <form action="" className="productform">
          <div className="productformleft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpodes" />
            <label>In Stock</label>
            <select name="in stock" id="instock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productformright">
            <div className="productupload">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBBnvtrUFdeCfqtxw301IR3WxlCaq6uzTSQ&usqp=CAU"
                alt=""
                className="productuploadimg"
              />
              <label htmlFor="file">
                <Publish></Publish>
              </label>
              <input
                type="file"
                name="file"
                id="file"
                style={{ display: "none" }}
              />
            </div>
            <button className="producrtbtn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Product;
