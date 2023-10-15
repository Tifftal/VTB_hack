import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { IAtm, IBranch } from '../axiosCore/map'

interface IPointsSlise {
  branches: IBranch[];
  atms: IAtm[];
  isShowAtm: boolean;
  isLogin: boolean;
}

const initialState: IPointsSlise = {
  branches: [],
  atms: [],
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
    },
    saveAtms: (state, action: PayloadAction<IAtm[]>) => {
      state.atms = action.payload;
    }
  },
})

export const selectBranches = (state: RootState) => state.points.branches;
export const selectAtms = (state: RootState) => state.points.atms;
export const selectLog = (state: RootState) => state.points.isLogin;
export const selectIsShowAtm = (state: RootState) => state.points.isShowAtm;

export const { saveBranches, changeIsShowAtm, saveLogin, savelogout, saveAtms } = branchesSlice.actions
export const { reducer } = branchesSlice