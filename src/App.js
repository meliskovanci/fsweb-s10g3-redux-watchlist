import { useState, useEffect } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useDispatch, useSelector } from "react-redux";
import { favouriteAdd } from "./actions/action";
import { movies } from "./movies";

function App() {
  const [sira, setSira] = useState(0);
  const favMovies = useSelector((store) => store.favMovies);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem("favMovies", JSON.stringify(favMovies));
  // }, [favMovies]);

  const handleAddFav = () => {
    dispatch(favouriteAdd(movies[sira]));
    sira < movies.length - 1 && setSira(sira + 1);
  };

  const basaDon = () => {
    setSira(0);
  };

 
  // function sonrakiFilm() {
  //   setSira(sira + 1);
  // }

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink to="/" exact className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Filmler
        </NavLink>
        <NavLink to="/listem" className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira} 
          setSira={setSira} 
          />

          <div className="flex gap-3 justify-end py-3">
            <button
              onClick={basaDon}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Başa Dön
            </button>
            <button onClick={handleAddFav} className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white">
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
