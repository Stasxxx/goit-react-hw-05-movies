import { Routes, Route} from "react-router-dom";
import { Home } from 'components/Home/Home';
import { SearchMovies } from "./Movies/Movies";
import { Layout } from "./Layout/Layout";
import {MovieDetails} from "components/MovieDetails/MovieDetails"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="movies" element={<SearchMovies />}/>
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" />
          <Route path="reviews"/>
        </Route>
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Route>
    </Routes>
  );
};
