import Image from "next/image";
import Link from "next/link";
import React from "react";
import dynamic from 'next/dynamic'
const LoginForm = dynamic(() => import('@/components/pages/auth/login'), { ssr: false })

export const metadata = {
  title: "Login  || Homez - Real Estate NextJS Template",
};

const Login = () => {
  return (
    <>
      {/* Our Compare Area */}
      <section className="our-compare pt60 pb60" id="login-page">
        <div className="container">
          <div className="row" data-aos="fade-down" data-aos-delay="200">
            <div className="">
              <div className="log-reg-form signup-modal form-style1 bgc-white p50 p30-sm default-box-shadow2 bdrs12">
                <div className="text-center mb40">
                  <Link href="/" >
                    <Image
                      width={138}
                      height={44}
                      className="mb25"
                      src="/images/logo-md.svg"
                      alt="logo"
                    />
                  </Link>
                  <h2>Iniciar Sesión</h2>
                  <p className="text">
                    Inicia sesión o crea una cuenta para continuar en el sitio.
                  </p>
                </div>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
