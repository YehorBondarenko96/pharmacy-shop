import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Shop = lazy(() => import('./Shop/Shop'));


export const App = () => {
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
          <Route index element={<Shop/>}/>

        </Route>
          <Route path="*" element={<Navigate to="/" />} /> 
      </Routes>
    </div>
  );
};
