import React from "react";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";

class Home extends React.Component {
  render() {
    return (
      <>
        <div class="layer"></div>
        {/* <!-- Mobile menu overlay mask --> */}

        <div id="preloader">
          <div data-loader="circle-side"></div>
        </div>
        <Nav />
        <div class="hero_home version_1">
          <div class="content">
            <h3>Find a Doctor!</h3>
            <p>
              Ridiculus sociosqu cursus neque cursus curae ante scelerisque
              vehicula.
            </p>
            <form method="post" action="list.html">
              <div id="custom-search-input">
                <div class="input-group">
                  <input
                    type="text"
                    class=" search-query"
                    placeholder="Ex. Name, Specialization ...."
                  />
                  <input type="submit" class="btn_search" value="Search" />
                </div>
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="all"
                      name="radio_search"
                      value="all"
                      checked
                    />
                    <label for="all">All</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="doctor"
                      name="radio_search"
                      value="doctor"
                    />
                    <label for="doctor">Doctor</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="clinic"
                      name="radio_search"
                      value="clinic"
                    />
                    <label for="clinic">Clinic</label>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
        <div class="container margin_120_95">
          <div class="main_title">
            <h2>
              Discover the <strong>online</strong> appointment!
            </h2>
            <p>
              Usu habeo equidem sanctus no. Suas summo id sed, erat erant
              oporteat cu pri. In eum omnes molestie. Sed ad debet scaevola, ne
              mel.
            </p>
          </div>
          <div class="row add_bottom_30">
            <div class="col-lg-4">
              <div class="box_feat" id="icon_1">
                <span></span>
                <h3>Find a Doctor</h3>
                <p>
                  Usu habeo equidem sanctus no. Suas summo id sed, erat erant
                  oporteat cu pri. In eum omnes molestie.
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="box_feat" id="icon_2">
                <span></span>
                <h3>View profile</h3>
                <p>
                  Usu habeo equidem sanctus no. Suas summo id sed, erat erant
                  oporteat cu pri. In eum omnes molestie.
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="box_feat" id="icon_3">
                <h3>Book a visit</h3>
                <p>
                  Usu habeo equidem sanctus no. Suas summo id sed, erat erant
                  oporteat cu pri. In eum omnes molestie.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- /row --> */}
          <p class="text-center">
            <a href="list.html" class="btn_1 medium">
              Find Doctor
            </a>
          </p>
        </div>

        <div class="bg_color_1">
          <div class="container margin_120_95">
            <div class="main_title">
              <h2>Most Viewed doctors</h2>
              <p>
                Usu habeo equidem sanctus no. Suas summo id sed, erat erant
                oporteat cu pri.
              </p>
            </div>
            <div id="reccomended" class="owl-carousel owl-theme">
              <div class="item">
                <a href="detail-page.html">
                  <div class="views">
                    <i class="icon-eye-7"></i>140
                  </div>
                  <div class="title">
                    <h4>
                      Dr. Julia Holmes<em>Pediatrician - Cardiologist</em>
                    </h4>
                  </div>
                  <img src="http://via.placeholder.com/350x500.jpg" alt="" />
                </a>
              </div>
              <div class="item">
                <a href="detail-page.html">
                  <div class="views">
                    <i class="icon-eye-7"></i>120
                  </div>
                  <div class="title">
                    <h4>
                      Dr. Julia Holmes<em>Pediatrician</em>
                    </h4>
                  </div>
                  <img src="http://via.placeholder.com/350x500.jpg" alt="" />
                </a>
              </div>
              <div class="item">
                <a href="detail-page.html">
                  <div class="views">
                    <i class="icon-eye-7"></i>115
                  </div>
                  <div class="title">
                    <h4>
                      Dr. Julia Holmes<em>Pediatrician</em>
                    </h4>
                  </div>
                  <img src="http://via.placeholder.com/350x500.jpg" alt="" />
                </a>
              </div>
              <div class="item">
                <a href="detail-page.html">
                  <div class="views">
                    <i class="icon-eye-7"></i>98
                  </div>
                  <div class="title">
                    <h4>
                      Dr. Julia Holmes<em>Pediatrician</em>
                    </h4>
                  </div>
                  <img src="http://via.placeholder.com/350x500.jpg" alt="" />
                </a>
              </div>
              <div class="item">
                <a href="detail-page.html">
                  <div class="views">
                    <i class="icon-eye-7"></i>98
                  </div>
                  <div class="title">
                    <h4>
                      Dr. Julia Holmes<em>Pediatrician</em>
                    </h4>
                  </div>
                  <img src="http://via.placeholder.com/350x500.jpg" alt="" />
                </a>
              </div>
            </div>
            {/* <!-- /carousel --> */}
          </div>
          {/* <!-- /container --> */}
        </div>

        {/* <!-- /white_bg --> */}

        <div class="container margin_120_95">
          <div class="main_title">
            <h2>Find your doctor or clinic</h2>
            <p>
              Nec graeci sadipscing disputationi ne, mea ea nonumes percipitur.
              Nonumy ponderum oporteat cu mel, pro movet cetero at.
            </p>
          </div>
          <div class="row justify-content-center">
            <div class="col-xl-4 col-lg-5 col-md-6">
              <div class="list_home">
                <div class="list_title">
                  <i class="icon_pin_alt"></i>
                  <h3>Search by City or Zone</h3>
                </div>
                <ul>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Albany
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Albuquerque
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Atlanta
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Baltimore
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Baton Rouge
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Birmingham
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Boston
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Buffalo
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Charleston
                    </a>
                  </li>
                  <li>
                    <a href="#0">More...</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-5 col-md-6">
              <div class="list_home">
                <div class="list_title">
                  <i class="icon_archive_alt"></i>
                  <h3>Search by type</h3>
                </div>
                <ul>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Allergist
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Cardiologist
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Chiropractor
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Dentist
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Dermatologist
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Gastroenterologist
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Ophthalmologist
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Optometrist
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Pediatrician
                    </a>
                  </li>
                  <li>
                    <a href="#0">More....</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}

        <div id="app_section">
          <div class="container">
            <div class="row justify-content-around">
              <div class="col-md-5">
                <p>
                  <img
                    src="../../assets/img/app_img.svg"
                    alt=""
                    class="img-fluid"
                    width="500"
                    height="433"
                  />
                </p>
              </div>
              <div class="col-md-6">
                <small>Application</small>
                <h3>
                  Download <strong>Findoctor App</strong> Now!
                </h3>
                <p class="lead">
                  Tota omittantur necessitatibus mei ei. Quo paulo perfecto eu,
                  errem percipit ponderum no eos. Has eu mazim sensibus. Ad
                  nonumes dissentiunt qui, ei menandri electram eos. Nam iisque
                  consequuntur cu.
                </p>
                <div class="app_buttons wow" data-wow-offset="100">
                  {/* <img src={arrow} alt="" width="150" height="50" data-retina="true"/> */}
                  <a href="#0" class="fadeIn mx-2">
                    <img
                      src="../../assets/img/apple_app.png"
                      alt=""
                      width="150"
                      height="50"
                      data-retina="true"
                    />
                  </a>
                  <a href="#0" class="fadeIn">
                    <img
                      src="../../assets/img/google_play_app.png"
                      alt=""
                      width="150"
                      height="50"
                      data-retina="true"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- /row --> */}
          </div>
          {/* <!-- /container --> */}
        </div>
        <Footer />
        <div id="toTop"></div>
      </>
    );
  }
}

export default Home;
