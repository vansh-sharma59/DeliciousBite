import React from "react";
import { BeatLoader} from "react-spinners";

function Loading() {
  return (
    <div>
      <div className="w-[100%] h-[100vh] flex justify-center items-center">
        <BeatLoader color="#d24314" size={40} />
      </div>
    </div>
  );
}

export default Loading;
