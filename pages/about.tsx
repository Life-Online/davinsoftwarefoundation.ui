import type { NextPage } from "next";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <div>
      {/* <div className="page-wrapper">
        <div className="stricky-header stricked-menu main-menu">
          <section className="about-page">
            <div className="container">
              <div className="row">
                <div className="col-xl-6">
                  <div className="about-page__left">
                    <div className="about-page__img">
                      <Image
                        src="/assets/images/resources/about-page-img-1.jpg"
                        width="500"
                        height="500"
                        alt=""
                      />
                      <div className="about-page__trusted">
                        <h3>
                          We’re trusted by <span>9,8750</span> donors
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="about-page__right">
                    <div className="section-title text-left">
                      <span className="section-title__tagline">
                        Our Inroductions
                      </span>
                      <h2 className="section-title__title">
                        We believe that we can save more lifes
                      </h2>
                    </div>
                    <p className="about-page__right-text">
                      We are trusted by our clients and have a reputation for
                      the best services in the field. Lorem ipsum is simply free
                      text dolor sit amett consectetur adipiscing elit. It is a
                      long established fact that a reader will be distracted by
                      the readable content of a page.
                    </p>
                    <h3 className="about-page__right-title">
                      Halpes is the largest global crowdfunding community in the
                      world
                    </h3>
                    <div className="about-five__progress-wrap">
                      <div className="about-five__progress">
                        <div className="about-five__progress-box">
                          <div
                            className="circle-progress"
                            data-options='{ "value": 0.9,"thickness": 3,"emptyFill": "#e5eeec","lineCap": "square", "size": 138, "fill": { "color": "#15c8a0" } }'
                          ></div>
                          <span>90%</span>
                        </div>
                        <div className="about-five__progress-content">
                          <h3>Successful causes</h3>
                        </div>
                      </div>
                      <div className="about-five__progress">
                        <div className="about-five__progress-box">
                          <div
                            className="circle-progress"
                            data-options='{ "value": 0.5,"thickness": 3,"emptyFill": "#e5eeec","lineCap": "square", "size": 138, "fill": { "color": "#15c8a0" } }'
                          ></div>
                          <span>50%</span>
                        </div>
                        <div className="about-five__progress-content">
                          <h3>Amazing donors</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="testimonial-one about-page-testimonial">
            <div
              className="testimonial-one-bg"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/testimonial-1-bg.jpg)",
              }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-xl-4">
                  <div className="testimonial-one__left">
                    <div className="section-title text-left">
                      <span className="section-title__tagline">
                        Our Testimonials
                      </span>
                      <h2 className="section-title__title">
                        What they’re talking about charity
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="testimonial-one__right">
                    <div className="testimonial-one__carousel owl-theme owl-carousel">
                      <div className="testimonial-one__single">
                        <p className="testimonial-one__text">
                          Lorem ipsum is simply free text dolor sit amet,
                          consectetur notted adipisicing elit sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__client-img">
                            <Image
                              src="/assets/images/testimonial/testimonial-1-img-1.png"
                              width="500"
                              height="500"
                              alt=""
                            />
                            <div className="testimonial-one__quote"></div>
                          </div>
                          <div className="testimonial-one__client-name">
                            <h3>Kevin Martin</h3>
                            <p>Volunteer</p>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-one__single">
                        <p className="testimonial-one__text">
                          Lorem ipsum is simply free text dolor sit amet,
                          consectetur notted adipisicing elit sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__client-img">
                            <Image
                              src="/assets/images/testimonial/testimonial-1-img-2.png"
                              width="500"
                              height="500"
                              alt=""
                            />
                            <div className="testimonial-one__quote"></div>
                          </div>
                          <div className="testimonial-one__client-name">
                            <h3>Jessica Brown</h3>
                            <p>Volunteer</p>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-one__single">
                        <p className="testimonial-one__text">
                          Lorem ipsum is simply free text dolor sit amet,
                          consectetur notted adipisicing elit sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__client-img">
                            <Image
                              src="/assets/images/testimonial/testimonial-1-img-1.png"
                              width="500"
                              height="500"
                              alt=""
                            />
                            <div className="testimonial-one__quote"></div>
                          </div>
                          <div className="testimonial-one__client-name">
                            <h3>Jessica Brown</h3>
                            <p>Volunteer</p>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-one__single">
                        <p className="testimonial-one__text">
                          Lorem ipsum is simply free text dolor sit amet,
                          consectetur notted adipisicing elit sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__client-img">
                            <Image
                              src="/assets/images/testimonial/testimonial-1-img-2.png"
                              width="500"
                              height="500"
                              alt=""
                            />
                            <div className="testimonial-one__quote"></div>
                          </div>
                          <div className="testimonial-one__client-name">
                            <h3>Kevin Martin</h3>
                            <p>Volunteer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="join-one join-one__about">
            <div
              className="join-one-bg jarallax"
              data-jarallax
              data-speed="0.2"
              data-imgPosition="50% 0%"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/join-one-bg.jpg)",
              }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="join-one__inner">
                    <h2 className="join-one__title">
                      Join the community to give <br /> education for children
                    </h2>
                    <a href="#" className="join-one__btn thm-btn">
                      <i className="fas fa-arrow-circle-right"></i>Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="counters-one about-page-counter">
            <div className="container">
              <ul className="counters-one__box list-unstyled">
                <li className="counter-one__single">
                  <h3 className="odometer" data-count="870">
                    00
                  </h3>
                  <span className="counter-one__letter">K</span>
                  <p className="counter-one__text">Total Donations</p>
                </li>
                <li className="counter-one__single">
                  <h3 className="odometer" data-count="480">
                    00
                  </h3>
                  <p className="counter-one__text">Campaigns Closed</p>
                </li>
                <li className="counter-one__single">
                  <h3 className="odometer" data-count="977">
                    00
                  </h3>
                  <span className="counter-one__letter">K</span>
                  <p className="counter-one__text">Happy People</p>
                </li>
                <li className="counter-one__single">
                  <h3 className="odometer" data-count="63">
                    00
                  </h3>
                  <span className="counter-one__letter">+</span>
                  <p className="counter-one__text">Our Volunteers</p>
                </li>
              </ul>
            </div>
          </section>
          <section className="team-one">
            <div className="container">
              <div className="section-title text-center">
                <span className="section-title__tagline">
                  Professional Volunteers
                </span>
                <h2 className="section-title__title">
                  Meet the best team behind <br /> our success story
                </h2>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-4">
                  <div className="team-one__single">
                    <div className="team-one__img-box">
                      <div className="team-one__img">
                        <Image
                          src="/assets/images/team/team-one-img-1.jpg"
                          width="500"
                          height="500"
                          alt=""
                        />
                      </div>
                      <div className="team-one__member-name">
                        <h2>Janne</h2>
                      </div>
                    </div>
                    <div className="team-one__content">
                      <h4 className="team-one__member-title">Volunteer</h4>
                      <p className="team-one__text-box">
                        There are many of lorem ipsum available but the have in
                        some form.
                      </p>
                    </div>
                    <div className="team-one__social">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-facebook-square"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-dribbble"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                  <div className="team-one__single">
                    <div className="team-one__img-box">
                      <div className="team-one__img">
                        <Image
                          src="/assets/images/team/team-one-img-2.jpg"
                          width="500"
                          height="500"
                          alt=""
                        />
                      </div>
                      <div className="team-one__member-name">
                        <h2>David</h2>
                      </div>
                    </div>
                    <div className="team-one__content">
                      <h4 className="team-one__member-title">Volunteer</h4>
                      <p className="team-one__text-box">
                        There are many of lorem ipsum available but the have in
                        some form.
                      </p>
                    </div>
                    <div className="team-one__social">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-facebook-square"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-dribbble"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                  <div className="team-one__single">
                    <div className="team-one__img-box">
                      <div className="team-one__img">
                        <Image
                          src="/assets/images/team/team-one-img-3.jpg"
                          width="500"
                          height="500"
                          alt=""
                        />
                      </div>
                      <div className="team-one__member-name">
                        <h2>Sarah</h2>
                      </div>
                    </div>
                    <div className="team-one__content">
                      <h4 className="team-one__member-title">Volunteer</h4>
                      <p className="team-one__text-box">
                        There are many of lorem ipsum available but the have in
                        some form.
                      </p>
                    </div>
                    <div className="team-one__social">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-facebook-square"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-dribbble"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div> */}
    </div>
  );
};

export default About;
