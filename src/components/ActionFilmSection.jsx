import {useEffect,useState} from 'react'
import FilmCard from "./FilmCard";
import FilmCarousel from "./FilmCarousel";

const ActionFilmSection = ({films}) => {
    const [filteredFilms, setFilteredFilms] = useState([])
      
    useEffect(() => {
      films.length && setFilteredFilms(films.filter(film => film.fields.genre === 'action'))  
    }, [films])      

    // const carStyle={background:"green", display:"block",marginTop:"300px"}
    return (
      filteredFilms?.length > 0 &&
      <>
        <div>
        <h2 className='text-3xl font-bold text-red-700 '>Action</h2>
        <FilmCarousel>
          {filteredFilms?.map(film =>          
              <FilmCard key={crypto.randomUUID()} film={film}/>         
          )}
        </FilmCarousel>
        </div>
      </>
    )
  }
export default ActionFilmSection
