import React, { useEffect } from "react";
import "./NavbarComponent.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/Actions/loggedActions";
import { Link,useHistory } from "react-router-dom";

export const NavbarComponent = () => {
  const dispatch = useDispatch();
  
 let user = JSON.parse(sessionStorage.getItem('user'));
// console.log ("user->", user[0].name)
 
let _history = useHistory();


  const functionLogut = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('authenticated');
    sessionStorage.removeItem('user');
    dispatch(logout());
    _history.push('/');
  }

  jQuery(function ($) {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() >= 200) {
        $(".navbar").addClass("fixed-top");
      } else if ($(this).scrollTop() == 0) {
        $(".navbar").removeClass("fixed-top");
      }
    });

    function adjustNav() {
      var winWidth = $(window).width(),
        dropdown = $(".dropdown"),
        dropdownMenu = $(".dropdown-menu");

      if (winWidth >= 768) {
        dropdown.on("mouseenter", function () {
          $(this).addClass("show").children(dropdownMenu).addClass("show");
        });

        dropdown.on("mouseleave", function () {
          $(this)
            .removeClass("show")
            .children(dropdownMenu)
            .removeClass("show");
        });
      } else {
        dropdown.off("mouseenter mouseleave");
      }
    }

    $(window).on("resize", adjustNav);

    adjustNav();
  });
  return (
    <div>
      <header className="header-area overlay">
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container">
            <Link to="/" className="navbar-brand">
            <i className="fa fa-foursquare"></i>
              aceGram
            </Link>

            {/* <button
              type="button"
              className="navbar-toggler collapsed"
              data-toggle="collapse"
              data-target="#main-nav"
            >
              <span className="menu-icon-bar"></span>
              <span className="menu-icon-bar"></span>
              <span className="menu-icon-bar"></span>
            </button> */}

            <div id="main-nav" className="">
              <ul className="navbar-nav ml-auto">
                <li>
                  <Link to="/" className="nav-item nav-link active">
                  <i className="fa fa-home "></i> Home
                  </Link>
                </li>
                <li>
                  {user &&<Link to="/profile" className="nav-item nav-link">
                  <i className="fa fa-user-circle pr-2"></i>{user[0].name}
                  </Link>}
                </li>
                <li>
                  <a
                    href="#"
                    onClick={functionLogut}
                    className="nav-item nav-link"
                  ><i className="fa fa-sign-out pr-2"></i>
                    Log Out
                  </a>
                </li>
                {/* 	<li className="dropdown">
						<a href="#" className="nav-item nav-link" data-toggle="dropdown">Services</a>
						<div className="dropdown-menu">
							<a href="#" className="dropdown-item">Dropdown Item 1</a>
							<a href="#" className="dropdown-item">Dropdown Item 2</a>
							<a href="#" className="dropdown-item">Dropdown Item 3</a>
						</div>
					</li>
					<li className="dropdown">
						<a href="#" className="nav-item nav-link" data-toggle="dropdown">Portfolio</a>
						<div className="dropdown-menu">
							<a href="#" className="dropdown-item">Dropdown Item 1</a>
							<a href="#" className="dropdown-item">Dropdown Item 2</a>
							<a href="#" className="dropdown-item">Dropdown Item 3</a>
							<a href="#" className="dropdown-item">Dropdown Item 4</a>
							<a href="#" className="dropdown-item">Dropdown Item 5</a>
						</div>
					</li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};