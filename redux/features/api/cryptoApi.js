import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'e5e276cd06msh90df54307c9bbe4p1026e1jsna4ae8f1b8107',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
}

const cryptoApiParams = {
   vs_currency: 'usd', order: 'market_cap_desc', per_page: '100', page: '1',
}

const baseUrl = 'https://coingecko.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders, params: cryptoApiParams});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi', // what reducer for
    baseQuery: fetchBaseQuery({ baseUrl }),

    endpoints: (builder) => ({
        getCryptos:  builder.query({
            query: () => createRequest('/exchanges')
        }),
        getCoins: builder.query({
            query: () => createRequest('/coins/markets')
        })
    })
});


export const { useGetCryptosQuery, useGetCoinsQuery } = cryptoApi;