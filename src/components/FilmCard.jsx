// import { Link} from 'react-router-dom';

// import { Diversity1 } from "@mui/icons-material";

/* eslint-disable react/prop-types */

const FilmCard = ({ film }) => {
  const { fields } = film;  
    // console.log(filmName,imageSrc,year, genre);
    // const imgStyle= {
    //     backgroundImage:`url(${fields?.imageSrc})`, 
    //     minHeight:"200px",
    //     minWidth:"300px",
    //     backgroundRepeat:"no-repeat",
    //     backgroundSize:"contain",
    // }
    return (
        // card-body gap-6 text-center

        // <Link to={`/${fields?.filmName}`}
    <div
        className='mx-4 mt-10 mb-16 hover:cursor-pointer hover:scale-[102%] transition-all duration-300 text-center'>         
                <figure>
                {/* <figure className='min-h-[100%] overflow-hidden bg-red' style={imgStyle}> */}
                {/* <figure className='h-[70%] overflow-hidden bg-red' style={{backgroundImage: `url(${fields?.imageSrc})`}}> */}
                    <img src={fields?.imageSrc} alt='film-poster' className='object-cover h-96 rounded-xl overflow-hidden block mx-auto' />
                </figure>       
                <h2 className='text-3xl mt-4'>{fields?.filmName}</h2>
                <p className='text-xl text-black font-light'>{fields?.year}</p>  
                {/* <div className='h-[70%] overflow-hidden bg-red' style={imgStyle}></div> */}
                              
    </div>
                // </link>
    )}    


export default FilmCard;
