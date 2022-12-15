import { render, screen } from '@testing-library/react';
import React from "react";
import "./index.css";
import App from "./components/App/App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://frugal-foods-be.fly.dev/graphql",
  cache: new InMemoryCache(),
});

test('renders Frugal Foods app', () => {
  render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
  );
  const linkElement = screen.getByText('Frugal Foods');
  expect(linkElement).toBeInTheDocument();
});
