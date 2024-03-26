import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import Partner from "@/components/common/Partner";
import CustomPropertyGallery from "@/components/common/custom-tab-banner";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Features from "@/components/pages/about/Features";
import FunFact from "@/components/pages/about/FunFact";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About  || Homez - Real Estate NextJS Template",
};

const About = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcrumb Sections */}
      <section className="breadcumb-section2 p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1" style={{ display: 'none' }}>
                <h2 className="title">About Us</h2>
                <div className="breadcumb-list">
                  <a href="#">Home</a>
                  <a href="#">About</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Sections */}

      {/* Our About Area */}
      <section className="our-about p90">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-6 d-flex">
              <h2 className="pt-3">
                ¿Quienes Somos?
              </h2>
            </div>
            <div className="col-lg-6">
              <p className="text mb25">
                Somos un equipo de talentosos profesionales apasionados por brindar un servicio de
                asesoramiento inmobiliario de alto nivel distinguido en el mercado,
                ofreciendo un acompañamiento experto reflejado en operaciones exitosas.
              </p>
              <p className="text">
                <b>Leer Más</b>
              </p>
              {/*      <div className="row">
                <Mission />
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* End Our About Area */}

      {/* About Banner */}
      {/*       <section className="our-about pt-0">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-12">
              <div className="about-page-img">
                <Image
                  width={1206}
                  height={515}
                  priority
                  className="w-100 h-100 cover"
                  src="/images/about/about-page-banner.jpg"
                  alt="about banner"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* End About Banner */}

      <section className="pt-0">
        <div className="row">
          <CustomPropertyGallery />
        </div>
      </section>

      {/* Funfact */}
      <section className="pt-0">
        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FunFact />
          </div>
        </div>
      </section>
      {/* End Funfact */}

      {/* Exclusive Agents */}
      <section className="pb90">
        <div className="col-md-8 col-lg-10 col-xl-6 mx-auto mx-auto mw-25">
          <div className="row justify-content-center">
            <div className="col-4">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title">Nuestro equipo</h2>
              </div>
            </div>
            <div className="col-6">
              <p className="paragraph">
                Coordina y Gestiona todo lo que necesitas para que tengas tu nueva casa en condiciones.
              </p>
            </div>
            {/* End header */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-md-8 col-lg-10 col-xl-8 mx-auto" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider row">
                <div className="item col">
                  <div className="team-style1">
                    <div className="team-img">
                      <Image
                        width={217}
                        height={248}
                        className="w-100 h-100 cover"
                        src="/images/team/agent1.webp"
                        alt="agent team"
                      />
                    </div>
                    <div className="team-content pt20">
                      <h6 className="name mb-1">Nombre</h6>
                      <p className="text fz15 mb-0">puesto</p>
                    </div>
                  </div>
                </div>
                <div className="item col">
                  <div className="team-style1">
                    <div className="team-img">
                      <Image
                        width={217}
                        height={248}
                        className="w-100 h-100 cover"
                        src="/images/team/agent2.webp"
                        alt="agent team"
                      />
                    </div>
                    <div className="team-content pt20">
                      <h6 className="name mb-1">Nombre</h6>
                      <p className="text fz15 mb-0">puesto</p>
                    </div>
                  </div>
                </div>
                <div className="item col">
                  <div className="team-style1">
                    <div className="team-img">
                      <Image
                        width={217}
                        height={248}
                        className="w-100 h-100 cover"
                        src="/images/team/agent3.webp"
                        alt="agent team"
                      />
                    </div>
                    <div className="team-content pt20">
                      <h6 className="name mb-1">Nombre</h6>
                      <p className="text fz15 mb-0">puesto</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Exclusive Agents */}

      {/* Abut intro */}
      <section className="pt30 pb-0">
        <div className="mx-auto maxw1600 pt100 pt60-lg pb90 pb60-lg bdrs24 position-relative overflow-hidden mx20-lg">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div
                className="col-md-6 col-lg-5  bgc-thm-light px-0"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="mb30 px-4">
                  <h2 className="title text-capitalize">
                    ¿Como Garantizamos una buena
                    atención?
                  </h2>
                </div>
                <div className="why-chose-list style2 px-4">
                  <Features />
                </div>
                <div className="px-4">
                  <Link
                    href="/contact"
                    className="ud-btn btn-transparent  px-4"
                  >
                    NUESTROS SERVICIOS{' '}
                    <i className="fal fa-arrow-right-long" />
                  </Link>
                </div>

              </div>

              <div className="col-md-6 px-0">
                <Image
                  width={570}
                  height={570}
                  className="w-100 h-100 cover"
                  src="/images/about/cta-side-bg.webp"
                  alt="about intro"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Abut intro */}

      {/* Our Partners */}
      <section className="our-partners">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <div className="main-title text-center">
                <h6>Trabajamos tu propiedad compartiéndola en multiples canales digitales</h6>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <div
                className="dots_none nav_none"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Partner />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Partners */}

      {/* Our CTA */}
      <CallToActions />
      {/* Our CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default About;
