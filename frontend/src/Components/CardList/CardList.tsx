import React, { SyntheticEvent } from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";

type Props = {
  searchResult: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
};

const CardList = ({ searchResult, onPortfolioCreate }: Props) => {
  return (
    <>
      {searchResult.length > 0 ? (
        searchResult.map((result) => {
          return (
            <Card
              id={result.symbol}
              key={uuidv4()}
              searchResult={result}
              onPortfolioCreate={onPortfolioCreate}
            />
          );
        })
      ) : (
        <h2>No results</h2>
      )}
    </>
  );
};

export default CardList;
