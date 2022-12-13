import { gql } from "@apollo/client";

export const ADD_CART_MUTATION = gql`
  mutation createUserStoreItem($userId: ID!, $storeItemId: ID!, $quantity: Int!) {
    createUserStoreItem(
      input: {userId: $userId, storeItemId: $storeItemId, quantity: $quantity }
    ) {
      userStoreItem {
        id
        userId
        storeItemId
        quantity
      }
      errors
    }
  }
`;

export const DELETE_ITEM_MUTATION = gql`
  mutation destroyUserStoreItem($id: ID!) {
    destroyUserStoreItem(
      input: {id: $id}
    ) {
      id
    }
  }
`;

export const CREATE_USER_STORE = gql`
    mutation createUserStore($userId: ID!, $storeId: ID!) {
      createUserStore(
        input: {userId: $userId, storeId: $storeId}
      ) {
        userStore {
            id
            userId
            storeId
        }
        errors
      }
    }
`

export const DELETE_USER_STORE = gql`
    mutation destroyUserStore($id: ID!) {
      destroyUserStore(input: {id: $id}) {
        id
      }
    }
`

export const UPDATE_CART_QUANTITY = gql`
    mutation updateUserStoreItem($id: ID!, $quantity: Int!) {
      updateUserStoreItem(input: {id: $id, quantity: $quantity}) {
        id
        quantity
      }
    }
`

export const DESTROY_ALL_USER_STORES = gql`
  mutation destroyAllUserStores($userId: String!) {
    destroyAllUserStores(
      input: {userId: $userId}
    ) {
      userId
    }
  }
`
