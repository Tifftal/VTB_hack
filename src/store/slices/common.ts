import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import { commonStateType, socketConnectionType } from "../types";

const initialState: commonStateType = {
  isSocketConnected: false,
};

const slice = createSlice({
  name: "clusterState",
  initialState,
  reducers: {
    socketConnection: (
      state: commonStateType,
      action: PayloadAction<socketConnectionType>
    ) => {
      state.isSocketConnected = action.payload.state;
    },
  },
});

export const { socketConnection } = slice.actions;

export const { reducer } = slice;
