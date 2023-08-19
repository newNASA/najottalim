import Header from './pages/header'
import Advantages from './pages/advantages'
import Courses from './pages/courses'
import Ourgraduate from './pages/ourgraduate'
import Comments from './pages/comments'
import Section2 from "./pages/section2";
import Nav from "./pages/nav";
import Footer from "./pages/footer";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav />}>
          <div className="App">
            <Header />
            <Advantages />
            <Courses />
            <Ourgraduate />
            <Comments />
            <Section2/>
            <Footer/>
          </div>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
