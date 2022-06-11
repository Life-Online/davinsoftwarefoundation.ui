import React from 'react'
import styles from './joinOne.module.scss'

const JoinOne = () => {
  return (
    <div className={`join-one join-one__about ${styles.joinone} ${styles.joinoineabout}`}>
       <div
              className={`join-one-bg jarallax ${styles.joinonebg} ${styles.jarallax}`}
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
                  <div className={`join-one__inner ${styles.joinoneinner}`}>
                    <h2 className={`join-one__title ${styles.joinonetitle}`}>
                      Join the community to give <br /> education for children
                    </h2>
                    <a href="#" className={`join-one__btn thm-btn ${styles.joinonebtn} ${styles.thmbtn}`}>
                      <i className="fa fa-arrow-circle-right"></i>Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default JoinOne
