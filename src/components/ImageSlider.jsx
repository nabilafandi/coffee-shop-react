import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 100 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 8 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const ImageSlider = (props) => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      customTransition="transform 500ms "
      transitionDuration={100}
      itemClass="h-48 w-100"
    >
      {props.images.map((image, index) => (
        <img src={image} key={index} />
      ))}
    </Carousel>
  );
};

export default ImageSlider;
