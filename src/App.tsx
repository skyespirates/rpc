import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout/Layout";
import BirthdayCard from "./components/BirthdayCard/App";
import Tours from "./components/Tours/App";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BirthdayCard />} />
        <Route path="tours" element={<Tours />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
