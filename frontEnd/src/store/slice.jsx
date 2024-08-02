import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    user:JSON.parse(localStorage.getItem('user')) || ''
}

const userSlice = createSlice({
    initialState,
    name:'user',
    reducers:{
        userLogIn:(state,action)=>{
            state.user = action.payload,
            localStorage.setItem('user',JSON.stringify(action.payload))
        },
        userLogOut: (state)=>{
            state.user=''
            localStorage.removeItem('user')
        }
    }
})

export const {userLogIn,userLogOut} = userSlice.actions
export default userSlice.reducer

