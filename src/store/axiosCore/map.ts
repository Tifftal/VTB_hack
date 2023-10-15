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

export interface IAtm {
  address: string;
  allDay: boolean;
  latitude: number;
  longitude: number;
  services: {
    blind: {
      serviceActivity: string;
      serviceCapability: string;
    };
    nfcForBankCards: {
      serviceActivity: string;
      serviceCapability: string;
    };
    qrRead: {
      serviceActivity: string;
      serviceCapability: string;
    };
    supportsChargeRub: {
      serviceActivity: string;
      serviceCapability: string;
    };
    supportsEur: {
      serviceActivity: string;
      serviceCapability: string;
    };
    supportsRub: {
      serviceActivity: string;
      serviceCapability: string;
    };
    supportsUsd: {
      serviceActivity: string;
      serviceCapability: string;
    };
    wheelchair: {
      serviceActivity: string;
      serviceCapability: string;
    };
  };
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

const getAllBranchs = async (): Promise<IBranch[]> => {
  try {
    const response: AxiosResponse<IBranch[]> = await api.get(`/api/branches/get-all-branches`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
const getAllAtms = async (): Promise<IAtm[]> => {
  try {
    const response: AxiosResponse<IAtm[]> = await api.get(`/api/atm/get-all-atm`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getBranchBySearch, getAllBranchs, getAllAtms }

