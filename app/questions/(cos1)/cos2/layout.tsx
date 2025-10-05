import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      layout2
      {children}
    </div>
  );
};

export default layout;
