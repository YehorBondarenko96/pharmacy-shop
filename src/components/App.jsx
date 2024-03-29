import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from "./SharedLayout/SharedLayout";
// import { useDispatch } from "react-redux";
// import { setScreenOrientation } from "../redux/drugsLSSlice";
// import { useEffect } from "react";

const Shop = lazy(() => import('./Shop/Shop'));
const ShoppingCart = lazy(() => import('./ShoppingCart/ShoppingCart'));

export const App = () => {
  // const dispatch = useDispatch();

  //   const handleResize = () => {
  //           const screenWidth = window.innerWidth;
  //           const screenHeight = window.innerHeight;
  //           dispatch(setScreenOrientation({screenWidth, screenHeight}));
  //   };
    
  //   useEffect(() => {
  //       handleResize();
  //       window.addEventListener('resize', handleResize);
  //       return () => {
  //           window.removeEventListener('resize', handleResize);
  //       };
  //   });
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Shop />} />
          <Route path="/shopping-cart" element={<ShoppingCart/>} />
        </Route>
          <Route path="*" element={<Navigate to="/" />} /> 
      </Routes>
    </div>
  );
};
