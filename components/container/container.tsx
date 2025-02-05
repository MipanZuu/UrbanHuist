import React from "react";
import { cn } from "../../lib/utils";

export const Container = ({ ...htmlElementProps }) => {
  return <div className={cn("container mx-auto px-4")} {...htmlElementProps} />;
};
