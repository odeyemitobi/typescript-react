import React from "react";

type MainLayoutprops = {
	children: React.ReactNode;
}
function MainLayout({ children }: MainLayoutprops) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default MainLayout;
