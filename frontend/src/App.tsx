import React, { lazy, Suspense } from "react";
import { Routes, Route, useMatch } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavBar } from "./component/NavBar";
import { NotFound } from "./pages/NotFound";
import { HomePage } from "./pages/HomePage";
import Footer from "./component/Footer";
import MaterialDetail from "./component/MaterialAndTool/MaterialDetail";
import Advanced from "./AdvancedGroup";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const IntroductionPage = lazy(() => import("./pages/IntroductionPage"));
const TutorialPage = lazy(() => import("./pages/TutorialPage"));
const MapPage = lazy(() => import("./pages/MapPage"));
const MaterialAndToolPage = lazy(() => import("./pages/MaterialAndToolPage"));
const ShoppingList = lazy(() => import("./pages/ShoppingList"));
const AnnouncementPage = lazy(() => import("./pages/AnnouncementPage"));
const Announcement = lazy(() => import("./component/Announcement"));
const AnnouncementCreated = lazy(() => import("./component/Subscription"));
const Material = lazy(() => import("./component/MaterialAndTool/Material"));
const Tool = lazy(() => import("./component/MaterialAndTool/Tool"));

function App() {
  const match = useMatch("/advanced/*");
  const [isMain, setIsMain] = useState(true);

  useEffect(() => {
    setIsMain(!match); // match will be non-null if the route matches
  }, [match]);

  // check if the page is mainPage or advancedPage
  if (isMain) {
    return (
      <div>
        <NavBar />
        <Routes>
          {/* <Route path='/' element={<HomePage />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route
            path="/IntroductionPage"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <IntroductionPage />
              </Suspense>
            }
          />
          <Route
            path="/MapPage"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MapPage />
              </Suspense>
            }
          />
          <Route
            path="/MaterialAndToolPage"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MaterialAndToolPage />
              </Suspense>
            }
          />
          <Route
            path="/TutorialPage"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <TutorialPage />
              </Suspense>
            }
          />
          <Route
            path="/ShoppingList"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ShoppingList />
              </Suspense>
            }
          />
          <Route
            path="/LoginPage"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LoginPage />
              </Suspense>
            }
          />
          <Route
            path="/AnnouncementPage"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AnnouncementPage />
                <AnnouncementCreated />
              </Suspense>
            }
          />
          <Route
            path="/Announcement/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Announcement />
              </Suspense>
            }
          />
          <Route
            path="/MaterialAndTool/Material/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MaterialDetail />
              </Suspense>
            }
          />

          <Route
            path="/MaterialAndTool/Tool/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Tool />
              </Suspense>
            }
          />
          <Route path="/advanced/*" element={<Advanced />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    );
  } else {
    return (
      <Routes>
        <Route path="/advanced/*" element={<Advanced />} />
      </Routes>
    );
  }
}

export default App;
