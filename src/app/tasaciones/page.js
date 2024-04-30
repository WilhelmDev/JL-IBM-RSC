import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import Partner from "@/components/common/Partner";
import HeaderV2 from '@/components/common/HeaderV2'
import CustomPropertyGallery from "@/components/common/custom-tab-banner";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Features from "@/components/pages/about/Features";
import FunFact from "@/components/pages/about/FunFact";
import Image from "next/image";
import Link from "next/link";
import EmailSend from "@/components/tasaciones/emailsend";

import "./tasaciones.scss"

export const metadata = {
  title: "About  || Homez - Real Estate NextJS Template",
};

const About = () => {
  return (

    <>
    <div id="tasaciones">
      {/* Main Header Nav */}
      <HeaderV2 />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      <section className="breadcumb-section2 p-0" data-aos="fade-up"> </section>


      {/* Our About Area */}
      <section className="our-about p90">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-6 d-flex">
              <h2 className="pt-3">
                Tasaciones
              </h2>
            </div>
            <div className="col-lg-6">
              <p className="text mb25">
                Desde nuestro entender todo empieza por una necesidad, la necesidad de vender o la necesidad de comprar. Nuestra función es poder vincular esas necesidades conociendo la realidad de cada uno de nuestros clientes, gestionando el escenario indicado para concretar una correcta operación.
              </p>

              <p className="text mb25">
                Con el objetivo de construir un objetivo de venta, en JL Bienes Raíces consideramos que una sola tasación no es suficiente para que el cliente vendedor tenga el poder de decidir cuál sería su mejor escenario de acuerdo a su realidad y a la realidad del mercado. Es por eso que implementamos el concepto de brindar tres tasaciones. La tasación esperada, la tasación posible, la tasación dinámica.
              </p>

              <p className="text mb25">
                Preferimos darte tres tasaciones y que vos elijas cuál realidad te acompaña más.  El factor diferencial es el tiempo.
              </p>

              <p className="text mb25">
                  <strong> Tasación esperada: </strong> Es el precio de venta se espera que paguen por la propiedad, en donde el tiempo no tiene que ser un parámetro para la venta.
              </p>

              <p className="text mb25">
                  <strong> Tasación Posible: </strong> Es el valor que posiciona tu propiedad junto a otras posibilidades del mercado de similares características en la misma zona. Acompaña el tiempo de venta. 
              </p>

              <p className="text mb25">
                Es la tasación que genera visitas físicas porque los potenciales compradores perciben una oportunidad en el mercado. Reduce el tiempo de venta.
              </p>



              {/* <p className="text"> */}
              {/*   <b>Leer Más</b> */}
              {/* </p> */}
              {/*      <div className="row">
                <Mission />
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* End Our About Area */}

      {/* Begin of types of appraisals */}
      <section className="types-apparaisals d-flex flex-column align-items-center">
          <h1 data-aos="fade-down">Tipos de <strong>tasaciones</strong></h1>
        <div className="container-type d-flex justify-content-between" data-aos="fade-down">
          <div className="element-type">
            <span className="title-type">Tasación esperada</span>
            <p className="apparaisals-text">Es el precio de venta se espera que paguen por la propiedad, en donde el tiempo no tiene que ser un parámetro para la venta.</p>
          </div>
          <div className="element-type">
            <span className="title-type">Tasación Posible</span>
            <p className="apparaisals-text">Es el valor que posiciona tu propiedad junto a otras posibilidades del mercado de similares características en la misma zona. Acompaña el tiempo de venta.</p>
          </div>
          <div className="element-type">
            <span className="title-type"> Tasación Dinamica</span>
            <p className="apparaisals-text">Es la tasación que genera visitas físicas porque los potenciales compradores perciben una oportunidad en el mercado. Reduce el tiempo de venta.</p>
          </div>
        </div>
      </section>
      {/* End of types of appraisals */}



      <section className="request">
        <h1 data-aos="zoom-out">Titulo a resolver</h1>
        <div className="container-request" data-aos="zoom-out">
            <div className="container-form">
             <form className="form-contact">
                <input type="text" name="name" placeholder="Tipo de propiedad (Selección)" />
                <input type="text" name="email" placeholder="Email (Selección)" />
                <input type="text" name="phone" placeholder="Telefono (No obligatorio)" />
                <input type="text" name="buld-land" placeholder="Partido (No obligatorio)" />
                <input type="text" name="land-size" placeholder="Email" />
                <input type="text" name="start-date" placeholder="Nombre completo" />
                <input type="text" name="type" placeholder="Teléfono / Whatsapp" />
                <textarea placeholder="Información extra que tengas de la propiedad" name="about"></textarea>
                <input type="submit" value="ENVIAR SOLICITUD" />
              </form>
            </div>
            <div className="col-6 form-right-side"></div>
        </div>  
      </section>
      {/* Exclusive Agents */}



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

      {/* Begin of email send */}
      <EmailSend/>
      {/* End of email send */}

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

export default About;
