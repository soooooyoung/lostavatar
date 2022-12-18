import { useEffect } from "react";
import { setTheme } from "../components/app/appSlice";
import { env } from "../config/env";
import { useAppDispatch } from "../utils/app/store";
import "./HomePage.scss";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setTheme("default"));
  });
  return <>{env.isDevelopment ? "develop" : "prod"}</>;
};
