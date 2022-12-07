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

export const getStoreItems = (search) => {
    let { data, error, loading } = {
            "data": {
              "items": [
                {
                  "id": "1",
                  "name": "bananas",
                  "photoUrl": "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
                  "stores": [
                    {
                      "name": "Fisher-Block",
                      "id": "1",
                      "storeProducts": [
                        {
                          "id": "1",
                          "storeId": 1,
                          "price": 29.95
                        }
                      ]
                    },
                    {
                      "name": "Ebert Group",
                      "id": "2",
                      "storeProducts": [
                        {
                          "id": "5",
                          "storeId": 2,
                          "price": 7.04
                        }
                      ]
                    }
                  ]
                }
              ]
          },
        "error": '',
        "loading": ''
      }
      // const itemValues = Object.values(data.items)

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
