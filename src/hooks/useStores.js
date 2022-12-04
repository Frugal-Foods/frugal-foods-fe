import { useQuery, gql } from '@apollo/client'

const GET_STORES = gql`
    query GetStores($zipcode: String!) {
        stores(zipcode: $zipcode) {
            id
            name
            address
        }
    }
`

export const useStores = (zipcode) => {
    const { data, error, loading } = useQuery(GET_STORES, {
        variables: {
            zipcode
        }
    })
    return {
        data,
        error,
        loading
    }
}