import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { BrowserRouter, Navigate, Route, Routes } from "react-router";
// import Main from "./Layout/Main/Main.tsx";
// import Home from "./Layout/Pages/Home/Home.tsx";
// import About from "./Layout/Pages/About/About.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import routes from "./Routes/route.tsx";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")!).render(
  <div className="max-w-7xl mx-auto bg-[#1D232A] p-5">
    <StrictMode>
      <Provider store={store}>
        <RouterProvider router={routes} />
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route index element={<Navigate to={"/home"} />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter> */}
      </Provider>
    </StrictMode>
  </div>
);
