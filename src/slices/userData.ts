import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

// Define a type for the slice state
export interface UserDataState {
    userData?: {
        token: string
        userId: number
        roleId: number
        name: string
        email: string
    }
  }
  
  // Define the initial state using that type
  const initialState: UserDataState = {
    userData: undefined,
  }

  export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
      setUserData: (state, action: PayloadAction<UserDataState>) => {
        state.userData = action.payload.userData
      },
      clearUserData: (state) => {
        state.userData = undefined
      }
    },
  })

export const { setUserData, clearUserData } = userDataSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default userDataSlice.reducer