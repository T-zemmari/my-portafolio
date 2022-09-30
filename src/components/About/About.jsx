import React, { useEffect } from "react";
import "./About.css";
import MiFoto from "../../assets/images/Sin-Fondo.png";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
    <section id="about" className="about">
    <div className="container">
      <div className="row">
       
        <div className="col-lg-8 pt-4 pt-lg-0 content"data-aos="fade-right" >
          <h3>UI/UX  &amp; Desarrollador web.</h3>
          
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Teléfono:</strong> <span>+34 669217903</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Ciudad:</strong> <span>Valencia </span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>País:</strong> <span>España</span></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Master:</strong> <span>Full stack developer</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>tarek.zemmari@gmail.com</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Disponible</span></li>
              </ul>
            </div>
          </div>
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

        <div className="col-lg-4" data-aos="fade-left">
          <img src={MiFoto} className="img-fluid" alt=""/>
        </div>
      </div>

    </div>
  </section>
  </>
  );
};

export default About;
