import Image from "next/image";
import SinglesListEntry from "./SinglesListEntry";

import { singles } from "@/data";

const SinglesList = () => {
  return (
    <div className="items-center">
      <div className="flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <h3 className="mx-4 text-center text-xl font-semibold">Singles</h3>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="flex sm:flex-wrap sm:flex-row flex-col items-center gap-4 py-4">
        {singles.map((single, index) => (
          <SinglesListEntry key={index} piece={single} />
        ))}
      </div>
    </div>
  );
};

export default SinglesList;
