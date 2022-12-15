import { Routes, Route } from "react-router-dom";
import { CharaterListPage, HomePage } from "../../pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} errorElement={<></>} />
      <Route
        path="/character-list"
        element={<CharaterListPage />}
        errorElement={<></>}
      />
    </Routes>
  );
};
