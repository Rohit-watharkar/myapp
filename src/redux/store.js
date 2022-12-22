import { configureStore, createSlice } from '@reduxjs/toolkit'

let userAccountSlice = createSlice({
  name: 'userAccount',

  // Data Member
  initialState: {
    amount: 100,
    username: 'rohit',
  },

  // Member Funcn
  reducers: {
    deposit: (state) => {
      state.amount += 100
    },
    withdraw: (state) => {
      state.amount -= 50
    },
  },
})

// Maing the Member funcn public
export let { deposit, withdraw } = userAccountSlice.actions

// Configured The Store :: StateVaiable Public
export default configureStore({
  reducer: { userAccount: userAccountSlice.reducer },
})
