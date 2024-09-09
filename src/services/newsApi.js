import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-key': '8c0242ca71msh5bfe5752287ce21p1a260bjsne4b1bf3900bf',
    'x-rapidapi-host': 'real-time-finance-data.p.rapidapi.com'
};

const createRequest = (url) => ({
    url, headers: cryptoApiHeaders
});


export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl : 'https://real-time-finance-data.p.rapidapi.com'}),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: (type) => createRequest(`/market-trends?trend_type=${type}&country=us&language=en'`)
        })
    })
});

export const { useGetNewsQuery } = cryptoNewsApi;
