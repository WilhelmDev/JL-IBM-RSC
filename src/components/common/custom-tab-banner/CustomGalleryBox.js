"use client";
import listings from "@/data/listings";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import PropTypes from 'prop-types';


const CustomGalleryBox = ({ id, showOverFlow }) => {
  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];

  const imageUrls = [
    "/images/listings/listing-single-slide1.jpg",
    "/images/listings/listing-single-slide2.jpg",
    "/images/listings/listing-single-slide3.jpg",
  ];

  return (
    <>
      <Swiper
        className={showOverFlow ? "overflow-visible" : ""}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".single-pro-slide-next__active_custom",
          prevEl: ".single-pro-slide-prev__active_custom",
        }}
        slidesPerView={1}
        initialSlide={1}
        loop={true}
      >
        {imageUrls.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <div className="item">
              <Image
                width={2170}
                height={600}
                className="bdrs12 w-100 h-100 cover"
                src={imageUrl}
                alt={`Image ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-arrow-container">
        {/*         <Image
          alt="left-arrow"
          className="single-pro-slide-prev__active swiper_button _prev"
          src={"/images/left-arrow.webp"}
          width={50}
          height={50}
        />

        <Image
          alt="right-arrow"
          className="single-pro-slide-next__active swiper_button _next"
          src={"/images/right-arrow.webp"}
          width={50}
          height={50}
        />
 */}
      </div>
      {/* End .col for navigation  */}
    </>
  );
};

CustomGalleryBox.propTypes = {
  id: PropTypes.string,
  showOverFlow: PropTypes.bool
}

export default CustomGalleryBox;
