import React, {useContext} from 'react';
import SearchContainer from "../SearchContainer/SearchContainer";
import SearchForm from "../SearchForm/SearchForm";
import "./SearchPage.css";
import { useLazyQuery } from '@apollo/client';
import { GET_ITEMS } from '../../hooks/getQueries';
import { UserContext } from '../../context/userContext';

const SearchPage = () => {
  const user = useContext(UserContext)
  const [getStoreItems, {loading, error, data}] = useLazyQuery(GET_ITEMS)
  console.log({data})

  const queryStoreItems = (searchValue) => {
    getStoreItems({variables: {search: searchValue, userId: user}})
  }

  return (
    <section className="search-page">
      <SearchForm queryStoreItems={queryStoreItems} />
      {loading && <p>Loading...</p>}
      {!loading && !error && <SearchContainer items={data?.items} />}
      {error && <p>Error: {error}</p>}
    </section>
  );
};

export default SearchPage;
