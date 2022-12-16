import { env } from "../config/env";
import "./HomePage.scss";

export const HomePage = () => {
  return <>{env.isDevelopment ? "develop" : "prod"}</>;
};
