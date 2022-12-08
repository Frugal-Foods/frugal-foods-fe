import { gql } from "@apollo/client";

export const CREATE_USER_STORE_ITEM = gql`
    mutation 
    createUserStoreItem($userId: ID!, $storeItemId: ID!, $quantity: Int!)
    {
        userStoreItem(userId: $userId, storeItemId: $storeItemId, quantity: $quantity ) {
        id
        userId
        storeItemId
        quantity
        }
        errors
    }
`