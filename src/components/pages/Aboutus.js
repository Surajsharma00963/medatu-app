import React from "react";

import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <div className="layer"></div>
        {/* <!-- Mobile menu overlay mask --> */}

        <div id="preloader">
          <div data-loader="circle-side"></div>
        </div>
        <Nav />

        <main>
          <div id="breadcrumb">
            <div className="container">
              <ul>
                <li>
                  <a href="0#">Home</a>
                </li>
                <li>
                  <a href="0#">Category</a>
                </li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
          {/* <!-- /breadcrumb --> */}

          <div className="bg_color_1">
            <div className="container margin_120_95">
              <div className="main_title">
                <h1>About Findoctor</h1>
                <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
              </div>
              <div className="row justify-content-between">
                <div className="col-lg-6">
                  <figure className="add_bottom_30">
                    <img
                      src="http://via.placeholder.com/800x450.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="col-lg-5">
                  <p>
                    Lorem ipsum dolor sit amet, homero erroribus in cum. Cu eos{" "}
                    <strong>scaevola probatus</strong>. Nam atqui intellegat ei,
                    sed ex graece essent delectus. Autem consul eum ea. Duo cu
                    fabulas nonumes contentiones, nihil voluptaria pro id. Has
                    graeci deterruisset ad, est no primis detracto pertinax, at
                    cum malis vitae facilisis.
                  </p>
                  <p>
                    Dicam diceret ut ius, no epicuri dissentiet philosophia vix.
                    Id usu zril tacimates neglegentur. Eam id legimus torquatos
                    cotidieque, usu decore{" "}
                    <strong>percipitur definitiones</strong> ex, nihil utinam
                    recusabo mel no. Dolores reprehendunt no sit, quo cu viris
                    theophrastus. Sit unum efficiendi cu.
                  </p>
                  <p>
                    <em>CEO Marc Schumaker</em>
                  </p>
                </div>
              </div>
              {/* <!--/row--> */}
            </div>
            {/* <!--/container--> */}
          </div>
          {/* <!--/bg_color_1--> */}

          <div className="container margin_120_95">
            <div className="main_title">
              <h2>Our founders</h2>
              <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
            </div>
            <div id="staff" className="owl-carousel owl-theme">
              <div className="item">
                <a href="0">
                  <div className="title">
                    <h4>
                      Julia Holmes<em>CEO</em>
                    </h4>
                  </div>
                  <img src="http://via.placeholder.com/350x500.jpg" alt="" />
                </a>
              </div>
              <div className="item">
                <a href="0#">
                  <div className="title">
                    <h4>
                      Lucas Smith<em>Marketing</em>
                    </h4>
                  </div>
                  <img src="http://via.placeholder.com/350x500.jpg" alt="" />
                </a>
              </div>
              <div className="item">
                <a href="0#">
                  <div className="title">
                    <h4>
                      Paul Stephens<em>Business strategist</em>
                    </h4>
                  </div>
                  <img src="http://via.placeholder.com/350x500.jpg" alt="" />
                </a>
              </div>
              <div className="item">
                <a href="0#">
                  <div className="title">
                    <h4>
                      Pablo Himenez<em>Customer Service</em>
                    </h4>
                  </div>
                  <img src="http://via.placeholder.com/350x500.jpg" alt="" />
                </a>
              </div>
              <div className="item">
                <a href="0#">
                  <div className="title">
                    <h4>
                      Andrew Stuttgart<em>Admissions</em>
                    </h4>
                  </div>
                  <img src="http://via.placeholder.com/350x500.jpg" alt="" />
                </a>
              </div>
            </div>
            {/* <!-- /carousel --> */}
          </div>
          {/* <!--/container--> */}

          <div className="bg_color_1">
            <div className="container margin_120_95">
              <div className="main_title">
                <h2>What user says about us</h2>
                <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="about-review">
                    <div className="rating">
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i>{" "}
                      <strong>Excellent!</strong>
                    </div>
                    <p>
                      "Vel esse mucius omittantur ei. Nostrum fabellas similique
                      ex qui, dolor semper mentitum ut est, ea nec mutat vocent.
                      Animal commodo in quo, et nec zril dolor homero. Meis
                      graece ad pro, mea simul discere no."
                    </p>
                    <div className="user_review">
                      <figure>
                        <img src="http://via.placeholder.com/160x160.jpg" alt=""/>
                      </figure>
                      <h4>
                        Dr. Joseph Luiss<span>Doctor</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="about-review">
                    <div className="rating">
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i> <strong>Superb!</strong>
                    </div>
                    <p>
                      "Ad agam dignissim has, posse melius dissentiet eam eu.
                      Vel accusamus instructior ex, his ne omnes commodo
                      efficiantur. Duo quod inani maluisset te, ea per alia
                      minimum officiis."
                    </p>
                    <div className="user_review">
                      <figure>
                        <img src="http://via.placeholder.com/160x160.jpg" alt=""/>
                      </figure>
                      <h4>
                        Pablo Jemenez<span>User</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="about-review">
                    <div className="rating">
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i>{" "}
                      <strong>Very useful!</strong>
                    </div>
                    <p>
                      "Duo omnis iudicabit quaerendum ut. Ius quis adipiscing
                      ut. Id mea graeco fabulas. Pri iisque interpretaris at,
                      per diam suscipiantur in, ut ludus labore iriure pro."
                    </p>
                    <div className="user_review">
                      <figure>
                        <img src="http://via.placeholder.com/160x160.jpg" alt="" />
                      </figure>
                      <h4>
                        Marc Twain<span>User</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /row --> */}
              <div className="row">
                <div className="col-md-4">
                  <div className="about-review">
                    <div className="rating">
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i>{" "}
                      <strong>Satisfied!</strong>
                    </div>
                    <p>
                      "Elitr doming consetetur ut has, noluisse interesset te
                      vis. Nemore habemus mea at, has no probo mucius omittam.
                      Scripta numquam eruditi ad pri, quo docendi vivendum ea. "
                    </p>
                    <div className="user_review">
                      <figure>
                        <img src="http://via.placeholder.com/160x160.jpg" alt=""/>
                      </figure>
                      <h4>
                        Dr. Julia Roberts<span>Doctor</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="about-review">
                    <div className="rating">
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i> <strong>Love it!</strong>
                    </div>
                    <p>
                      "Unum justo sea ne, no facer intellegat vituperatoribus
                      duo, vix an meliore expetendis. Ei pro liber regione
                      consulatu. Est soleat molestie ad. Oblique oportere
                      pertinacia eum ne."
                    </p>
                    <div className="user_review">
                      <figure>
                        <img src="http://via.placeholder.com/160x160.jpg" alt=""/>
                      </figure>
                      <h4>
                        Dr.John Doe<span>Doctor</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="about-review">
                    <div className="rating">
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i>
                      <i className="icon_star voted"></i>{" "}
                      <strong>Great Support!</strong>
                    </div>
                    <p>
                      "Lorem ipsum dolor sit amet, ne quas inermis nec, graece
                      postea in nec. Eum propriae eligendi intellegam eu. Ius ei
                      tation intellegat."
                    </p>
                    <div className="user_review">
                      <figure>
                        <img src="http://via.placeholder.com/160x160.jpg" alt=""/>
                      </figure>
                      <h4>
                        Lucas<span>User</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /row --> */}
            </div>
            {/* <!--/container--> */}
          </div>
          {/* <!--/bg_color_1--> */}

          <div className="container margin_120_95">
            <div className="main_title">
              <h2>Why Choose Findoctor</h2>
              <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <a className="box_feat_about" href="#0">
                  <i className="pe-7s-id"></i>
                  <h3>+ 5575 Doctors</h3>
                  <p>
                    Id mea congue dictas, nec et summo mazim impedit. Vim te
                    audiam impetus interpretaris, cum no alii option, cu sit
                    mazim libris.
                  </p>
                </a>
              </div>
              <div className="col-lg-4 col-md-6">
                <a className="box_feat_about" href="#0">
                  <i className="pe-7s-help2"></i>
                  <h3>H24 Support</h3>
                  <p>
                    Id mea congue dictas, nec et summo mazim impedit. Vim te
                    audiam impetus interpretaris, cum no alii option, cu sit
                    mazim libris.{" "}
                  </p>
                </a>
              </div>
              <div className="col-lg-4 col-md-6">
                <a className="box_feat_about" href="#0">
                  <i className="pe-7s-date"></i>
                  <h3>Instant Booking</h3>
                  <p>
                    Id mea congue dictas, nec et summo mazim impedit. Vim te
                    audiam impetus interpretaris, cum no alii option, cu sit
                    mazim libris.
                  </p>
                </a>
              </div>
              <div className="col-lg-4 col-md-6">
                <a className="box_feat_about" href="#0">
                  <i className="pe-7s-headphones"></i>
                  <h3>Help Direct Line</h3>
                  <p>
                    Id mea congue dictas, nec et summo mazim impedit. Vim te
                    audiam impetus interpretaris, cum no alii option, cu sit
                    mazim libris.{" "}
                  </p>
                </a>
              </div>
              <div className="col-lg-4 col-md-6">
                <a className="box_feat_about" href="#0">
                  <i className="pe-7s-credit"></i>
                  <h3>Secure Payments</h3>
                  <p>
                    Id mea congue dictas, nec et summo mazim impedit. Vim te
                    audiam impetus interpretaris, cum no alii option, cu sit
                    mazim libris.
                  </p>
                </a>
              </div>
              <div className="col-lg-4 col-md-6">
                <a className="box_feat_about" href="#0">
                  <i className="pe-7s-chat"></i>
                  <h3>Support via Chat</h3>
                  <p>
                    Id mea congue dictas, nec et summo mazim impedit. Vim te
                    audiam impetus interpretaris, cum no alii option, cu sit
                    mazim libris.{" "}
                  </p>
                </a>
              </div>
            </div>
            {/* <!--/row--> */}
          </div>
          {/* <!-- /container --> */}
        </main>
        <Footer />
        <div id="toTop"></div>
      </>
    );
  }
}

export default AboutUs;
