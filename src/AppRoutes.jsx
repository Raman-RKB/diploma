/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";
import MainScreen from "./pages/main/main";
import Login from "./pages/login/login";
import Registration from "./pages/registration/registration";
import MyTracks from "./pages/MyTracks/mytracks";
import PlaylistOfTheDay from "./pages/PlaylistOfTheDay/PlaylistOfTheDay";
import DanceHits from "./pages/100DanceHits/100DanceHits";
import IndieCharge from "./pages/IndieCharge/IndieCharge";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/main" element={<MainScreen />} />
        <Route path="/mytracks" element={<MyTracks />} />
        <Route path="/PlaylistOfTheDay" element={<PlaylistOfTheDay />} />
        <Route path="/100DanceHits" element={<DanceHits />} />
        <Route path="/IndieCharge" element={<IndieCharge />} />
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
