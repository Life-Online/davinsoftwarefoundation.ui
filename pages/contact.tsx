import type { NextPage } from "next";
import Image from 'next/image'

const Home: NextPage = () => {
  return (
  <div>
     <div className="preloader">
        <Image className="preloader__image" width="60" src="assets/images/loader.png" alt="" />
    </div>
    <div className="page-wrapper">
   

        <div className="stricky-header stricked-menu main-menu">
            <div className="sticky-header__content"></div>
        </div>
       <section className="page-header">
            <div className="page-header__bg" style={{backgroundImage: "url(assets/images/backgrounds/page-header-bg-1-1.jpg)"}}></div>
            <div className="container">
                <h2>Contact</h2>
                <ul className="thm-breadcrumb list-unstyled">
                    <li><a href="index.html">Home</a></li>
                    <li className="color-thm-gray">/</li>
                    <li><span>Contact</span></li>
                </ul>
            </div>
        </section>
        <section className="contact-page">
            <div className="container">
                <div className="section-title text-center">
                    <span className="section-title__tagline">Contact With Us</span>
                    <h2 className="section-title__title">We love to hear from our <br/> happy customers</h2>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-page__left">
                            <div className="contact-page__img">
                                <Image src="assets/images/resources/contact-page-img-1.jpg" alt=""/>
                            </div>
                            <p className="contact-page__text">There are many variations of passages of available but the majority have suffered alteration in some form, by injected humou or randomised words even slightly believable.</p>
                            <div className="contact-page__contact-info">
                                <ul className="contact-page__contact-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-chat"></span>
                                        </div>
                                        <div className="text">
                                            <p>Call Anytime</p>
                                            <a href="tel:92 666 888 0000">92 666 888 0000</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-message"></span>
                                        </div>
                                        <div className="text">
                                            <p>Send Email</p>
                                            <a href="mailto:needhelp@company.com">needhelp@company.com</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-address"></span>
                                        </div>
                                        <div className="text">
                                            <p>Visit Office</p>
                                            <h5>80 broklyn golden street</h5>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-page__form">
                            <form action="assets/inc/sendemail.php" className="contact-page__main-form contact-form-validated">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="contact-page__input-box">
                                            <input type="text" placeholder="Your name" name="name"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="contact-page__input-box">
                                            <input type="email" placeholder="Email address" name="email"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="contact-page__input-box">
                                            <input type="text" placeholder="Subject" name="subject"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="contact-page__input-box">
                                            <input type="text" placeholder="Phone Number" name="phone"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="contact-page__input-box">
                                            <textarea name="message" placeholder="Write message"></textarea>
                                        </div>
                                        <button type="submit" className="thm-btn contact-page__btn"><i className="fas fa-arrow-circle-right"></i>Send a Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="contact-page-google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd" className="contact-page-google-map__one" ></iframe>
        </section>
        <section className="become-volunteer">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="become-volunteer__inner">
                            <div className="become-volunteer__left">
                                <h2>Join your hand with us for <br/> a better life and future</h2>
                                <div className="become-volunteer__big-text">
                                    <h2>Become a Volunteers</h2>
                                </div>
                            </div>
                            <div className="become-volunteer__btn-box">
                                <a href="#" className="become-volunteer__btn thm-btn"><i className="fas fa-arrow-circle-right"></i>Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <a href="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></a>
  </div>
  )
};

export default Home;
