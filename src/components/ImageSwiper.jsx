/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, FreeMode } from "swiper/modules";

export const ImageSwiper = ({ images }) => {
  // Duplicate images if not enough for smooth looping
  const minSlides = 6;
  let slides = images;
  if (images.length > 0 && images.length < minSlides) {
    const repeatCount = Math.ceil(minSlides / images.length);
    slides = Array(repeatCount).fill(images).flat().slice(0, minSlides);
  }

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={0}
      loop={true}
      freeMode={true}
      speed={4000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      modules={[Pagination, Navigation, Autoplay, FreeMode]}
      className="w-full"
      style={{ width: "100%", margin: "0 auto" }}
      allowTouchMove={false}
    >
      {slides.map((img, idx) => (
        <SwiperSlide
          key={idx}
          // style={{ width: 140 }} // Portrait width in px
          // className="!w-36" // Tailwind w-36 = 9rem = 144px
        >
          <img
            src={img.url}
            alt={`event-${idx}`}
            className="w-full h-80 object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
