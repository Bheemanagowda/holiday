import React from "react";
import DuniyaDekho from "../../../data/DuniyaDekho.json";

export async function generateMetadata({ params }) {
  const { name } = await params;

  // REMOVED .json here. DuniyaDekho is already the array.
  const destination = DuniyaDekho?.find((ele) => ele.slug === name);

  if (!destination) {
    return {
      title: "Not Found",
      description: "Not found",
    };
  }

  return {
    title: destination.metaTitle,
    description: destination.metaDescription,
  };
}

function layout({ children }) {
  return <div>{children}</div>;
}

export default layout;