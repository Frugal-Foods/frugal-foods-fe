import { gql } from "@apollo/client";

export const ADD_CART_MUTATION = gql`
  mutation AddCartMutation(
    $userId: ID!
    $storeItemId: ID!
    $quantity: Int!
  ) {
    createUserStoreItem(userId: $userId, storeItemId: $storeItemId, quantity: $quantity) {
      id
      userId
      storeItemId
      quantity
    }
    errors
  }
`