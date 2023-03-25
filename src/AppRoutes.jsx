/* eslint-disable react/prop-types */
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
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registaration" element={<Registaration />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/seller/:id" element={<Seller />} />
      <Route path="/reviews/:id" element={<Reviews />} />

      <Route element={<ProtectedRoute isAllowed={Boolean({ user })} />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/addnewat" element={<Addnewat />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/myadvpage" element={<Myadvpage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
