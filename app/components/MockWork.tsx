import type { MockWork } from "@/data";

const MockWork = ({ mockWork }: { mockWork: MockWork }) => {
  return (
    <article className="flex flex-col gap-2">
      <div className="p-2 flex items-center justify-center rounded-md bg-gray-900 size-72 select-none hover:scale-101 duration-300 active:scale-99">
        <h2 className="text-center text-4xl font-semibold">
          {mockWork.artworkText}
        </h2>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{mockWork.title}</h3>
          <span>{`${mockWork.numOfTracks} tracks`}</span>
        </div>
      </div>
    </article>
  );
};

export default MockWork;
