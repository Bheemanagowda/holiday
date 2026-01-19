import React from "react";
import BharatDekho from "../../../data/BharatDekho.json";
export async function generateMetadata({ params }) {
  const { name } = await params;

  const destination = BharatDekho.find((ele) => ele.slug == name);
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
