import type { NextPage } from "next";
import CountersOne from "../components/aboutpageComponents/CountersOne";
import JoinOne from "../components/aboutpageComponents/JoinOne";
import OurIntroductions from "../components/aboutpageComponents/OurIntroductions";
import TeamOne from "../components/aboutpageComponents/TeamOne";
import Testimonials from "../components/aboutpageComponents/Testimonials";

const About: NextPage = () => {
  return (
    <div>
      <div className="page-wrapper">
        <div className="stricky-header stricked-menu main-menu">
          <section className="about-page">
          <OurIntroductions/>
          </section>
          <section className="testimonial-one about-page-testimonial">
           <Testimonials/>
          </section>
          <section className="join-one join-one__about">
           <JoinOne/>
          </section>
          <section className="counters-one about-page-counter">
           <CountersOne/>
          </section>
          <section className="team-one">
            <TeamOne/>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
