import React from "react";
import "../App.css";
import { stockData } from "./Account";

export const Stocks = () => {
  return (
    <>
      <HomePageHeader />
      <div className="stock-container">
        {stockData.map((data, key) => {
          return (
            <div key={key}>
              <Stock
                key={key}
                name={data.name}
                status={data.status}
                
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Liste des utilisateurs</h2>
    </header>
  );
};

const Stock = ({ name, status }) => {
  if (!name) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{name}</h5>
          </td>
          <td>
            <h5>{status}</h5>
          </td>
          
        </tr>
      </tbody>
    </table>
  );
};