import { gql, useQuery } from "@apollo/client";

export const GET_STORES = gql`
  query GetStores($zipcode: String!) {
    stores(zipcode: $zipcode) {
      id
      name
      address
    }
  }
`;

export const GET_ITEMS = gql`
  query storeItems($search: String!, $userId: Int!) {
    items(search: $search, userId: $userId) {
      userId
      itemName
      itemId
      photoUrl
      storeName
      price
      storeItemId
      storeId
    }
  }
`;
export const GET_CART = gql`
  query userStoreItems($userId: ID!) {
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
  return { data, loading, error };
};

export const GET_USER_STORES = gql`
  query userStores($userId: Int!) {
    userStores(userId: $userId) {
      id
      storeId
      userId
    }
  }
`

export const useUserStores = (userId) => {
  const { data, loading, error, refetch } = useQuery(GET_USER_STORES, {
    variables: {
      userId
    }
  })
  console.log('user store', data)
  return { data, error, loading, refetch }
}