import { api } from "./api";

export interface IRoute {
  id?: number;
  longitudeStart: number;
  latitudeStart: number;
  longitudeEnd: number;
  latitudeEnd: number;
  branchId?: number;
  atmId?: number;
}

const getAllRoutes = async (userId: number) => {
  try {
    const response = await api.get("/api/history/get-all-routes", {
      params: { user_id: userId },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
const createNewRoute = async (data: IRoute) => {
  try {
    const response = await api.post("/api/history/post-new-route", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getAllRoutes, createNewRoute };