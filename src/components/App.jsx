import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Home } from 'Pages/Home/Home';
// import SearchMovies from "../Pages/Movies/Movies";
// import Casts from "./Casts/Casts";
// import { Reviews } from "./Reviews/Reviews";
import { Layout } from "./Layout/Layout";
// import MovieDetails from "components/MovieDetails/MovieDetails"

const SearchMovies = lazy(() => import("../Pages/Movies/Movies"));
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"));
const Casts = lazy(() => import("./Casts/Casts"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="movies" element={<SearchMovies />}/>
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="casts" element={<Casts />} />
            <Route path="reviews" element={<Reviews />}/>
          </Route>
            
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Route>
      </Routes>
    </Suspense>
  );
};
