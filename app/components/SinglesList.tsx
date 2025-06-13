import Image from "next/image";
import SinglesListEntry from "./SinglesListEntry";
import MockWork from "./MockWork";

import { singles, mockWorks } from "@/data";

const SinglesList = () => {
  return (
    <div className="items-center">
      <div className="flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <h3 className="mx-4 text-center text-xl font-semibold">Singles</h3>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="flex sm:flex-row flex-col items-center gap-4 py-4 overflow-x-auto">
        {singles.map((single, index) => (
          // This wrapper div with `flex-shrink-0` is the key.
          // It prevents the AlbumListEntry from being squished by the flex container.
          <div key={index} className="flex-shrink-0">
            <SinglesListEntry key={index} piece={single} />{" "}
          </div>
        ))}
        {mockWorks.map((work, index) => (
          // This wrapper div with `flex-shrink-0` is the key.
          // It prevents the AlbumListEntry from being squished by the flex container.
          <div key={index} className="flex-shrink-0 hidden sm:block">
            <MockWork mockWork={work} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SinglesList;
