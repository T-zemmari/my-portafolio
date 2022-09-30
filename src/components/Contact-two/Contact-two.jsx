import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../assets/contact-template/css/style.css";
import "./Contact-two.css";
import Envelop from "../../assets/images/envelop.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function ContactTwo() {
  const form = useRef();

  // const [name,setName]=useState('');
  // const [email,setEmail]=useState('');
  // const [subject,setSubject]=useState('');
  // const [message,setMaesage]=useState('');
  const resetForm = () => {
    form.current.reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gg6f6ko",
        "template_rt6185y",
        form.current,
        "sC22Ewz7U3KRr5By-"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("El mensaje ha sido enviado correctamente");
          // form.reset("El mensaje ha sido enviado correctamente");
          resetForm();
          MySwal.fire({
            html: "Tu mensaje se ha enviado correctamente, muchas gracias",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <section id="contact" className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div
                  className="row no-gutters mb-5 version-movil"
                  style={{
                    background:
                      "linear-gradient(90deg, rgb(0, 138, 241) 0%, rgb(70, 70, 70) 84%, rgb(0, 95, 255) 100%)",
                  }}
                >
                  <div className="col-md-7">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">Contacto</h3>
                      <div id="form-message-warning" className="mb-4"></div>
                      <div id="form-message-success" className="mb-4">
                        Tu mensaje ha sido enviado , muchas gracias!
                      </div>
                      <form
                        method="POST"
                        id="contactForm"
                        className="contactForm"
                        netlify="true"
                        name="test"
                        ref={form}
                        onSubmit={sendEmail}
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlFor="name">
                                Nombre
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Nombre"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlFor="email">
                                Correo electrónico
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="subject">
                                Tema
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Tema"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="#">
                                Mensaje
                              </label>
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="4"
                                placeholder="Mensaje"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="submit"
                                value="Enviar mensaje"
                                className="btn btn-primary"
                              />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div
                    className="col-md-5 contenedor-envelop"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img style={{ width: "30%" }} src={Envelop} alt="envelop" />
                  </div>

                  <div className="col-md-5 d-flex align-items-stretch">
                    <div id="map"></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text">
                        <p>
                          <span>Direccíon:</span> Calle tirant lo blanch 21
                          46013 Valencia España
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text">
                        <p>
                          <span>Phone:</span>{" "}
                          <a
                            href="tel://+34669217903"
                            style={{ textDecoration: "none" }}
                          >
                            + 34 669217903
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text">
                        <p>
                          <span>Email:</span>{" "}
                          <a
                            href="tarek.zemmari@gmail.com"
                            style={{ textDecoration: "none" }}
                          >
                            tarek.zemmari@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text">
                        <p>
                          <span>Web:</span>{" "}
                          <a style={{ textDecoration: "none" }} href="#">
                            tarek-zemmari.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
