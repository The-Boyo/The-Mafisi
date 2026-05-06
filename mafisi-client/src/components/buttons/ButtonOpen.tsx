import { Dispatch, SetStateAction } from "react";

export const ButtonOpen = ({
  setTheHeader,
}: {
  setTheHeader: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setTheHeader(true)}
      className="w-4 h-4 flex flex-col justify-around cursor-pointer"
    >
      <div className="h-0.5 w-full bg-black rounded-sm"></div>
      <div className="h-0.5 w-full bg-black rounded-sm"></div>
      <div className="h-0.5 w-full bg-black rounded-sm"></div>
    </div>
  );
};
