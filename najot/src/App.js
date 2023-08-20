import Header from './pages/header'
import Blogs from './pages/blog'
import Nav from "./pages/nav";
import NotFound from "./pages/notfound";
import Login from "./pages/login";
import Kurslar from "./pages/kurslar";
import Epochta from "./pages/epochta";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    

      <Routes>
        <Route path='/' element={<Nav />}>
            <Route index element={<Header/>} />
            <Route path='/bloglar' element={<Blogs />} />
            <Route path='/kurslar' element={<Kurslar />} />
            <Route path='*' element={<NotFound />} />
        </Route>
            <Route path='/kirish' element={<Login />} />
            <Route path='/ePochta' element={<Epochta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
