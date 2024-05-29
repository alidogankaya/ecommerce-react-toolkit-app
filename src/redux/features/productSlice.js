import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { STATUS } from '../../utils/status'

const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    productsDetail: [],
    productsDetailSTATUS: STATUS.IDLE
}



export const getProducts = createAsyncThunk(
    'getProducts',
    // Declare the type your function argument here:
    async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = response.json()

        return data;
    },
)

export const getProductsDetails = createAsyncThunk(
    'getProductsDetail',
    // Declare the type your function argument here:
    async (id) => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = response.json()

        return data;
    },
)
export const getProductsCategory = createAsyncThunk(
    'getProductsCategory',
    // Declare the type your function argument here:
    async (category) => {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
        const data = response.json()

        return data;
    },
)

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(
            getProducts.pending, (state, action) => {
                state.productsStatus = STATUS.LOADING

            },
        )
            .addCase(
                getProducts.fulfilled, (state, action) => {
                    state.productsStatus = STATUS.SUCCESS;
                    state.products = action.payload

                },
            )
        .addCase(
            getProducts.rejected, (state, action) => {
                state.productsStatus = STATUS.FAIL;
            },
        )
        .addCase(
            getProductsDetails.pending, (state, action) => {
                state.productsDetailSTATUS = STATUS.LOADING

            },
        )
            .addCase(
                getProductsDetails.fulfilled, (state, action) => {
                    state.productsDetailSTATUS = STATUS.SUCCESS;
                    state.productsDetail = action.payload;

                },
            )
        .addCase(
            getProductsDetails.rejected, (state, action) => {
                state.productsDetailSTATUS = STATUS.FAIL;
            },
        )


        .addCase(
            getProductsCategory.pending, (state, action) => {
                state.productsStatus = STATUS.LOADING

            },
        )
            .addCase(
                getProductsCategory.fulfilled, (state, action) => {
                    state.productsStatus = STATUS.SUCCESS;
                    state.products = action.payload

                },
            )
        .addCase(
            getProductsCategory.rejected, (state, action) => {
                state.productsStatus = STATUS.FAIL;
            },
        )

    },
})

// Action creators are generated for each case reducer function

export default productSlice.reducer