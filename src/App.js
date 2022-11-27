import "./App.css";
import SideBar from "./Components/SlideBar/SlideBar";
import Home from "./Components/Home/Home";
import Trend from "./Components/Home/Trend";
import HaiHuoc from "./Components/Home/HaiHuoc";
import KinhDi from "./Components/Home/KinhDi";
import LangMan from "./Components/Home/LangMan";
import TaiLieu from "./Components/Home/TaiLieu";
import Rate from "./Components/Home/Rate";
import TvShow from "./Components/Home/TvShow";
import Widgets from "./Components/Widgets/Widgets";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDashboard from "./Page/MovieDashboard/MovieDashboard";
import Search from "./Components/Search/Search";
import SlideBar from "./Components/SlideBar/SlideBar";
import Favorite from "./Page/Favorite/Favorite";
import PlayFilm from "./Page/PlayFilm/PlayFilm";
import Login from "./Login/Login"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
        </Routes>
      </Router>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SideBar />
                <Home />
                <Widgets />
              </>
            }
          />

          <Route
            path="/toptrending"
            element={
              <>
                <SideBar />
                <Trend />
                <Widgets />
              </>
            }
          />

          <Route
            path="/tvshow"
            element={
              <>
                <SideBar />
                <TvShow />
                <Widgets />
              </>
            }
          />
          
          <Route
            path="/haihuoc"
            element={
              <>
                <SideBar />
                <HaiHuoc />
                <Widgets />
              </>
            }
          />
          
          <Route
            path="/topdanhgia"
            element={
              <>
                <SideBar />
                <Rate />
                <Widgets />
              </>
            }
          />
          
          <Route
            path="/langman"
            element={
              <>
                <SideBar />
                <LangMan />
                <Widgets />
              </>
            }
          />
          
          <Route
            path="/kinhdi"
            element={
              <>
                <SideBar />
                <KinhDi />
                <Widgets />
              </>
            }
          />
          
          <Route
            path="/tailieu"
            element={
              <>
                <SideBar />
                <TaiLieu />
                <Widgets />
              </>
            }
          />

          <Route
            path="/play/:id"
            element={
              <>
                <SideBar />
                <PlayFilm />
                <Widgets />
              </>
            }
          />

          <Route
            path="/:type/:id"
            element={
              <>
                <MovieDashboard />
              </>
            }
          />

          <Route
            path="/search"
            element={
              <>
                <SlideBar />
                <Search />
              </>
            }
          />

          <Route
            path="/favorite"
            element={
              <>
                <SideBar />
                <Favorite />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
