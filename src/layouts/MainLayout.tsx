import React from "react";
import NavBar from "../components/Navbar/NavBar";

type MainLayoutprops = {
	children: React.ReactNode;
}
function MainLayout({ children }: MainLayoutprops) {
  return (
    <div className="px-4 py-2 md:px-8 lg:px-20 lg:py-8 xl:px-40 xl:py-8">
      <NavBar />
      <div>{children}</div>
    </div>
  );
}

export default MainLayout;
