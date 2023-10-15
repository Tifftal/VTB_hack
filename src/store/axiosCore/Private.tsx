import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface PrivateProps {
  children: ReactNode;
}

function Private({ children }: PrivateProps) {
  const location = useLocation();
  const auth = true;

  if (!auth) {
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
