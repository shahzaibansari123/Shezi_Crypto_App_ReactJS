import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "1c03fdca9bmshd8f34550b6b62c3p1d939ejsnb8f28c1718e9",
};

const baseUrl ="https://coinranking1.p.rapidapi.com/exchanges"

const createRequest=(url)=>({
    url, headers: cryptoApiHeaders})

export const cryptoApi= createApi({
    reducerPath: 'cryptoApi',
    basequery: fetchBaseQuery({baseUrl}),
    endpoint: (builder)=>({
        getCryptos: builder.query({
            query:()=>createRequest('/exchanges')
        })
    })
})