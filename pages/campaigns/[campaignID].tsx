import type { NextPage } from "next"; 
import Image from 'next/image'
import CampaignIdCauses from "../../components/campaignIDComponents/CampaignIdCauses";
import CampaignIdCausesDetails from "../../components/campaignIDComponents/CampaignIdCausesDetails";
import CampaignIdHeader from "../../components/campaignIDComponents/CampaignIdHeader";
import CampaignIdMobileNav from "../../components/campaignIDComponents/CampaignIdMobileNav";
import CampaignIdSearchPopup from "../../components/campaignIDComponents/CampaignIdSearchPopup";


const CampaignDetail: NextPage = () => {
  return (
  <div>

    <div className="preloader">
        <Image className="preloader__image"  src="/assets/images/loader.png" width="500" height="500"  alt="" />
    </div>
    <div className="page-wrapper">
      <div>
          <CampaignIdHeader/>
      </div>
        <div className="stricky-header stricked-menu main-menu">
            <div className="sticky-header__content"></div>
        </div>
      <div>
          <CampaignIdCauses/>
      </div>
       <div>
           <CampaignIdCausesDetails/>
       </div>
    </div>
   <div>
       <CampaignIdMobileNav/>
   </div>
   <div>
       <CampaignIdSearchPopup/>
   </div>
    <a href="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></a>
  </div>
  )
};

export default CampaignDetail;
