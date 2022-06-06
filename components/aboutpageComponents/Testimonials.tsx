import React from 'react'
import Image from "next/image";
import {AboutPageComponentTestimonialData} from '../../_data/AboutPageComponentTestimonialData'
import styles from './testimonials.module.scss'

const Testimonials = () => {
  const data = AboutPageComponentTestimonialData
  return (
    <div>
        <section className={`testimonial-one about-page-testimonial ${styles.testimonialone} ${styles.aboutpagetestimonial}`}>
            <div
              className={`testimonial-one-bg ${styles.testimonialonebg}`}
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/testimonial-1-bg.jpg)"
              }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-xl-4">
                  <div className={`testimonial-one__left ${styles.testimonialoneleft}`}>
                    <div className={`section-title text-left ${styles.sectiontitle}`}>
                      <span className={`section-title__tagline ${styles.sectiontitletagline}`}>
                        Our Testimonials
                      </span>
                      <h2 className={`section-title__title ${styles.sectiontitletitle}`}>
                        What they’re talking about charity
                      </h2>
                    </div>
                  </div>
                </div>
                {data.map((data) => {
                  return(
                    <div className="col-xl-8">
                    <div className={`testimonial-one__right  ${styles.testimonialoneright}`}>
                      <div className={`testimonial-one__carousel owl-theme owl-carousel ${styles.testimonialonecarousel} ${styles.owltheme} ${styles.owlcarousel}`}>
                        <div className={`testimonial-one__single ${styles.testimonialonesingle}`}>
                          <p className={`testimonial-one__text ${styles.testimonialonetext} `}>
                          {data.testimonialText}
                          </p>
                          <div className={`testimonial-one__client-info ${styles.testimonialoneclientinfo}`}>
                            <div className={`testimonial-one__client-img ${styles.testimonialoneclientimg}`}>
                              <Image
                                src={data.testimonialClientImage}
                                width="50"
                                height="50"
                                alt=""
                              />
                              <div className={`testimonial-one__quote ${styles.testimonialonequote}`}></div>
                            </div>
                            <div className={`testimonial-one__client-name ${styles.testimonialoneclientname}`}>
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
