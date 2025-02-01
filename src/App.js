import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { ProfilePage } from "./ProfilePage";
import { Menu } from "./Menu";

function App() {
  return (
    <>
    <HashRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/blog" element={<BlogPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="*" element={<p>NOT FOUND</p>}/>
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
