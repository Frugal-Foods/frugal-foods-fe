import React from 'react';
import SearchContainer from "../SearchContainer/SearchContainer";
import SearchForm from "../SearchForm/SearchForm";
import "./SearchPage.css";
import { useLazyQuery } from '@apollo/client';
import { GET_ITEMS } from '../../hooks/getQueries';

const SearchPage = () => {
  const [getStoreItems, {loading, error, data}] = useLazyQuery(GET_ITEMS)
  console.log({data})

  const queryStoreItems = (searchValue) => {
    getStoreItems({variables: {
      search: searchValue, 
      userId: 5
    }})
  }

  return (
    <section className="search-page">
      <SearchForm queryStoreItems={queryStoreItems} />
      {loading && <p>Loading...</p>}
      {!loading && !error && <SearchContainer items={data?.items} />}
      {/* {error && <p>Error: {error}</p>} */}
    </section>
  );
};

export default SearchPage;
