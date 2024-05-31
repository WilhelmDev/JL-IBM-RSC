import React from "react";
import Image from "next/image";

import HeaderV2 from '@/components/common/HeaderV2'
import Footer from '@/components/common/generic-footer';
import InfElement from "@/components/pages/start/start-components/infelement";
import Partner from "@/components/common/Partner";
import EmailSend from "@/components/tasaciones/emailsend";
import { Contact } from "@/components/pages/start/start-components/contactcomponents";
import SectionInfo from "@/components/service/SectionInfo";
import { MaintanceForm, LastMaintanceForm } from "@/components/service/MaintanceForm";

export default function Service() {
  return (
    <main id='service-page'>
      <HeaderV2 />
      <section className="img-banner" />
      <section className='section-service'>
        <div className='inf-service my-5'>
          <div className='container-center'>
            <InfElement
              title={"Nuestros Servicios"}
              items={[
                {
                  "title_info": 'Tres tasaciones por propiedad',
                  "content": [
                    'Valoración Profesional',
                    'Análisis de Mercado',
                    'Asesoramiento en Tasaciones'
                  ],
                  "image": '',
                  "button": 'TASACIONES'
                },
                {
                  "title_info": '¿Que obtienes con el diagnóstico?',
                  "content": [
                    'Sello de verificación',
                    'Comprención del estado de tu propiedad',
                    'Mayor visualización y ofertas'
                  ],
                  "image": '',
                  "button": 'DIAGNÓSTICO DE PROPIEDADES'
                },
                {
                  "title_info": 'Mantenimiento de Propiedad',
                  "content": [
                    'Inspecciones profesionales',
                    'Servicios de Mantenimiento Programado',
                    'Informe a disposición'
                  ],
                  "image": '',
                  "button": 'MANTENIMIENTO'
                },
                {
                  "title_info": 'Renovación de propiedad',
                  "content": [
                    'Vinculación con Profesionales de la Zona',
                    'Asesoramiento permanente en cada etapa de la obra',
                    'Presupuestos personalizados'
                  ],
                  "image": '',
                  "button": 'CONSTRUCCIONES'
                },
              ]}
            />
          </div>
        </div>
        <div className="img-service position-relative">
          <Image 
            alt="side-img"
            layout="fill"
            objectFit="cover"
            quality={100}
            src={"/images/image-start/inf-service-image.png"}
          />
        </div>
      </section>
      <section className="section-diagnostic row gx-4 py-5">
        <div className="col-4 ml-2">
          <div className="titles">
            <h3>Diagnóstico de tu propiedad</h3>
            <strong>Verifica la tuya</strong>
          </div>
          <div className="img-diagnostic" />
        </div>
        <div className="content-text col-4 align-self-center">
          <div>{'Las propiedades que se encuentran publicadas con el sello de \"Propiedad Verificada\" cuentan con su informe a disposición. Generando más posibilidades de venta en potenciales compradores.'}</div>
          <br />
          <div>Pedí tu turno para hacer un diagnóstico de mantenimiento de la propiedad que vas a vender o que vas a comprar.</div>
        </div>
        <MaintanceForm image={'/images/service/img_form1.png'} />
      </section>
      <SectionInfo
        title={'Mantenimiento'}
        text1={'<p><strong>El mantenimiento de propiedades es fundamental para preservar su valor y prolongar su vida útil. Ignorar el mantenimiento puede llevar a problemas costosos y a la degradación de la propiedad con el tiempo.</strong></p>'}
        text2={
          "<div>Es una inversión necesaria para cualquier propietario asegurar la seguridad de las personas que la utilizan y minimizar los costos a largo plazo.</div>"
          +
          "<div>Te presentamos algunos aspectos clave del mantenimiento de propiedades y porqué deberías tenerlo en cuenta para tu propiedad:</div>"
          +
          "<div>Mantenimiento preventivo: Se refiere a las acciones programadas y regulares que se llevan a cabo para prevenir problemas futuros. Esto puede incluir inspecciones periódicas, limpieza, ajustes, lubricación y reemplazo de componentes desgastados.</div>"
          +
          "<div>Mantenimiento correctivo: Implica la reparación de problemas y daños existentes en la propiedad. Estas reparaciones deben realizarse de manera oportuna para evitar que los problemas empeoren y se vuelvan más costosos de resolver.</div>"
          +
          "<div>Mantenimiento estético: Se enfoca en mantener una apariencia atractiva de la propiedad, lo que puede incluir pintura, paisajismo y limpieza general.</div>"
        }
      />
      <section className="pb-5">
        <MaintanceForm image={'/images/service/img_form2.png'} />
      </section>
      <section className="section-info">
        <SectionInfo
          title={'Construcciones'}
          text1={
            '<ul>'+
              '<li>• Proyectos a Medida</li>'+
              '<li>• Gestión Integral de Proyectos</li>'+
              '<li>• Calidad y Eficiencia</li>'+
              '<li>• Innovación y Tecnología</li>'+
              '<li>• Construcción Sostenible</li>'+
              '<li>• Transparencia y Comunicación</li>'+
            '</ul>'
            }
          text2={
            '<ul>'+
              '<li>'+
                '<span>Proyectos a Medida</span><br/>'+
                '<span>&nbsp&nbsp• Descubre cómo materializar tu visión con nuestros proyectos personalizados.</span><br/>'+
                '<span>&nbsp&nbsp• Diseña y construye tu propiedad ideal con nuestro equipo de expertos.<span/><br/>'+
                '</li>'+
              '<li>'+
                '<span>Gestión Integral de Proyectos</span><br/>'+
                '<span>&nbsp&nbsp• Conoce nuestro enfoque completo en la gestión de proyectos de construcción.</span><br/>'+
                '<span>&nbsp&nbsp• Obtén un acompañamiento dedicado desde la planificación hasta la finalización.</span><br/>'+
              '</li>'+
              '<li>'+
                '<span>Calidad y Eficiencia</span><br/>'+
                '<span>&nbsp&nbsp• Garantizamos la calidad en cada etapa de la construcción de tu propiedad.</span><br/>'+
                '<span>&nbsp&nbsp• Implementamos soluciones eficientes para optimizar tiempo y recursos.</span><br/>'+
              '</li>'+
              '<li>'+
                '<span>Innovación y Tecnología</span><br/>'+
                '<span>&nbsp&nbsp• Descubre nuestras técnicas y tecnologías innovadoras aplicadas en la construcción.</span><br/>'+
                '<span>&nbsp&nbsp• Conoce cómo utilizamos lo último en avances tecnológicos para tu proyecto.</span><br/>'+
              '</li>'+
              '<li>'+
                '<span>Construcción Sostenible</span><br/>'+
                '<span>&nbsp&nbsp• Explora cómo integramos prácticas sostenibles en nuestros proyectos.</span><br/>'+
                '<span>&nbsp&nbsp• Construye con nosotros de manera respetuosa con el medio ambiente.</span><br/>'+
              '</li>'+
              '<li>'+
                '<span>Transparencia y Comunicación</span><br/>'+
                '<span>&nbsp&nbsp• Mantenemos una comunicación fluida y transparente en cada fase del proyecto.</span><br/>'+
                '<span>&nbsp&nbsp• Estamos comprometidos a mantener informados a nuestros clientes en todo momento.</span><br/>'+
              '</li>'+
            '</ul>'
          }
        />
        <section>
          <LastMaintanceForm image={'/images/service/img_form3.png'} />
        </section>
      </section>
      <section className="our-partners my-5">
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
      <section className="section-email">
        <EmailSend/>
      </section>
      <section className="section-contact" data-aos="fade-down">
        <Contact/>
      </section>
      <Footer />
    </main>
  )
}