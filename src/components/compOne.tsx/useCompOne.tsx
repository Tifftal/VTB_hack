import { useDispatch, useSelector } from "../../store/store";
import { increment, selectCount } from "../../store/slices/countSlice";
import { useEffect, useState } from "react";

export function useCompOne() {

  const [clas, setClas] = useState('default');

  const HandleClick = () => {
    const NewClas = clas === 'default' ? 'active' : 'default';
    setClas(NewClas)
  };

  const buttonProps = {
    onClick: HandleClick,
    className: clas
  }
  return {buttonProps}
}
