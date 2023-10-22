import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.scss";

import Layout from "components/Layout/Layout";
import WelcomePage from "pages/WelcomePage/WelcomePage";
// import RestrictedRoute from "components/Routes/RestrictedRoute";
import SignUpPage from "pages/SignUpPape/SignUpPage";
import SignInPage from "pages/SignInPage/SignInPage";
// import PrivateRoute from "components/Routes/PrivateRoute";
import DairyPage from "pages/DairyPage/DairyPage";
import ProfilePage from "pages/ProfilePage/ProfilePage";
import ProductsPage from "pages/ProductsPage/ProductsPage";
import ExercisesPage from "pages/ExercisesPage/ExercisesPage";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import UserForm from "components/UserForm/UserForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<WelcomePage />} /> */}
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dairy" element={<DairyPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/exercises" element={<ExercisesPage />} />
          <Route path="/error" element={<ErrorPage />} />
          
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <UserForm/>
      <Toaster />
    </>
  );
}

export default App;
