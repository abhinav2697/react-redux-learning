import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    { id: '0', name: 'Raju' },
    { id: '1', name: 'Laxman' },
    {id:'2',name:'Bharath'}
]
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{}
})

export const selectedAllUsers = (state) => state.users;
export default usersSlice.reducer;