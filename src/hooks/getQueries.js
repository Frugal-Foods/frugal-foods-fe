import { gql, useQuery } from "@apollo/client";

export const GET_STORES = gql`
  query GetStores($zipcode: String!) {
    stores(zipcode: $zipcode) {
      id
      name
      address
    }
  }
`

export const GET_ITEMS = gql`
  query storeItems($search: String!) {
    items(search: $search) {
      itemName
      itemId
      photoUrl
      storeName
      price
      storeItemId
      storeId
    }
  }
`
export const GET_CART = gql`
  query GetCart($userId: ID!) {
    userStoreItems(userId: $userId) {
      storeId
      name
      address
      storeTotalPrice
      listItems {
        id
        itemName
        itemPhotoUrl
        price
        quantity
        itemTotal
      }
    }
  }
`;

export const useCartItems = (userId) => {
  const { data, loading, error } = useQuery(GET_CART, {
    variables: {
      userId,
    },
  });
  return { data, error, loading };
};
