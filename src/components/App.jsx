import { Routes, Route, Link } from "react-router-dom";
import { Home } from 'components/Home/Home';
import { SearchMovies } from "./Movies/Movies";


export const App = () => {

  
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Movies">Movies</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<SearchMovies />} />
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </div>
  );
};
