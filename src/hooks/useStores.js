// import { useQuery, gql } from '@apollo/client'

// const GET_STORES = gql`
//     query GetStores($zipcode: String!) {
//         stores(zipcode: $zipcode) {
//             id
//             name
//             address
//         }
//     }
// `

export const getStores = (zipcode) => {
    const { data, error, loading} = {
        "data": {
          "stores": [
            {
              "id": "1",
              "name": "Jast, Upton and Barrows",
              "address": "Suite 456 823 Patricia Garden, East Corrina, CT 64693",
              "zipcode": "64693"
            },
            {
              "id": "2",
              "name": "Sauer-Stoltenberg",
              "address": "935 Hamill Freeway, Lake Tyishachester, ID 94653",
              "zipcode": "94653"
            },
            {
              "id": "3",
              "name": "Thompson, Harber and Braun",
              "address": "Apt. 975 8157 Carmelo Stream, Port Willis, AR 20248",
              "zipcode": "20248"
            },
            {
              "id": "4",
              "name": "Carroll Group",
              "address": "Suite 553 379 Tyron Forest, East Charlott, AK 68271",
              "zipcode": "68271"
            },
            {
              "id": "5",
              "name": "Ryan-Anderson",
              "address": "16435 O'Hara Gardens, Boyerview, LA 07350",
              "zipcode": "07350"
            }
          ]
        },
        "error": '',
        "loading": ''
      }
      const store = data.stores.filter(store => store.zipcode === zipcode)
      data.stores = store
    // const { data, error, loading } = useQuery(GET_STORES, {
    //     variables: {
    //         zipcode
    //     }
    // })
    // console.log({ data, error, loading})
    return {
        data,
        error,
        loading
    }

}