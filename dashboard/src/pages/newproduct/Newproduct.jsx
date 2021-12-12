import "./newproduct.css";

function Newproduct() {
  return (
    <div className="newproduct">
      <h1 className="addproducttile">New Product</h1>
      <form action="" className="addprodutform">
        <div className="addproductitem">
          <label>Image</label>
          <input type="file" name="file" id="file" />
        </div>
        <div className="addproductitem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpodes" />
        </div>
        <div className="addproductitem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addproductitem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">NO</option>
          </select>
        </div>
        <button className="addproductbutton">Create</button>
      </form>
    </div>
  );
}

export default Newproduct;
