import type { NextPage } from "next"; 
import Image from 'next/image'
import CampaignPageHeader from "../../components/campaignpageComponents/CampaignPageHeader";
import {CampaignIndexData} from '../../_data/CampaignIndexData'


const Campaign: NextPage = () => {
    const data = CampaignIndexData
  return (
  <div>
         <div className="preloader">
        <Image className="preloader__image"  src="/assets/images/loader.png" width="500"  height="500"   alt="" /> 
         </div>
    <div className="page-wrapper">
        <div className="stricky-header stricked-menu main-menu">
            <div className="sticky-header__content"></div>
        </div>
        <section className="page-header">
           <CampaignPageHeader/>
        </section>
        <section className="causes-one causes-page">
            <div className="container">
                <div className="row">
                        {data.map((data) => {
                            return(
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="causes-one__single">
                                <div className="causes-one__img">
                                    <div className="causes-one__img-box">
                                        <Image src={data.causesImage} width="500"  height="500" alt=""/>
                                        <a href="causes-details.html">
                                            <i className="fa fa-plus"></i>
                                        </a>
                                    </div>
                                    <div className="causes-one__category">
                                        <span>{data.causesCategory}</span>
                                    </div>
                                </div>
                                <div className="causes-one__content">
                                    <h3 className="causes-one__title">
                                        <a href="causes-details.html">{data.causesDetails}</a>
                                    </h3>
                                    <p className="causes-one__text">{data.causesText}</p>
                                </div>
                                <div className="causes-one__progress">
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="36%">
                                            <div className="count-text">{data.causesCount}</div>
                                        </div>
                                    </div>
                                    <div className="causes-one__goals">
                                        {data.causesGoals.map((goal) => {
                                            return(
                                                <>
                                                <p><span>{goal.causesGoalsNumber1}</span> {goal.causesGoalsText1}</p>
                                                <p><span>{goal.causesGoalsNumber2}</span> {goal.causesGoalsText2}</p>
                                                </>
                                            )
                                        })}
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
    <a href="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></a>
  </div>
  )
};
export default Campaign;
