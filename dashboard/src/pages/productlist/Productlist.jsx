import "./productlist.css";
import React, { useState } from "react";

import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { ProductRows } from "./productdata";
import { Link } from "react-router-dom";

function Productlist() {
  const [data, setData] = useState(ProductRows);
  const handeldelete = (id) => {
    const filterdata = data.filter((item) => item.id !== id);
    console.log(filterdata);
    setData(filterdata);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 110 },
    {
      field: "product",
      headerName: "product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productlistimg">
            <img src={params.row.img} alt="avtar" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "stock",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",

      width: 120,
    },
    {
      field: "price",
      headerName: "price",

      width: 160,
    },
    {
      field: "action",
      headerName: "Action",

      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <button className="productlistedit">Edit</button>
            </Link>
            <DeleteOutline
              className="productlistdelete"
              onClick={() => handeldelete(params.row.id)}
            ></DeleteOutline>
          </>
        );
      },
    },
  ];
  return (
    <div className="productlist">
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={8}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}

export default Productlist;
