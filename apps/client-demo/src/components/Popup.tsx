/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import { useToastContext } from "~/client-demo/src/context/ToastContext";

export const Popup = () => {
  const { toastContext } = useToastContext();

  return <>{toastContext}</>;
};
