import React from 'react';
import Image from "next/image";
import styles from './teamOne.module.scss'
import { TeamOneSection } from '../../_data/TeamOneSection';
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/Bs';

const TeamOne = () => {
  const data = TeamOneSection
  return (
    <section className={`team-one ${styles.teamone}`}>
       <div className="container">
              <div className={`section-title text-center ${styles.sectiontitle}`}>
                <span className={`section-title__tagline ${styles.sectiontitletagline}`}>
                  Professional Volunteers
                </span>
                <h2 className={`section-title__title ${styles.sectiontitletitle}`}>
                  Meet the best team behind <br /> our success story
                </h2>
              </div>
              <div className="row">
                {data.map((data, id) => (
                    <div className="col-xl-4 col-lg-4">
                    <div className={`team-one__single ${styles.teamonesingle}`}>
                      <div className={`team-one__img-box ${styles.teamoneimgbox}`}>
                        <div className={`team-one__img ${styles.teamoneimg}`}>
                          <Image
                            src={data.img}
                            width="500"
                            height="500"
                            alt=""
                          />
                        </div>
                        <div className={`team-one__member-name ${styles.teamonemembername}`}>
                          <h2>{data.name}</h2>
                        </div>
                      </div>
                      <div className={`team-one__content ${styles.teamonecontent}`}>
                        <h4 className={`team-one__member-title ${styles.teamonemembertitle}`}>{data.title}</h4>
                        <p className={`team-one__text-box ${styles.teamonetextbox}`}>
                          {data.text}
                        </p>
                      </div>
                      <div className={`team-one__social ${styles.teamonesocial}`}>
                        <a href="#">
                          <BsFacebook/>
                        </a>
                        <a href="#">
                         <BsTwitter/>
                        </a>
                        <a href="#">
                         <BsInstagram/>
                        </a>
                        <a href="#">
                        <BsLinkedin/>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
    </section>
  )
}

export default TeamOne
