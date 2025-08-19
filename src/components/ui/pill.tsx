import { ReactNode } from "react";
export const Pill = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-lg font-medium mx-auto w-fit border border-[#e2e2e2] px-4 py-2 rounded-full text-[#808080] text-center flex items-center justify-center">
      {children}
    </div>
  );
};
