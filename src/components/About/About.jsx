import React, { useEffect } from "react";
import "./About.css";
import MiFoto from "../../assets/images/Sin-Fondo.png";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="about-container" id="about">
      <div className="contenedor-sobre-mi">
        <div className="about-desc" data-aos="fade-left">
          <em>
            <span>
              Mi nombre es <strong>Tarek Zemmari</strong> , soy{" "}
              <strong>Full Stack Developer</strong> , de nacionalidad española,
              soy de Valencia y llevo en españa, desde los 19 años.
            </span>
            <br />
            Siempre he querido dedicarme a la programación , lo tenia muy claro
            desde el bachiller, y para eso estudie informática , y despues gracias al bootcamp que he superado con cierta satifación diria yo, ahora hago lo 
            que más me apasiona , que es el desarrollo web.
            <br />
            Me encanta crear aplicaciones web de cero, (PERO ESTOY IGUALMENTE COMODO CON EL CODIGO  DE OTROS DESARROLLADORES).
            <br />
            El proceso de buscar la mejor solución para satisfacer las peticiones del cliente , es muy motivador ya que  considero que cuando te gusta 
            algo , no importan los retos, los disfrutas igual.
            <br />
            Ahora me dedico al desarrollo y maquetación , trabajo sobre todo con php tanto puro , como con symfony 5.4, y en el front trabajamos con 
            html y jquery, aunque he realizado varios trabajos con react.        
         
          </em>
        </div>
        <div className="about-img" data-aos="fade-left">
          <img className="imagen-sobre-mi" src={MiFoto} alt="MiFoto" />
        </div>
      </div>
    </div>
  );
};

export default About;
