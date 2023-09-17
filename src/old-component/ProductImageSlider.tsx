import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";
import "./product-image-slider.scss";

type ImageSliderProps = {
  images: {
    first: string;
    second: string;
    third: string;
    forth: string;
  };
};

const ProductImageSlider = ({ images }: ImageSliderProps) => {
  console.log(images);
  const imageUrls = Object.values(images);
  return (
    <div className="swiper-slider" style={{ display: "flex", height: "100vh" }}>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Thumbs, Navigation]}
        grabCursor={true}
        className="product__images-slider"
      >
        {imageUrls.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img src={imageUrl} alt="product" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        navigation={true}
        modules={[Thumbs, Navigation]}
        className="product__images-slider-thumbs"
      >
        {imageUrls.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img src={imageUrl} alt="product" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImageSlider;
