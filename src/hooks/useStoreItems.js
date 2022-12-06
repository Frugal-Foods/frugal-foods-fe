// import { useQuery, gql } from '@apollo/client'

// const GET_STORE_ITEMS = gql`
//     query GetStoreItems($search: String!) {
//         storeItems(search: $search) {
//             id
//             price
//             storeId
//             itemName
//             storeName
//             photoUrl
//             itemId
//         }
//     }
// `

export const useStoreItems = (search) => {
    const { data, error, loading } = {
        "data": {
          "stores": [
            {
              "id": "1",
              "name": "Jast, Upton and Barrows",
              "items": [
                {
                  "id": "1",
                  "name": "Sleek Linen Hat"
                },
                {
                  "id": "2",
                  "name": "Durable Aluminum Coat"
                },
                {
                  "id": "3",
                  "name": "Lightweight Plastic Wallet"
                },
                {
                  "id": "4",
                  "name": "Intelligent Paper Lamp"
                }
              ]
            },
            {
              "id": "2",
              "name": "Sauer-Stoltenberg",
              "items": [
                {
                  "id": "1",
                  "name": "Sleek Linen Hat"
                },
                {
                  "id": "2",
                  "name": "Durable Aluminum Coat"
                },
                {
                  "id": "3",
                  "name": "Lightweight Plastic Wallet"
                },
                {
                  "id": "4",
                  "name": "Intelligent Paper Lamp"
                }
              ]
            },
            {
              "id": "3",
              "name": "Thompson, Harber and Braun",
              "items": [
                {
                  "id": "4",
                  "name": "Intelligent Paper Lamp"
                },
                {
                  "id": "5",
                  "name": "Durable Steel Chair"
                },
                {
                  "id": "6",
                  "name": "Durable Plastic Gloves"
                },
                {
                  "id": "7",
                  "name": "Practical Copper Lamp"
                }
              ]
            },
            {
              "id": "4",
              "name": "Carroll Group",
              "items": []
            },
            {
              "id": "5",
              "name": "Ryan-Anderson",
              "items": []
            }
          ]
        },
        "error": '',
        "loading": ''
      }
      const storeItems = data.stores.items(item => item.name.includes(search))
      data.stores.items = storeItems

    //   const { data, error, loading } = useQuery(GET_STORE_ITEMS, {
    //     variables: {
    //         search
    //     }
    //   })

      //option to pull everything at once and do filtering locally, to save on time or if there are timing/performance issues
      
      return {
        data,
        error,
        loading
      }
}
