import { createSlice } from "@reduxjs/toolkit";

type UserState = {
    firstname: string
    lastname: string
    age: number
}


const initialState: UserState = {
    firstname: " ",
    lastname: " ",
    age: 0
}


export const UserSlice = createSlice ({
    name: "User",
    initialState,
    reducers: {
       userFirstName: (state, action) => {
        state.firstname = action.payload
       },

       userLastName: (state, action) => {
        state.lastname = action.payload
    },
       incrementAge: (state) => {
        state.age +=1
       }
    }
})

export const {userFirstName, userLastName, incrementAge}  = UserSlice.actions

export default UserSlice.reducer