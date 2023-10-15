import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { IBranch } from '../axiosCore/map'

interface IPointsSlise {
  branches: IBranch[];
  isShowAtm: boolean;
  isLogin: boolean;
}

const initialState: IPointsSlise = {
  branches: [],
  isShowAtm: false,
  isLogin: false,
}

export const branchesSlice = createSlice({
  name: 'branches',
  initialState,
  reducers: {
    saveBranches: (state, action: PayloadAction<IBranch[]>) => {
      state.branches = action.payload
    },
    changeIsShowAtm: (state, action: PayloadAction<boolean>) => {
      state.isShowAtm = action.payload
    },
    saveLogin: (state) => {
      state.isLogin = true;
    },
    savelogout: (state) => {
      state.isLogin = false;
    }
  },
})

export const selectBranches = (state: RootState) => state.points.branches;
export const selectLog = (state: RootState) => state.points.isLogin;
export const selectIsShowAtm = (state: RootState) => state.points.isShowAtm;

export const { saveBranches, changeIsShowAtm, saveLogin, savelogout } = branchesSlice.actions
export const { reducer } = branchesSlice