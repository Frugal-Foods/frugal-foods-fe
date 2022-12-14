import { gql } from "@apollo/client";

export const GET_ALL_STORES = gql`
  query GetStores($zipcode: String!) {
    stores(zipcode: $zipcode) {
      id
      name
      address
    }
  }
`;

export const GET_USER_STORES = gql`
  query GetUserStores($userId: Int!) {
    userStores(userId: $userId) {
      id
      storeId
      userId
    }
  }
`

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
        itemId
        itemName
        itemPhotoUrl
        price
        quantity
        itemTotal
        storeItemId
        userStoreItemId
      }
    }
  }
`;



// export const useUserStores = (userId) => {
//   const { data, loading, error, refetch } = useQuery(GET_USER_STORES, {
//     variables: {
//       userId
//     }
//   })
//   return { data, error, loading, refetch }
// }
