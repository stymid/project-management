import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      layout1
      {children}
    </div>
  );
};

export default layout;
