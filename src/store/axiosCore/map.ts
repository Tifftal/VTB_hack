import { api } from "./api";
import { AxiosResponse } from 'axios';

export interface IBranch {
  address: string;
  distance: number;
  hasRamp: "Y" | "N";
  id: number;
  kep: boolean;
  latitude: number;
  longitude: number;
  metroStation: string;
  myBranch: boolean;
  network: string;
  officeType: string;
  openHours: {
    day: string;
    hours: string;
  }[];
  openHoursIndividual: {
    day: string;
    hours: string;
  }[];
  rko: string;
  salePointCode: string;
  salePointFormat: string;
  salePointName: string;
  status: string;
  suoAvailability: "Y" | "N";
  talonCount: number;
}

const getBranchBySearch = async (e: React.FormEvent, searchText: string): Promise<IBranch[]> => {
  e.preventDefault();
  try {
    const response: AxiosResponse<IBranch[]> = await api.get(`/api/branches/get-branch-by-search/${searchText}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {getBranchBySearch, }

