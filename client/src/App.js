import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
// eslint-disable-next-line
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Wrapper from "./components/wrapper/Wrapper";
import Footer from "./components/footer/Footer";
import NewsDetails from "./pages/news/NewsDetails";
import Schedule from "./pages/schedule/Schedule";
import ScrollToTop from "./components/ScrollToTop";
import Dashboard from "./pages/admin/dashboard/Dashboard";

import CreateNews from "./pages/admin/News/createNews/CreateNews";
import NewsScreen from "./pages/admin/News/NewsOption/NewsScreen";
import UpdateNews from "./pages/admin/News/updateNews/UpdateNews";
import AdminNews from "./pages/admin/News/AdminNews/AdminNews";
import CreatePlayers from "./pages/admin/Players/createPlayers/CreatePlayers";
import PlayersOption from "./pages/admin/Players/playersOption/PlayersOption";

import AdminPlayers from "./pages/admin/Players/adminPlayers/AdminPlayers";
import UpdatePlayers from "./pages/admin/Players/updatePlayers/UpdatePlayers";
import { Toaster } from "react-hot-toast";
import TeamsOption from "./pages/admin/Team/teamsOption/TeamsOption";
import CreateTeams from "./pages/admin/Team/createTeams/CreateTeams";
import AdminTeams from "./pages/admin/Team/adminTeams/AdminTeams";
import UpdateTeams from "./pages/admin/Team/updateTeams/UpdateTeams";
import MatchOption from "./pages/admin/Match/MatchOption/MatchOption";
import CreateMatch from "./pages/admin/Match/CreateMatch/CreateMatch";
import AdminMatch from "./pages/admin/Match/AdminMatch/AdminMatch";
import UpdateMatch from "./pages/admin/Match/UpdateMatch/UpdateMatch";
import Result from "./pages/result/Result";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import PublicRoute from "./components/routes/PublicRoute";
import AllTicket from "./pages/tickets/AllTicket";
import TicketPage from "./pages/tickets/TicketPage";
import TicketStands from "./pages/tickets/TicketStands";
import Standings from "./pages/Standings/Standings";
import AllPlayers from "./pages/AllPlayers/AllPlayers";

import Redirect from "./components/routes/Redirect";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import TnCpage from "./components/footer/TnCpage";
import PrivacyPolicy from "./components/footer/PrivacyPolicy";
import AboutUs from "./components/footer/Aboutus";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Topbar /> */}
      <ScrollToTop />
      <Toaster />
      <Routes>
        <Route path="/" element={<Wrapper />} />
        <Route path="/terms-and-conditions" element={<TnCpage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/aboutus" element={<AboutUs />} />

        <Route path="/redirect" element={<Redirect />} />

        <Route path="/news/:slug" element={<NewsDetails />} />
        <Route path="/schedule" element={<Schedule />} />

        <Route path="/standings" element={<Standings />} />
        <Route path="/players" element={<AllPlayers />} />

        <Route path="/ticket" element={<AllTicket />} />
        <Route path="/ticket/match/:slug" element={<TicketPage />} />
        <Route path="/ticket/match/:slug/:name" element={<TicketStands />} />

        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route path="/result" element={<Result />} />
        <Route path="/pagenotfound" element={<PageNotFound />} />

        {/* <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/admin/news" element={<NewsScreen />}></Route>
          <Route path="/admin/news/create-news" element={<CreateNews />} />
          <Route path="/admin/news/admin-news" element={<AdminNews />} />
          <Route path="admin/news/admin-news/:slug" element={<UpdateNews />} />

          <Route path="/admin/player" element={<PlayersOption />}></Route>
          <Route
            path="/admin/player/create-players"
            element={<CreatePlayers />}
          />
          <Route path="admin/player/admin-players" element={<AdminPlayers />} />
          <Route
            path="admin/player/admin-players/:slug"
            element={<UpdatePlayers />}
          />
          <Route path="/admin/teams" element={<TeamsOption />}></Route>
          <Route path="/admin/teams/create-teams" element={<CreateTeams />} />
          <Route path="admin/teams/admin-teams" element={<AdminTeams />} />
          <Route
            path="admin/teams/admin-teams/:slug"
            element={<UpdateTeams />}
          />

          <Route path="admin/matches" element={<MatchOption />} />
          <Route
            path="/admin/matches/create-matches"
            element={<CreateMatch />}
          />
          <Route path="/admin/matches/admin-matches" element={<AdminMatch />} />
          <Route
            path="/admin/matches/admin-matches/:slug"
            element={<UpdateMatch />}
          />
        </Route> */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="news" element={<NewsScreen />}></Route>
          <Route path="news/create-news" element={<CreateNews />} />
          <Route path="news/admin-news" element={<AdminNews />} />
          <Route path="news/admin-news/:slug" element={<UpdateNews />} />

          <Route path="player" element={<PlayersOption />}></Route>
          <Route path="player/create-players" element={<CreatePlayers />} />
          <Route path="player/admin-players" element={<AdminPlayers />} />
          <Route
            path="player/admin-players/:slug"
            element={<UpdatePlayers />}
          />
          <Route path="teams" element={<TeamsOption />}></Route>
          <Route path="teams/create-teams" element={<CreateTeams />} />
          <Route path="teams/admin-teams" element={<AdminTeams />} />
          <Route path="teams/admin-teams/:slug" element={<UpdateTeams />} />

          <Route path="matches" element={<MatchOption />} />
          <Route path="matches/create-matches" element={<CreateMatch />} />
          <Route path="matches/admin-matches" element={<AdminMatch />} />
          <Route path="matches/admin-matches/:slug" element={<UpdateMatch />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
