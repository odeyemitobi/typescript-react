import React from "react";
import NavBar from "../components/Navbar/NavBar";

type MainLayoutprops = {
	children: React.ReactNode;
}
function MainLayout({ children }: MainLayoutprops) {
  return (
    <div className="mx-40 my-8">
      <NavBar />
      <div>{children}</div>
    </div>
  );
}

export default MainLayout;
