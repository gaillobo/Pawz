    import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

    export const appApi = createApi({
        reducerPath: "appApi",
        baseQuery: fetchBaseQuery({baseURL:  "https://pawz.vercel.app/"}),
        endpoints: (builder) => ({
            signup: builder.mutation({
                query: (user) => ({
                    url: "https://pawz.vercel.app/users/signup",
                    method: "POST",
                    body: user,
                }),
            }),
            login: builder.mutation({
                query: (user) => ({
                    url: "https://pawz.vercel.app/users/login",
                    method: "POST",
                    body: user,
                }),
            }),

            // creating product

            createProduct:builder.mutation({
                query:(product) =>({
                    url:'https://pawz.vercel.app/products',
                    body: product,
                    method : "POST",
                }),
            }),

            deleteProduct: builder.mutation({
                query: ({ product_id, user_id }) => ({
                    url: `https://pawz.vercel.app/products/${product_id}`,
                    body: {
                        user_id,
                    },
                    method: "DELETE",
                }),
            }),

            updateProduct: builder.mutation({
                query: (product) => ({
                    url: `https://pawz.vercel.app/products/${product.id}`,
                    body: product,
                    method: "PATCH",
                }),
            }),

        

            addToCart: builder.mutation({
                query:(cartInfo) =>({
                    url: "https://pawz.vercel.app/products/add-to-cart",
                    body: cartInfo,
                    method: "POST",
                }),    
            }),

            removeFromCart: builder.mutation({
                query:(body) =>({
                    url: "https://pawz.vercel.app/products/remove-from-cart",
                    body,
                    method: "POST",
                }),
            }),

            increaseCartProduct: builder.mutation({
                query:(body) =>({
                    url: "https://pawz.vercel.app/products/increase-cart",
                    body,
                    method: "POST",
                }),
            }),

            decreaseCartProduct: builder.mutation({
                query:(body) =>({
                    url: "https://pawz.vercel.app/products/decrease-cart",
                    body,
                    method: "POST",
                }),
            }),

            createOrder: builder.mutation({
                query: (body) => ({
                    url: "https://pawz.vercel.app/orders",
                    method: 'POST', 
                    body,
                }),
            }),
        }),
        
    });

    export const {useSignupMutation, useLoginMutation, useCreateProductMutation, useAddToCartMutation, useRemoveFromCartMutation, useIncreaseCartProductMutation, useDecreaseCartProductMutation, useCreateOrderMutation, useDeleteProductMutation, useUpdateProductMutation} = appApi;

    export default appApi;
