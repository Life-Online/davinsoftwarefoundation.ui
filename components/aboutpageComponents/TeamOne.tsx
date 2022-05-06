import React from 'react';
import Image from "next/image";

const TeamOne = () => {
  return (
    <div>
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
    </div>
  )
}

export default TeamOne
