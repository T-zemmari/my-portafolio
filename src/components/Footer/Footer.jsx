import React from "react";

import "../../assets/template-uno/vendor/aos/aos.css";
import "../../assets/template-uno/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/template-uno/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../assets/template-uno/vendor/boxicons/css/boxicons.min.css";
import "../../assets/template-uno/vendor/glightbox/css/glightbox.min.css";
import "../../assets/template-uno/vendor/swiper/swiper-bundle.min.css";
// import "../../assets/template-dos/css/style.css";


export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div class="container">
          <h3>Tarek Zemmari Kissani</h3>
       
      
          <div class="social-links">
            <a href="https://github.com/T-zemmari" class="twitter" target={'_blank'}>
              <i class="bx bxl-github"></i>
            </a>
          
            <a href="https://www.linkedin.com/in/tarek-zemmari" class="linkedin" target={'_blank'}>
              <i class="bx bxl-linkedin"></i>
            </a>
          </div>
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Tarek</span></strong>. All Rights Reserved
          </div>
          <div class="credits">
            Designed by <a>Tarek Zemmari Kissani</a>
          </div>
        </div>
      </footer>
    </>
  );
}
