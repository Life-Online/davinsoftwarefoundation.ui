import React from 'react'

const JoinOne = () => {
  return (
    <div>
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
    </div>
  )
}

export default JoinOne
