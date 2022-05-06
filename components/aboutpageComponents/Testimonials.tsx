import React from 'react'
import Image from "next/image";
import {AboutPageComponentTestimonialData} from '../../_data/AboutPageComponentTestimonialData'


const Testimonials = () => {
  const data = AboutPageComponentTestimonialData
  return (
    <div>
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
                {data.map((data) => {
                  return(
                    <div className="col-xl-8">
                    <div className="testimonial-one__right">
                      <div className="testimonial-one__carousel owl-theme owl-carousel">
                        <div className="testimonial-one__single">
                          <p className="testimonial-one__text">
                          {data.testimonialText}
                          </p>
                          <div className="testimonial-one__client-info">
                            <div className="testimonial-one__client-img">
                              <Image
                                src={data.testimonialClientImage}
                                width="500"
                                height="500"
                                alt=""
                              />
                              <div className="testimonial-one__quote"></div>
                            </div>
                            <div className="testimonial-one__client-name">
                              <h3>{data.testimonialClientName}</h3>
                              <p>{data.testimonialClientRole}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                })}
              </div>
            </div>
          </section>
    </div>
  )
}

export default Testimonials
