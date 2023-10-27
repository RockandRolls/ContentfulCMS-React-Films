/* eslint-disable react/prop-types */

// import FilmCard from './FilmCard';
import ComedyFilmSection from "./ComedyFilmSection";
import ActionFilmSection from "./ActionFilmSection";
import RomanticFilmSection from "./RomanticFilmSection";
import AnimeFilmSection from "./AnimeFilmSection";

const Trending = ({ films }) => {
  // fetch all state and data using fetch or axios
  //   {allFilms.filter(film => film.genre === 'comedy').map(
  //     film => <FilmCard key={film.id} {...film} />
  // )}

  return (
    films.length && 
    <>
      <ComedyFilmSection films={films} />
      {/* <ActionFilmSection {...films}/> */}
      <ActionFilmSection films={films}/>
      <RomanticFilmSection films={films}/>
      <AnimeFilmSection films={films}/>
    </>
  );
};

export default Trending;
