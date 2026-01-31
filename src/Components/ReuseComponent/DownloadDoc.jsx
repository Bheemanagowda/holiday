import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";


const DownloadDoc = ({ file }) => {
  if (!file?.url) return null;

  return (
    <a
      href={file.url}
      download
      className="bg-deep_green rounded-md font-medium w-max px-3 py-1 lg:text-lg text-white mt-3 mb-5 inline-flex items-center gap-2"
    >
      {file.name}<MdKeyboardArrowDown />
    </a>
  );
};

export default DownloadDoc;
