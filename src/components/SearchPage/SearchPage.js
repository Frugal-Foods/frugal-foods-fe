import React, {useContext, useState} from 'react';
import SearchContainer from "../SearchContainer/SearchContainer";
import SearchForm from "../SearchForm/SearchForm";
import "./SearchPage.css";
import { useLazyQuery } from '@apollo/client';
import { GET_ITEMS } from '../../hooks/getQueries';
import { UserContext } from '../../context/userContext';

const SearchPage = () => {
  const user = useContext(UserContext)
  const [input, setInput] = useState('')
  const [getStoreItems, {loading, error, data}] = useLazyQuery(GET_ITEMS)
  const queryStoreItems = (searchValue) => {
    getStoreItems({variables: {search: searchValue, userId: user}})
    setInput(searchValue)
  }

  return (
    <section className="search-page">
      <SearchForm queryStoreItems={queryStoreItems} />
      {loading && <p>Loading...</p>}
      {!loading && !error && input.length > 0 && <SearchContainer items={data?.items} />}
    </section>
  );
};

export default SearchPage;
