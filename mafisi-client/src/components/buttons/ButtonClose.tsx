import { Dispatch, SetStateAction } from "react";

export const ButtonClose = ({
  setTheHeader,
}: {
  setTheHeader: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => setTheHeader(false)}
      className="w-4 h-4 flex flex-col space-y-2 justify-around cursor-pointer sm:hidden"
    >
      <div className="h-0.5 w-full bg-black rounded-sm origin-left rotate-45"></div>
      <div className="h-0.5 w-full bg-black rounded-sm origin-left -rotate-45"></div>
    </button>
  );
};
