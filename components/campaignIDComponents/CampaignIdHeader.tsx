
import React from 'react';
import Image from "next/image";


const CampaignIdHeader = () => {
  return (
    <header className="main-header clearfix">
    <div className="main-header__logo">
        <a href="index.html">
            <Image src="/assets/images/resources/logo-1.png" width="500" height="500"  alt=""/>
        </a>
    </div>
    <div className="main-menu-wrapper">
       <div className="main-menu-wrapper__top">
           <div className="main-menu-wrapper__top-inner">
                <div className="main-menu-wrapper__left">
                    <div className="main-menu-wrapper__left-content">
                        <div className="main-menu-wrapper__left-text">
                            <p>Welcome to the Charity & Donation Theme</p>
                        </div>
                        <div className="main-menu-wrapper__left-email-box">
                            <div className="icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="email">
                                <a href="mailto:needhelp@company.com">needhelp@company.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-menu-wrapper__right">
                    <div className="main-menu-wrapper__right-social">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-facebook-square"></i></a>
                        <a href="#"><i className="fab fa-dribbble"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
           </div>
       </div>
        <div className="main-menu-wrapper__bottom">
            <nav className="main-menu">
                <div className="main-menu__inner">
                    <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                    <ul className="main-menu__list">
                        <li className="dropdown">
                            <a href="index.html">Home</a>
                            <ul>
                                <li>
                                    <a href="index.html">Home One</a>
                                </li>
                                <li><a href="index2.html">Home Two</a></li>
                                <li><a href="index3.html">Home Three</a></li>
                                <li className="dropdown">
                                    <a href="#">Header Styles</a>
                                    <ul>
                                        <li><a href="index.html">Header One</a></li>
                                        <li><a href="index.html">Header Two</a></li>
                                        <li><a href="index.html">Header Three</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#">Pages</a>
                            <ul>
                                <li><a href="about.html">About</a></li>
                                <li><a href="volunteers.html">Volunteers</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="become-volunteer.html">Become a Volunteer</a></li>
                            </ul>
                        </li>
                        <li className="dropdown current">
                            <a href="#">Donations</a>
                            <ul>
                                <li><a href="causes.html">Causes</a></li>
                                <li><a href="causes-details.html">Causes Details</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#">Events</a>
                            <ul>
                                <li><a href="events.html">Events</a></li>
                                <li><a href="event-details.html">Event Details</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#">News</a>
                            <ul>
                                <li><a href="news.html">News</a></li>
                                <li><a href="news-details.html">News Details</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                    <div className="main-menu__right">
                        <a href="#" className="main-menu__search search-toggler icon-magnifying-glass"></a>
                        <a href="#" className="main-menu__cart icon-shopping-cart  "></a>
                        <div className="main-menu__phone-contact">
                            <div className="main-menu__phone-icon">
                                <span className="icon-chat"></span>
                            </div>
                            <div className="main-menu__phone-number">
                                <p>Call Anytime</p>
                                <a href="tel:92 666 888 0000">92 666 888 0000</a>
                            </div>
                        </div>
                        <a href="causes-details.html" className="main-menu__donate-btn"><i className="fa fa-heart"></i>Donate </a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</header>
  )
}
export default CampaignIdHeader;