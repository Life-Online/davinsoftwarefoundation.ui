import type { NextPage } from "next";
import Image from 'next/image'


const CampaignDetail: NextPage = () => {
  return (
  <div>

    <div className="preloader">
        <Image className="preloader__image" width="60" src="assets/images/loader.png" alt="" />
    </div>
    <div className="page-wrapper">
        <header className="main-header clearfix">
            <div className="main-header__logo">
                <a href="index.html">
                    <Image src="assets/images/resources/logo-1.png" alt=""/>
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

        <div className="stricky-header stricked-menu main-menu">
            <div className="sticky-header__content"></div>
        </div>
       <section className="page-header">
            <div className="page-header__bg" style={{backgroundImage: "url(assets/images/backgrounds/page-header-bg-1-1.jpg)"}}></div>
            <div className="container">
                <h2>Causes</h2>
                <ul className="thm-breadcrumb list-unstyled">
                    <li><a href="index.html">Home</a></li>
                    <li className="color-thm-gray">/</li>
                    <li><span>Causes Details</span></li>
                </ul>
            </div>
        </section>
        <section className="causes-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="causes-details__left-bar">
                            <div className="causes-details__img">
                                <div className="causes-details__img-box">
                                    <Image src="assets/images/resources/causes-details-img.jpg" alt=""/>
                                    <div className="causes-details__category">
                                        <span>Medical</span>
                                    </div>
                                </div>
                                <div className="causes-details__progress">
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="36%">
                                            <div className="count-text">36%</div>
                                        </div>
                                    </div>
                                    <div className="causes-details__goals">
                                        <p><span>$25,270</span> Raised</p>
                                        <p><span>$30,000</span> Goal</p>
                                    </div>
                                </div>
                            </div>
                            <div className="causes-details__text-box">
                                <h3>Raise Fund for Clean & Healthy Water</h3>
                                <p className="causes-details__text-1">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.</p>
                                <p className="causes-details__text-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="causes-details__images-box">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="causes-details__images-single">
                                            <Image src="assets/images/resources/causes-details-images-1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="causes-details__images-single">
                                            <Image src="assets/images/resources/causes-details-images-2.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="causes-details__summary">
                                <div className="causes-details__summary-text">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing. </p>
                                </div>
                                <div className="causes-details__summary-list">
                                    <ul className="causes-details__summary-list-box list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-arrow-circle-right"></i>
                                            </div>
                                            <div className="text">
                                                <p>Making this first true generator</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-arrow-circle-right"></i>
                                            </div>
                                            <div className="text">
                                                <p>Many desktop publish packages</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-arrow-circle-right"></i>
                                            </div>
                                            <div className="text">
                                                <p>Lorem Ipsum is not simply</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-arrow-circle-right"></i>
                                            </div>
                                            <div className="text">
                                                <p>If you are going to passage</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-arrow-circle-right"></i>
                                            </div>
                                            <div className="text">
                                                <p>It has roots in a piece</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="causes-details__share">
                                <div className="causes-details__share-btn-box">
                                    <a href="#" className="causes-details__share-btn thm-btn"><i className="fas fa-arrow-circle-right"></i>Donate Us Now</a>
                                </div>
                                <div className="causes-details__share-social">
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-facebook-square"></i></a>
                                    <a href="#"><i className="fab fa-dribbble"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="causes-details__download">
                                <div className="causes-details__left">
                                    <div className="icon">
                                        <Image src="assets/images/resources/causes-details-download-icon.png" alt=""/>
                                    </div>
                                    <div className="text">
                                        <h4>Our Presentation</h4>
                                    </div>
                                </div>
                                <div className="causes-details__download-btn-box">
                                    <a href="#" className="causes-details__download-btn thm-btn"><i className="fas fa-arrow-circle-right"></i>Download Now</a>
                                </div>
                            </div>
                            <div className="comment-one">
                                <h3 className="comment-one__title">Comments</h3>
                                <div className="comment-one__single">
                                    <div className="comment-one__image">
                                        <Image src="assets/images/blog/comment-1-1.jpg" alt=""/>
                                    </div>
                                    <div className="comment-one__content">
                                        <h3>David Marks <span>3 hours ago</span></h3>
                                        <p>Sending love. My nephews Nick and Anthony Salaber are your teammates, so I know the caliber person you are. Our whole family is sending our best to you and your family.</p>
                                        <a href="#" className="comment-one__btn thm-btn"><i className="fas fa-arrow-circle-right"></i>Reply</a>
                                    </div>
                                </div>
                                <div className="comment-one__single">
                                    <div className="comment-one__image">
                                        <Image src="assets/images/blog/comment-1-2.jpg" alt=""/>
                                    </div>
                                    <div className="comment-one__content">
                                        <h3>Christine Eve <span>3 hours ago</span></h3>
                                        <p>Sending love. My nephews Nick and Anthony Salaber are your teammates, so I know the caliber person you are. Our whole family is sending our best to you and your family.</p>
                                        <a href="#" className="comment-one__btn thm-btn"><i className="fas fa-arrow-circle-right"></i>Reply</a>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-form">
                                <h3 className="comment-form__title">Leave a Comment</h3>
                                <form action="assets/inc/sendemail.php" className="comment-one__form contact-form-validated">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="text" placeholder="Your name" name="name"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="email" placeholder="Email address" name="email"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="comment-form__input-box">
                                                <textarea name="message" placeholder="Write message"></textarea>
                                            </div>
                                            <button type="submit" className="thm-btn comment-form__btn"><i className="fas fa-arrow-circle-right"></i>Submit Comment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="causes-details__right">
                            <div className="causes-details__organizer">
                                <div className="causes-details__organizer-img">
                                    <Image src="assets/images/resources/causes-details-organizar-img-1.jpg" alt=""/>
                                </div>
                                <div className="causes-details__organizer-content">
                                    <p>Created 20 Jan, 2021</p>
                                    <h5>Organizer: <span>Jessica Smith</span></h5>
                                    <ul className="causes-details__organizer-list list-unstyled">
                                        <li><i className="fas fa-map-marker-alt"></i>Education</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Wrightwood, Canada</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="causes-details__donations">
                                <h3 className="causes-details__donations-title">Recent Donations</h3>
                                <ul className="list-unstyled causes-details__donations-list">
                                    <li>
                                        <div className="causes-details__donations-img">
                                            <Image src="assets/images/resources/recent-donation-img-1.jpg" alt=""/>
                                        </div>
                                        <div className="causes-details__donations-content">
                                            <h4>$20</h4>
                                            <h5>David Marks <span>3 hours ago</span></h5>
                                            <p>God bless you dear</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="causes-details__donations-img">
                                            <Image src="assets/images/resources/recent-donation-img-2.jpg" alt=""/>
                                        </div>
                                        <div className="causes-details__donations-content">
                                            <h4>$60</h4>
                                            <h5>Jessica Rose <span>6 hours ago</span></h5>
                                            <p>God bless you dear</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="causes-details__donations-img">
                                            <Image src="assets/images/resources/recent-donation-img-3.jpg" alt=""/>
                                        </div>
                                        <div className="causes-details__donations-content">
                                            <h4>$30</h4>
                                            <h5>Kevim Martin <span>1 day ago</span></h5>
                                            <p>God bless you dear</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="causes-details__donations-img">
                                            <Image src="assets/images/resources/recent-donation-img-4.jpg" alt=""/>
                                        </div>
                                        <div className="causes-details__donations-content">
                                            <h4>$180</h4>
                                            <h5>Anonymous <span>1 day ago</span></h5>
                                            <p>God bless you dear</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
    <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        <div className="mobile-nav__content">
            <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times"></i></span>

            <div className="logo-box">
                <a href="index.html" aria-label="logo image"><Image src="assets/images/resources/logo-1.png" width="155" alt="" /></a>
            </div>
            <div className="mobile-nav__container"></div>
            <ul className="mobile-nav__contact list-unstyled">
                <li>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:needhelp@packageName__.com">needhelp@halpes.com</a>
                </li>
                <li>
                    <i className="fa fa-phone-alt"></i>
                    <a href="tel:666-888-0000">666 888 0000</a>
                </li>
            </ul>
            <div className="mobile-nav__top">
                <div className="mobile-nav__social">
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-facebook-square"></a>
                    <a href="#" className="fab fa-pinterest-p"></a>
                    <a href="#" className="fab fa-instagram"></a>
                </div>
            </div>
        </div>
    </div>
    <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>
        <div className="search-popup__content">
            <form action="#">
                <label  className="sr-only">search here</label>
                <input type="text" id="search" placeholder="Search Here..." />
                <button type="submit" aria-label="search submit" className="thm-btn">
                    <i className="icon-magnifying-glass"></i>
                </button>
            </form>
        </div>
    </div>
    <a href="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></a>
  </div>
  )
};

export default CampaignDetail;
