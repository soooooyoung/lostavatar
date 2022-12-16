import { Routes, Route } from "react-router-dom";
import { CharacterListPage, HomePage, CharacterProfilePage } from "../../pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} errorElement={<></>} />
      <Route
        path="/character-list"
        element={<CharacterListPage />}
        errorElement={<></>}
      />
      <Route
        path="/character-profile"
        element={<CharacterProfilePage />}
        errorElement={<></>}
      />
    </Routes>
  );
};
