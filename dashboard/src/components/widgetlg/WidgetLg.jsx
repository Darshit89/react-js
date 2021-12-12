import React from "react";
import "./widgetLg.css";

function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={`widgetlgbutton ${type}`}>{type}</button>;
  };
  return (
    <div className="widgetlg">
      <h3 className="widgetlgtitle">Latest transaction</h3>
      <table className="widgetlgtable">
        <tr className="widgetlgtr">
          <th className="widgetlgth">Coustomer</th>
          <th className="widgetlgth">Date</th>
          <th className="widgetlgth">Amount</th>
          <th className="widgetlgth">Staus</th>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img
              src="https://wakai.pl/wp-content/uploads/2021/04/paladin1.jpg"
              alt=""
              className="widgetlgimg"
            />
            <span className="widgetlgname">William g maryblood</span>
          </td>
          <td className="widgetlgdate">8 July 2021</td>
          <td className="widgetlgamount">Rs.22,000</td>
          <td className="widgetlgstaus">
            <Button type="Approved"></Button>
          </td>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img
              src="https://wakai.pl/wp-content/uploads/2021/04/paladin1.jpg"
              alt=""
              className="widgetlgimg"
            />
            <span className="widgetlgname">William g maryblood</span>
          </td>
          <td className="widgetlgdate">8 July 2021</td>
          <td className="widgetlgamount">Rs.22,000</td>
          <td className="widgetlgstaus">
            <Button type="Decline"></Button>
          </td>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img
              src="https://wakai.pl/wp-content/uploads/2021/04/paladin1.jpg"
              alt=""
              className="widgetlgimg"
            />
            <span className="widgetlgname">William g maryblood</span>
          </td>
          <td className="widgetlgdate">8 July 2021</td>
          <td className="widgetlgamount">Rs.22,000</td>
          <td className="widgetlgstaus">
            <Button type="Pending"></Button>
          </td>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img
              src="https://wakai.pl/wp-content/uploads/2021/04/paladin1.jpg"
              alt=""
              className="widgetlgimg"
            />
            <span className="widgetlgname">William g maryblood</span>
          </td>
          <td className="widgetlgdate">8 July 2021</td>
          <td className="widgetlgamount">Rs.22,000</td>
          <td className="widgetlgstaus">
            <Button type="Approved"></Button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg;
