import Hero from "@/components/home/home-v1/hero";
import HeaderV2 from '@/components/common/HeaderV2'
import Entrepreneurship from '@/components/location/entrepreneurship'
import Neighborhood from '@/components/location/neighborhood'
import Testimonial from "@/components/home/home-v1/Testimonial";
import CallToActions from "@/components/common/CallToActions";
import About from "@/components/home/home-v1/About";
import Property from "@/components/location/property";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Image from "next/image";
import DefaultHeader from "@/components/common/DefaultHeader";
import Partner from "@/components/common/Partner";
import CustomPropertyGallery from "@/components/common/custom-tab-banner";
import Features from "@/components/pages/about/Features";
import FunFact from "@/components/pages/about/FunFact";
import Link from "next/link";

export const metadata = {
  title: "Contacto  || Homez - Real Estate NextJS Template",
};

const Contacto = () => {
  return (
    <>
      <div id="contacto">
      {/* Main Header Nav */}
      <HeaderV2 />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Home Banner Style V1 */}
      <section className="home-banner-style1 p0">
        <div className="home-style1">
          <div className="container">
            <div className="row">
              <div className="col-xl-11 mx-auto">
                <Hero />
              </div>
            </div>
          </div>
          {/* End .container */}

          <a href="#explore-property">
            <div className="mouse_scroll animate-up-4">
              <Image
                width={20}
                height={105}
                src="/images/about/home-scroll.png"
                alt="scroll image"
              />
            </div>
          </a>
        </div>
      </section>
      {/* End Home Banner Style V1 */}

      <div className="container ">

        <div className="row my-5 py-5">
          <div className="col-6 left-side">
            <h1>Ofertas que no pueden esperar</h1>
            <p> Puedes guardar y seleccionar las que te gusten y compararlas </p>
            </div>
          <div className="col-6 d-flex justify-content-end align-items-center right-side">
            <h3>VER TODAS</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <Property />
          </div>
          <div className="col-6">
            <Property />
          </div>
        </div>
      </div>

      {/* <!-- About Us --> */}
      <section className="pt-5 my-5 pb40-md">
        <div className="container">
          <About />
        </div>
      </section>
      {/*  <!-- End About Us --> */}

      <div className="container my-5">

        <div className="row my-5 py-5">
          <div className="col-6 left-side">
            <h1>Barrios & Countries</h1>
            <p> Puedes guardar y compartir el que más te guste para tu futura casa. </p>
            </div>
          <div className="col-6 d-flex justify-content-end align-items-center right-side">
            <h3>VER TODAS</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            {/* <Property /> */}
            <Neighborhood />
          </div>
          <div className="col-4">
            <Neighborhood />
          </div>
          <div className="col-4">
            <Neighborhood />
          </div>
        </div>
      </div>

      <section className="pb100 pb50-md testimonials">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2 className="title text-white">Barrios & Countries</h2>
                <p className="paragraph text-white">
                  Puedes guardar y compartir el que más te guste para tu futura casa.
                </p>
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">

              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="testimonila_prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination testimonila_pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="testimonila_next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
            <h3 className="text-white">VER EN GOOGLE</h3>
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div
                className="testimonial-slider"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-5">

        <div className="row my-5 py-5">
          <div className="col-6 left-side">
            <h1>Emprendimientos</h1>
            <p> Si quieres invertir en tu casa del futuro aquí encontraras los emprendimientos que te ofrecemos </p>
            </div>
          <div className="col-6 d-flex justify-content-end align-items-center right-side">
            <h3>VER TODAS</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Entrepreneurship />
          </div>
          <div className="col-4">
            <Entrepreneurship />
          </div>
          <div className="col-4">
            <Entrepreneurship />
          </div>
        </div>
      </div>

      {/* Our CTA */}
      <CallToActions />
      {/* Our CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
      </div>
    </>
  );
};

export default Contacto;
