import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    restaurant: {
        lat: null,
        long: null,
        name: null,
        imageUrl: null,
        dishes: null,
        description: null,
        rating: null,
        address: null,
        meats: null,
    },
};

export const  restaurantSlice= createSlice({
  name: "cart",
  initialState,
  reducers: {
      setRestaurant: (state, action) => {
          state.restaurant = action.payload
   }
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant= (state) => state.restaurant.restaurant;


export default restaurantSlice.reducer;
