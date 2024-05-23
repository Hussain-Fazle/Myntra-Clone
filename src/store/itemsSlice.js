import {createSlice} from "@reduxjs/toolkit"


const itemsSlice=createSlice({
  name:'items',
  initialState:[],
  reducers:{
    addInitialitems:(state,action)=>{
      return action.payload;
    }
  }
});

export const itemsActions=itemsSlice.actions;
export default itemsSlice;