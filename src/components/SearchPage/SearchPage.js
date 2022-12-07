import React from 'react';
import SearchContainer from "../SearchContainer/SearchContainer";
import SearchForm from "../SearchForm/SearchForm";
import "./SearchPage/SearchPage.css";

const SearchPage = ({ storeItems, queryStoreItems }) => {
  return (
    <section className="search-page">
      <SearchContainer storeItems={storeItems} />
      <SearchForm queryStoreItems={queryStoreItems} />
    </section>
  );
};

export default SearchPage;
