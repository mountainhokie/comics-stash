import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AdvancedSearch from "./pages/AdvancedSearch";
import SearchResults from "./pages/SearchResults";
import Issue from "./pages/Issue";
import AllIssues from "./pages/AllIssues";
import Collection from "./pages/Collection";
import AllCollections from "./pages/AllCollections";
import Volume from "./pages/Volume";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-container pb-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/advanced-search" element={<AdvancedSearch />} />
          <Route
            path="/search-results/:searchType"
            element={<SearchResults />}
          />
          <Route path="/issue/:issueID" element={<Issue />} />
          <Route path="/volume/:volumeID" element={<Volume />} />
          <Route path="/all-issues" element={<AllIssues />} />
          <Route path="/collection/:collectionName" element={<Collection />} />
          <Route path="/all-collections/" element={<AllCollections />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
