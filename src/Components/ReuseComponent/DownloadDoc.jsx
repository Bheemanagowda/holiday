import React from "react";
import { FaFilePdf } from "react-icons/fa";

const DownloadDoc = ({ file }) => {
  if (!file?.url) return null;

  return (
    <a
      href={file.url}
      download
      className="  font-medium w-max px-3 py-1 lg:text-lg text-dark mt-3 mb-5 inline-flex items-center gap-2 hover:opacity-90 flex "
    >
    <FaFilePdf className="text-dark-600 text-5xl" />

      {file.name}
    </a>
  );
};

export default DownloadDoc;
