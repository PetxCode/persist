"use client";

import React, { FC } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";

interface iMain {
  children: React.ReactNode;
}

const MainLayout: FC<iMain> = ({ children }) => {
  const toggle = useSelector((state: any) => state.mode);

  return (
    <div
      className={`
    ${toggle ? "bg-neutral-800" : "bg-white"}
    ${!toggle ? "text-neutral-800" : "text-white"}
    
    p-2`}
    >
      {toggle ? "text-white" : "text-dark"}
      <main className="p-2 border rounded-md ]">
        <Header />
        <div className="min-h-[calc(100vh-20px)]">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
