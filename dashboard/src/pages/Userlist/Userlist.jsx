import React, { useState } from "react";
import "./userlist.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { UserRows } from "./userdata";
import { Link } from "react-router-dom";

function Userlist() {
  const [data, setData] = useState(UserRows);
  const handeldelete = (id) => {
    const filterdata = data.filter((item) => item.id !== id);
    console.log(filterdata);
    setData(filterdata);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 110 },
    {
      field: "username",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="uselistuser">
            <img src={params.row.profile} alt="avtar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",

      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",

      width: 160,
    },
    {
      field: "action",
      headerName: "Action",

      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="userlistedit">Edit</button>
            </Link>
            <DeleteOutline
              className="userlistdelete"
              onClick={() => handeldelete(params.row.id)}
            ></DeleteOutline>
          </>
        );
      },
    },
  ];

  return (
    <div className="userlist">
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

export default Userlist;
