import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = ({
  images,
}: {
  images: Record<string, string>;
}): JSX.Element => {
  const imageUrls = Object.values(images);

  return (
    <div className="box">
      <Carousel
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        useKeyboardArrows={true}
        infiniteLoop={true}
        interval={5000}
        stopOnHover={true}
        emulateTouch={true}
        swipeable={true}
      >
        {imageUrls.map((imageUrl, index) => (
          <div className="carousel__img" key={index}>
            <img
              className="images"
              alt={`slide-${index}`}
              src={imageUrl}
              loading="lazy"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
