import React, { FC } from "react";
import { Outlet } from "react-router-dom";

import "../../scss/app.scss";
import { Header } from "../Header";

const MainLayout: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
