import { React } from "react";
import Logo from './reactlogo';
import Image from 'next/image';

const Footer = () => {
    return(
        <div id="footer">
            <div id="container-footer">
                <div id="container-media">
                    <Logo/>
                    <div id="media">
                        <Image className="image-media" width={30} height={30} src={""} alt="icon"/>
                        <Image className="image-media" width={30} height={30} src={""} alt="icon"/>
                        <Image className="image-media" width={30} height={30} src={""} alt="icon"/>
                        <Image className="image-media" width={30} height={30} src={""} alt="icon"/>
                    </div>
                </div>
                <div id="container-copyright">
                    <div id="container-text">
                        <span id="name_company">© JL Bienes Raices 2023</span>
                        <span id="copyright"> - Todos los derechos reservados</span>
                    </div>
                    <div id="container-links">
                        <span><a>Privacidad</a> · <a>Terminos</a> · <a>Mapa del sitio</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Footer;