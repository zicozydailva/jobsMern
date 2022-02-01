import { BrowserRouter, Routes, Route } from "react-router-dom";
import{Register, Landing, Error} from "./pages"
import { AddJobs, AllJobs, Profile, Stats } from "./pages/dashboard/index";
function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/">
            <Route path="stats" element={<Stats />} />
            <Route path="all-jobs" element={<AllJobs />} />
            <Route path="add-jobs" element={<AddJobs />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
