import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const MarvelHeroes = lazy(() => import("../views/MarvelHeroes"));
const DCHeroes = lazy(() => import("../views/DCHeroes"));
const Search = lazy(() => import("../views/Search"));
const Hero = lazy(() => import("../views/Hero"));

const HeroesLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelHeroes />} />
          <Route path="dc" element={<DCHeroes />} />
          <Route path="search" element={<Search />} />
          <Route path="hero/:id" element={<Hero />} />
          <Route path="*" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};

export default HeroesLayout;
