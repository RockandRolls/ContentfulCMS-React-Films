// import FilmCard from './FilmCard';
import Trending from '../components/Trending'

// import NavBar from '../components/NavBar';

const TrendingPage = ({ films }) => {
  // fetch all state and data using fetch or axios

//   {allFilms.filter(film => film.genre === 'comedy').map(
//     film => <FilmCard key={film.id} {...film} />
// )}



  return (
    <>
      <div className='bg-black text-white' >
      {/* <NavBar />  no need to write this as u placed Navbar outside Routers in App.jsx } */}
      <h1 className='text-6xl font-bold text-yellow-500 p-3 '>Trending</h1>
      <Trending films={films} />
      </div>
    </>
  )
}

export default TrendingPage;



 



