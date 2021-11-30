import React from "react";
import { Helmet } from "react-helmet";

class Nav extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <script src="../../assets/js/jquery-3.6.0.min.js"></script>
          <script src="../../assets/js/common_scripts.min.js"></script>
          <script src="../../assets/js/functions.js"></script>
        </Helmet>
        <header class="header_sticky">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-6">
                <div id="logo_home">
                  <h1>
                    <a href="/" title="Findoctor">
                      Findoctor
                    </a>
                  </h1>
                </div>
              </div>
              <nav class="col-lg-9 col-6">
                <a
                  class="cmn-toggle-switch cmn-toggle-switch__htx open_close "
                  href="#0"
                >
                  <span>Menu mobile</span>
                </a>
                <ul id="top_access">
                  <li>
                    <a href="/login">
                      <i class="pe-7s-user"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/register">
                      <i class="pe-7s-add-user"></i>
                    </a>
                  </li>
                </ul>
                <div class="main-menu">
                  <ul>
                    <li class="submenu">
                      <a href="/" class="show-submenu">
                        Home
                      </a>
                    </li>
                    <li class="submenu">
                      <a href="/booking" class="show-submenu">
                        Booking
                      </a>
                    </li>
                    <li class="submenu">
                      <a href="/Aboutus" class="show-submenu">
                        About Us
                      </a>
                    </li>

                    <li class="submenu">
                      <a href="/Blogs" class="show-submenu">
                        Blogs
                      </a>
                    </li>
                    <li class="submenu">
                      <a href="/regDoc" class="show-submenu">
                        Register Doctor
                      </a>
                    </li>
                    
                  </ul>
                </div>
                {/* <!-- /main-menu --> */}
              </nav>
            </div>
          </div>
          {/* <!-- /container --> */}
        </header>
      </>
    );
  }
}

export default Nav;
