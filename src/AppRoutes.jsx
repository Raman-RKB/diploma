import { Routes, Route } from "react-router-dom";
import MainScreen from "./pages/main/main";
import Login from "./pages/login/login";
import Registaration from "./pages/registration/registration";
import Profile from "./pages/profile/profile";
import Product from "./pages/product/product";
import Seller from "./pages/seller/seller";
import Addnewat from "./pages/modal/newADVT";
import Reviews from "./pages/modal/reviews";
import Settings from "./pages/modal/advsettings";
import Myadvpage from "./pages/Myadvpage/myadvpage";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registaration" element={<Registaration />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/product" element={<Product />} />
      <Route path="/seller" element={<Seller />} />
      <Route path="/addnewat" element={<Addnewat />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/myadvpage" element={<Myadvpage />} />


      {/* <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/main" element={<MainScreen />} />
        <Route path="/mytracks" element={<MyTracks />} />
        <Route path="/PlaylistOfTheDay" element={<PlaylistOfTheDay />} />
        <Route path="/100DanceHits" element={<DanceHits />} />
        <Route path="/IndieCharge" element={<IndieCharge />} />
      </Route> */}

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
