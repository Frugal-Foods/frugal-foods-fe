import React from 'react';
import SearchContainer from "../SearchContainer/SearchContainer";
import SearchForm from "../SearchForm/SearchForm";
import "./SearchPage.css";

const SearchPage = ({ storeItems, queryStoreItems }) => {
  return (
    <section className="search-page">
      <SearchForm queryStoreItems={queryStoreItems} />
      <SearchContainer storeItems={storeItems} />
    </section>
  );
};

export default SearchPage;
