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

      <section className="breadcumb-section2 p-0"> </section>


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

      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 d-flex align-items-center justify-content-end">
             <form className="contact-form">
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
            <div className="col-6 form-right-side"></div>
          </div>
        </div>  
      </section>


      {/* <section className="pt-0"> */}
      {/*   <div className="row"> */}
      {/*     <CustomPropertyGallery /> */}
      {/*   </div> */}
      {/* </section> */}

      {/* Funfact */}
      {/* <section className="pt-0"> */}
      {/*   <div className="container"> */}
      {/*     <div */}
      {/*       className="row justify-content-center" */}
      {/*       data-aos="fade-up" */}
      {/*       data-aos-delay="300" */}
      {/*     > */}
      {/*       <FunFact /> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </section> */}
      {/* End Funfact */}

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
