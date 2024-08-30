import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";

import Wrapper from "./components/wrapper/Wrapper";

import NewsDetails from "./pages/news/NewsDetails";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import TicketPage from "./pages/tickets/TicketPage";
import TicketStands from "./pages/tickets/TicketStands";
import AllTicket from "./pages/tickets/AllTicket";

import Redirect from "./components/routes/Redirect";
import Layout from "./layout/Layout";
import AdminRoute from "./components/routes/AdminRoute";

const Dashboard = React.lazy(() => import("./pages/admin/dashboard/Dashboard"));

const TnCpage = React.lazy(() => import("./components/footer/TnCpage"));
const AboutUs = React.lazy(() => import("./components/footer/Aboutus"));
const PrivacyPolicy = React.lazy(() =>
  import("./components/footer/PrivacyPolicy")
);

const Result = React.lazy(() => import("./pages/result/Result"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Standings = React.lazy(() => import("./pages/Standings/Standings"));
const AllPlayers = React.lazy(() => import("./pages/AllPlayers/AllPlayers"));
const Schedule = React.lazy(() => import("./pages/schedule/Schedule"));

const MatchOption = React.lazy(() =>
  import("./pages/admin/Match/MatchOption/MatchOption")
);
const CreateMatch = React.lazy(() =>
  import("./pages/admin/Match/CreateMatch/CreateMatch")
);
const AdminMatch = React.lazy(() =>
  import("./pages/admin/Match/AdminMatch/AdminMatch")
);
const UpdateMatch = React.lazy(() =>
  import("./pages/admin/Match/UpdateMatch/UpdateMatch")
);

const TeamsOption = React.lazy(() =>
  import("./pages/admin/Team/teamsOption/TeamsOption")
);
const CreateTeams = React.lazy(() =>
  import("./pages/admin/Team/createTeams/CreateTeams")
);
const AdminTeams = React.lazy(() =>
  import("./pages/admin/Team/adminTeams/AdminTeams")
);
const UpdateTeams = React.lazy(() =>
  import("./pages/admin/Team/updateTeams/UpdateTeams")
);

const CreatePlayers = React.lazy(() =>
  import("./pages/admin/Players/createPlayers/CreatePlayers")
);
const PlayersOption = React.lazy(() =>
  import("./pages/admin/Players/playersOption/PlayersOption")
);
const AdminPlayers = React.lazy(() =>
  import("./pages/admin/Players/adminPlayers/AdminPlayers")
);
const UpdatePlayers = React.lazy(() =>
  import("./pages/admin/Players/updatePlayers/UpdatePlayers")
);

const CreateNews = React.lazy(() =>
  import("./pages/admin/News/createNews/CreateNews")
);
const NewsScreen = React.lazy(() =>
  import("./pages/admin/News/NewsOption/NewsScreen")
);
const UpdateNews = React.lazy(() =>
  import("./pages/admin/News/updateNews/UpdateNews")
);
const AdminNews = React.lazy(() =>
  import("./pages/admin/News/AdminNews/AdminNews")
);

const VideoSection = React.lazy(() => import("./pages/video/VideoSection"));

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Toaster />
      <Layout>
        <Routes>
          <Route path="/" element={<Wrapper />} />
          <Route
            path="/terms-and-conditions"
            element={
              <React.Suspense fallback="Loading...">
                <TnCpage />
              </React.Suspense>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <React.Suspense fallback="Loading...">
                <PrivacyPolicy />
              </React.Suspense>
            }
          />

          <Route
            path="/aboutus"
            element={
              <React.Suspense fallback="Loading...">
                <AboutUs />
              </React.Suspense>
            }
          />

          <Route path="/redirect" element={<Redirect />} />
          <Route path="/news/:slug" element={<NewsDetails />} />

          <Route
            path="/schedule"
            element={
              <React.Suspense fallback="Loading...">
                <Schedule />
              </React.Suspense>
            }
          />
          <Route
            path="/videos"
            element={
              <React.Suspense fallback="Loading...">
                <VideoSection />
              </React.Suspense>
            }
          />
          <Route
            path="/standings"
            element={
              <React.Suspense fallback="Loading...">
                <Standings />
              </React.Suspense>
            }
          />
          <Route
            path="/players"
            element={
              <React.Suspense fallback="Loading...">
                <AllPlayers />
              </React.Suspense>
            }
          />
          <Route path="/ticket" element={<AllTicket />} />
          <Route path="/ticket/match/:slug" element={<TicketPage />} />
          <Route path="/ticket/match/:slug/:name" element={<TicketStands />} />

          <Route
            path="/register"
            element={
              <React.Suspense fallback="Loading...">
                <Register />
              </React.Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <React.Suspense fallback="Loading...">
                <Login />
              </React.Suspense>
            }
          />

          <Route
            path="/result"
            element={
              <React.Suspense fallback="Loading...">
                <Result />
              </React.Suspense>
            }
          />
          <Route path="/pagenotfound" element={<PageNotFound />} />

          <Route
            path="/admin"
            element={
              <React.Suspense fallback="Loading...">
                <AdminRoute />
              </React.Suspense>
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
            <Route
              path="matches/admin-matches/:slug"
              element={<UpdateMatch />}
            />
          </Route>
        </Routes>
      </Layout>

      {/* <Footer /> */}
    </div>
  );
}

export default App;

{
  /* <Route path="/dashboard" element={<Dashboard />}>
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
        </Route> */
}
