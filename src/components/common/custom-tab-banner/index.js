import React from "react";
import CustomGalleryBox from "@/components/common/custom-tab-banner/CustomGalleryBox";
import Map from "@/components/common/custom-tab-banner/Map";
import RealMapView from "@/components/common/custom-tab-banner/RealMapView";
import PropTypes from 'prop-types';
import Image from "next/image";

const CustomPropertyGallery = ({ id }) => {
  return (
    <>
      <div className="ps-v4-hero-tab">
        <div className="tab-content overflow-visible" id="pills-tabContent2">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="container-fluid px-0">
              <div className="row" data-aos="fade-up" data-aos-delay="300">
                <div className="col-lg-12">
                  <div className="ps-v4-hero-slider">
                    <CustomGalleryBox id={id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End tab-pane gallery */}

          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <Map />
          </div>
          {/* End tab-pane map */}

          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <RealMapView />
          </div>
          {/* End tab-pane real location */}
        </div>
        {/* End tab-content */}
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="ps-v4-hero-tab position-relative">
              <div className="swiper-arrow-container nav-pills row position-absolute w-100">

                <div className="col-2 px-0 text-end">
                  <Image
                    alt="left-arrow"
                    className="single-pro-slide-next__active_custom swiper_button z-3"
                    src={"/images/left-arrow.webp"}
                    width={50}
                    height={50}
                  />
                </div>

                <div className="col-8">

                  <ul
                    className="nav  justify-content-center"
                    id="pills-tab2"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active mr10"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        <span className="vibrantBlueText flaticon-images  fz20" />
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link mr10"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        <span className="vibrantBlueText flaticon-map  fz20" />
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        <span className="vibrantBlueText flaticon-maps-1  fz20" />
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="col-2 px-0 text-start">
                  <Image
                    alt="right-arrow"
                    className="single-pro-slide-prev__active_custom swiper_button z-3"
                    src={"/images/right-arrow.webp"}
                    width={50}
                    height={50}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* End container */}
    </>
  );
};

CustomPropertyGallery.propTypes = {
  id: PropTypes.string,
}

export default CustomPropertyGallery;
