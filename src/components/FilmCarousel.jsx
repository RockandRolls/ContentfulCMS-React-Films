
/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
// .react-multi-carousel-dot button---to make dots have white color
const FilmCarousel = ({ children }) => {
  return (
      <Carousel 
      cols={3} rows={1} gap={1} loop
        swipeable={false}
        responsive={
          // {desktop: {
          //     breakpoint : { max: 800, min: 460 }, 
          //     items: 3
          //     }
          // }}
         {
          superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 7
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
        }}
        draggable={false}
        centerMode= {true}
        arrows={true}
        showDots={true}
        infinite={true}
        autoPlay={false}
        //  {false}---if dont want autoplay
        keyBoardControl={true}
        customTransition="all .5"
        dotListClass='mb-4'
        transitionDuration={500}
      >
        {/* use function to fetch data, DRY, item is each film */}
        {/* <Carousel.item className='carousel-image'>Item 1</Carousel.item> */}
        {/* <div className='carousel-image'>Item 2</div>
        <div className='carousel-image'>Item 3</div>
        <div className='carousel-image'>Item 4</div> */}
        {children}
      </Carousel>
  );
};

export default FilmCarousel;
