import { Dispatch, SetStateAction } from "react";

export const ButtonOpen = ({
  setTheHeader,
}: {
  setTheHeader: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => setTheHeader(true)}
      className="w-4 h-4 flex flex-col justify-around cursor-pointer sm:hidden"
    >
      <div className="h-0.5 w-full bg-black rounded-sm"></div>
      <div className="h-0.5 w-full bg-black rounded-sm"></div>
      <div className="h-0.5 w-full bg-black rounded-sm"></div>
    </button>
  );
};
