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
