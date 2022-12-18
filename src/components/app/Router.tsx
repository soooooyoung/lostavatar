import { Routes, Route } from "react-router-dom";
import { CharacterListPage, HomePage, CharacterProfilePage } from "../../pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} errorElement={<></>} />
      <Route
        path="/character-list/:name"
        element={<CharacterListPage />}
        errorElement={<></>}
      />
      <Route
        path="/character-profile/:name"
        element={<CharacterProfilePage />}
        errorElement={<></>}
      />
    </Routes>
  );
};
