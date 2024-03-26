import CallToActions from "@/components/common/CallToActions";
import HeaderV2 from '@/components/common/HeaderV2'
import DefaultHeader from "@/components/common/DefaultHeader";
import Partner from "@/components/common/Partner";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Agents from "@/components/pages/about/Agents";
import Features from "@/components/pages/about/Features";
import FunFact from "@/components/pages/about/FunFact";
import Mission from "@/components/pages/about/Mission";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About  || Homez - Real Estate NextJS Template",
};

const Construction = () => {

const features = [
    {
      id: 1,
      icon: "flaticon-security",
      title: "Mantenimiento de Propiedades",
      description: [
        "Inspecciones Profesionales",
        "Servicios de Mantenimiento Programado",
        "informe a disposición",
      ]
    },
    {
      id: 2,
      icon: "flaticon-keywording",
      title: "Construcción de Propiedades:",
      description: [
        "Vinculación con profesionales de la zona.",
        "Asesoramiento permanente en cada etapa de la obra.",
        "Presupuestos personalizados."
      ],
    },
    {
      id: 3,
      icon: "flaticon-investment",
      title: "Tres tasaciones por propiedad:",
      description: [
        "Valoración Profesional",
        "Análisis de Mercado",
        "Asesoramiento en Tasaciones",
      ],
    },
  ];


  return (
    <>
      {/* Main Header Nav */}
      <HeaderV2 />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      <section className="breadcumb-section2 p-0"> </section>

      <section className="our-about pb90">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-6">
              <h2> Diagnostico de propiedades </h2>
              <h3 style={{ fontWeight: 'inherit' }} className="title mb30"> Verifica la tuya </h3>
            </div>
            <div className="col-lg-6"> </div>
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container-fluid">
          <div className="row">
            <div style={{minHeight: '50vh'}} className="col-6 construction-left-side-image">
            </div>
            <div className="col-6 construction-right-side" data-aos="fade-up" data-aos-delay="300">
                <p className="paragraph"> Las propiedades que se encuentran publicadas con el sello de "Propiedad Verificada" cuentan con su informe a disposición. Generando más posibilidades de venta en potenciales compradores. </p>
                <p className="paragraph"> Pedí tu turno para hacer un diagnóstico de mantenimiento de la propiedad que vas a vender o que vas a comprar. </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container-fluid">
          <div className="row">
            <div style={{height: '100%'}} className="col-6 d-flex align-items-center justify-content-end">
              <form className="contact-form">
                <p className="paragraph"> Pedí tu turno para hacer un diagnóstico de mantenimiento de la propiedad que vas a vender o que vas a comprar. </p>

                <input type="text" name="name" placeholder="Nombre" />
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="phone" placeholder="Telefono" />
                <input type="text" name="buld-land" placeholder="¿Tienes terreno donde construir?" />
                <input type="text" name="land-size" placeholder="Metros cuadrados del terreno" />
                <input type="text" name="start-date" placeholder="¿Cuando te gustaria comenzar la obra?" />
                <input type="text" name="type" placeholder="Tipo de propiedad a construir" />
                <input type="text" name="location" placeholder="Localidad donde vas a construir" />
                <textarea placeholder="Cuentamos mas..." name="about"></textarea>
                <input type="submit" value="ENVIAR SOLICITUD" />

              </form>
            </div>
            <div className="col-6 construction-right-side-form">
            </div>
          </div>
        </div>
      </section>


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

      {/* Abut intro */}
      <section className="pt30 pb-0">
        <div className="bgc-thm-light mx-auto maxw1600 pt100 pt60-lg pb90 pb60-lg bdrs24 position-relative overflow-hidden mx20-lg">
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 col-lg-5 pl30-md pl15-xs"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="mb30">
                  <h2 className="title text-capitalize">
                    Otros Servicios que disponemos
                  </h2>
                </div>
                <div className="why-chose-list style2">
                  <Features features={features} />
                </div>
              </div>

              <div className="col-md-6">
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

export default Construction;
