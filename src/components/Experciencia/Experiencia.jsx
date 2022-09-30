import React, { useEffect } from "react";
import "./Experiencia.css";
import Aos from "aos";

const Experiencia = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <section id="Experience" className="resume">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="resume-title">Full stack developer</h3>
              <div className="resume-item pb-0" data-aos="fade-left">
                <h4>( Perfumerias.com (Tedy business) )</h4>
                <p>
                  <em>Desarrollo web</em>
                </p>
                <ul>
                  <li>ENERO 2021 - Actualmente</li>
                </ul>
              </div>

              <h3 className="resume-title">Full stack developer</h3>
              <div className="resume-item pb-0" data-aos="fade-left">
                <h4>( Match ready (Sedna media) )</h4>
                <p>
                  <em>Desarrollo web</em>
                </p>
                <ul>
                  <li>JUNIO 2020 - ENERO 2021</li>
                </ul>
              </div>

              <h3 className="resume-title">Field Service Enginner</h3>
              <div className="resume-item pb-0" data-aos="fade-left">
                <h4>( Tintas y soporte Sl )</h4>
                <p>
                  <em>Técnico mecatrónico superior.</em>
                </p>
                <ul>
                  <li>JUNIO 2018 - ENERO 2020</li>
                </ul>
              </div>
              <h3 className="resume-title" data-aos="fade-left">
                Electronico Encargado Departamento Tecnico
              </h3>
              <div className="resume-item pb-0" data-aos="fade-left">
                <h4>( Universo movil )</h4>
                <p>
                  <em>Encargado del depatamento de electrónica.</em>
                </p>
                <ul>
                  <li>FEBRERO 2015 - JUNIO 2018</li>
                </ul>
              </div>

              <h3 className="resume-title">Administrador, Socio</h3>
              <div className="resume-item pb-0" data-aos="fade-left">
                <h4>( Transportes Tayru )</h4>
                <p>
                  <em>Gestión administrativa y logistica.(Combinada con trabajos por cuenta ajena en universo movil)</em>
                </p>
                <ul>
                  <li>FEBRERO 2010 - MARZO 2020</li>
                </ul>
              </div>

              <h3 className="resume-title">Electrónico</h3>
              <div className="resume-item pb-0" data-aos="fade-left">
                <h4>( Rotananet )</h4>
                <p>
                  <em>Departamento de electrónica.</em>
                </p>
                <ul>
                  <li>ENERO 2004 - JUNIO 2010</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experiencia;
