import { useEffect, useState } from "react";
import { placeProps } from "../../store/api/banksApi";
import { IPlaceBarProps } from "../../components/PlaceBar";
import { ISearchBarProps } from "../../components/SearchBar";
import { getAllAtms, getAllBranchs } from "../../store/axiosCore/map";
import { useDispatch, useSelector } from "../../store/store";
import { saveAtms, saveBranches, selectAtms, selectBranches } from "../../store/slices/pointsSlise";

export const useMapPage = () => {
  const [points, setPoints] = useState([]);

  const dispatch = useDispatch()

  useEffect(() => {
    getAllBranchs()
    .then((data) => dispatch(saveBranches(data)))
    .catch((error) => console.log(error));
    getAllAtms()
    .then((data) => dispatch(saveAtms(data)))
    .catch((error) => console.log(error));
  }, []);

  const branches = useSelector(selectBranches);
  const atms = useSelector(selectAtms);

  const placeBarProps: IPlaceBarProps = {
    placeList: points,
  };

  return { placeBarProps }
};