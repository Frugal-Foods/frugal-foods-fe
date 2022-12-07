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
                  "photoUrl": "http://quigley.info/heath_bashirian",
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
      const itemValues = Object.values(data.items)
      console.log('values', itemValues)
      data.items = itemValues
// console.log(itemValues)

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
