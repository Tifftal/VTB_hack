import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "../store";
import { selectLog } from "../slices/pointsSlise";

interface PrivateProps {
  children: ReactNode;
}

function Private({ children }: PrivateProps) {
  const location = useLocation();
  const isAuth = useSelector(selectLog);

  if (!isAuth) {
    return (
      <Navigate
        to="/authorization"
        state={{ from: location, prev: location.state?.from?.pathname }}
      />
    );
  }

  return <>{children}</>;
}

export { Private };
