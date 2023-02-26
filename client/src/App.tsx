
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './page/Home';
import Blog from './page/Blog';
import BlogPost from './page/BlogPost';
import NotFound from './page/NotFound';
import Navbar from './component/home/navbar/Navbar';
import Login from './page/admin/Login';
import Dashboard from './page/admin/Dashboard';
import Protected from './protected/Protected';
import AddPost from './page/admin/AddPost';
import ManagePost from './page/admin/ManagePost';
import UpdatePost from './page/admin/UpdatePost';
import Customization from './page/admin/Customization';
import ScrollToTop from './component/ScrollToTop';


function App() {
  const location = useLocation();

  return (
    <>
      {
        location.pathname.includes("admin") ? null : <Navbar />
      }

      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:slug' element={<BlogPost />} />
        <Route path='*' element={<NotFound />} />

        {/* Admin route will be here */}
        <Route path='/admin/login' element={<Login />} />

        <Route path='/admin/dashboard' element={<Protected><Dashboard /></Protected>}>
          <Route path='upload' element={<AddPost/>}/>
          <Route path='manage' element={<ManagePost/>}/>
          <Route path='update' element={<UpdatePost/>}/>
          <Route path='customize' element={<Customization/>}/>

        </Route>

      </Routes>
    </>
  );
}

export default App;
