import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroesLayout from "./layouts/HeroesLayout";

const Login = lazy(() => import("./views/Login"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/*" element={<HeroesLayout />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<p>Page not found</p>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
