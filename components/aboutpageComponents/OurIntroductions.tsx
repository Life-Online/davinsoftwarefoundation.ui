import React from 'react';
import Image from "next/image";


const OurIntroductions = () => {
  return (
    <div>
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
                        Our Introductions
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
    </div>
  );
}

export default OurIntroductions;
