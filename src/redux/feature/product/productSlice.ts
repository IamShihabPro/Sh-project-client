// import { createSlice } from '@reduxjs/toolkit';
// import { productApi } from "./productApi";
// import { TProduct } from '@/types/productType';

// interface ProductState {
//   products: TProduct[];
//   singleProduct: TProduct | null;
// }

// const initialState: ProductState = {
//   products: [],
//   singleProduct: null,
// };

// const productSlice = createSlice({
//   name: 'product',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addMatcher(
//         productApi.endpoints.getProduct.matchFulfilled,
//         (state, action) => {
//           state.products = action.payload.data;
//         }
//       )
//       .addMatcher(
//         productApi.endpoints.getSingleProduct.matchFulfilled,
//         (state, action) => {
//           state.singleProduct = action.payload.data;
//         }
//       )
//       .addMatcher(
//         productApi.endpoints.addRatings.matchFulfilled,
//         (state, action) => {
//           const { _id, rating } = action.meta.arg;
//           const product = state.products.find(p => p._id === _id);
//           if (product) {
//             product.ratings.push(rating);
//           }
//           if (state.singleProduct && state.singleProduct._id === _id) {
//             state.singleProduct.ratings.push(rating);
//           }
//         }
//       );
//   },
// });

// export default productSlice.reducer;
