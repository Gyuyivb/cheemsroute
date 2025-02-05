import { HashRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./Menu";
import { AuthProvider, AuthRoute, AuthAdd } from "./auth";
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { BlogPost } from "./BlogPost";
import { ProfilePage } from "./ProfilePage";
import { LoginPage } from "./LoginPage";
import { LogoutPage } from "./LogoutPage";
import { useBlogData } from "./useBlogData";
import { AddPost } from "./AddPost";

function App() {
  const {
    blogdata,
    handleDelete,
    handleEdit,
  } = useBlogData();

  return (
    <>
    <HashRouter>
      <AuthProvider>
        <Menu />

        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/blog" element={<BlogPage 
          blogdata={blogdata} />}>
            <Route path="/blog/:slug" element={<BlogPost 
            blogdata={blogdata}
            onDelete={handleDelete}
            onEdit={handleEdit}/>}/>
          </Route>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/logout" element={<LogoutPage />}/>
          <Route 
            path="/profile" 
            element={
              <AuthRoute>
              <ProfilePage />
            </AuthRoute>
            }/>
            <Route path="/add-post" element={
              <AuthAdd>
                <AddPost />
              </AuthAdd>}/>

          <Route path="*" element={<p>NOT FOUND</p>}/>
        </Routes>
      </AuthProvider>
    </HashRouter>
    </>
  );
}

export default App;
