import { Routes, Route} from "react-router-dom";
import { Home } from 'components/Home/Home';
import { SearchMovies } from "./Movies/Movies";
import { Layout } from "./Layout/Layout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="movies" element={<SearchMovies />} />
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Route>
    </Routes>
  );
};
