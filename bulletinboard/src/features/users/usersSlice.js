import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    { id: '0', name: 'William Shakespeare' },
    { id: '1', name: 'Agatha Christie' },
    {id:'2',name:'J. K. Rowling'}
]
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{}
})

export const selectedAllUsers = (state) => state.users;
export default usersSlice.reducer;