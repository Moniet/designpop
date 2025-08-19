import React, { PropsWithChildren } from "react";

export const Header = ({ children }: PropsWithChildren) => {
  return (
    <h2
      className={`text-4xl font-medium mt-5 mb-10 lg:text-5xl text-center mx-auto lg:![line-height:1.5] h-fit`}
    >
      {children}
    </h2>
  );
};
