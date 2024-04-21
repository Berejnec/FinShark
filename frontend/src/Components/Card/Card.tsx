import React, { SyntheticEvent } from "react";
import "./Card.css";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

type Props = {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
};

const Card = ({ id, searchResult, onPortfolioCreate }: Props) => {
  return (
    <div key={id} id={id} className="card">
      <div className="details">
        <h2>{searchResult.name}</h2>
        <h3>{searchResult.symbol}</h3>
        <p>${searchResult.currency}</p>
      </div>
      <p className="info">
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>
      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResult.symbol}
      />
    </div>
  );
};

export default Card;
