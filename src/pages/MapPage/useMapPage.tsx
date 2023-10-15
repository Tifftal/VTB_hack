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

  /* const bankList: placeProps[] = [
    {
      name: "Центральный филиал ВТБ",
      address: "Улица Центральная, 123",
      timeWalk: "5 минут",
      timeCar: "10 минут",
      status: true,
      rating: 4.5,
      distance: 1.2,
      openTime: 9,
      closeTime: 18
    },
    {
      name: "Филиал ВТБ на Проспекте",
      address: "Проспект Солнечный, 456",
      timeWalk: "8 минут",
      timeCar: "15 минут",
      status: false,
      rating: 4.0,
      distance: 2.5,
      openTime: 10,
      closeTime: 17.5
    },
    {
      name: "Филиал ВТБ на Банковской улице",
      address: "Банковская улица, 789",
      timeWalk: "12 минут",
      timeCar: "8 минут",
      status: true,
      rating: 5.0,
      distance: 3.0,
      openTime: 8.5,
      closeTime: 18.5
    },
    {
      name: "Филиал ВТБ в Торговом центре",
      address: "Торговый проезд, 222",
      timeWalk: "15 минут",
      timeCar: "20 минут",
      status: true,
      rating: 4.8,
      distance: 4.5,
      openTime: 9.5,
      closeTime: 19
    },
    {
      name: "Филиал ВТБ на Зеленой улице",
      address: "Зеленая улица, 555",
      timeWalk: "10 минут",
      timeCar: "12 минут",
      status: true,
      rating: 4.2,
      distance: 2.0,
      openTime: 9,
      closeTime: 17.5
    },
    {
      name: "Филиал ВТБ в Бизнес-центре",
      address: "Бизнес-площадь, 321",
      timeWalk: "7 минут",
      timeCar: "15 минут",
      status: false,
      rating: 3.5,
      distance: 1.8,
      openTime: 10,
      closeTime: 18
    },
    {
      name: "Филиал ВТБ на Магистральной улице",
      address: "Магистральная улица, 987",
      timeWalk: "20 минут",
      timeCar: "25 минут",
      status: true,
      rating: 4.7,
      distance: 5.0,
      openTime: 8.5,
      closeTime: 19.5
    },
    {
      name: "Филиал ВТБ в Жилом комплексе",
      address: "Жилая площадь, 456",
      timeWalk: "10 минут",
      timeCar: "10 минут",
      status: true,
      rating: 4.0,
      distance: 2.2,
      openTime: 9,
      closeTime: 18
    },
    {
      name: "Филиал ВТБ на Солнечной аллее",
      address: "Солнечная аллея, 789",
      timeWalk: "15 минут",
      timeCar: "18 минут",
      status: false,
      rating: 3.8,
      distance: 3.5,
      openTime: 10,
      closeTime: 17.5
    },
    {
      name: "Филиал ВТБ в Парковой зоне",
      address: "Парковая зона, 111",
      timeWalk: "12 минут",
      timeCar: "10 минут",
      status: true,
      rating: 4.5,
      distance: 2.8,
      openTime: 9,
      closeTime: 18.5
    }
  ] */

  const placeBarProps: IPlaceBarProps = {
    placeList: points,
  };

  return { placeBarProps }
};