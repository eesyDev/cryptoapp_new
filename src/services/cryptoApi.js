import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-key': '8c0242ca71msh5bfe5752287ce21p1a260bjsne4b1bf3900bf',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}

const createRequest = (url) => ({
    url, headers: cryptoApiHeaders
})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://coinranking1.p.rapidapi.com'}),
    endpoints: (builder) => ({
        getCoins: builder.query({
            query: (limit) => createRequest(`/coins?limit=${limit}`)
        }),
        getCoinDetail: builder.query({
            query: (id) => createRequest(`/coin/${id}`)
        })
    })
});

export const {
    useGetCoinsQuery,
    useGetCoinDetailQuery
} = cryptoApi;