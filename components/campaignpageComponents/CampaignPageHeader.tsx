

import React from 'react';
import Image from "next/image";


const CampaignPageHeader = () => {
  return (
      <div>
           <div className="page-header__bg" style={{backgroundImage: "url(assets/images/backgrounds/page-header-bg-1-1.jpg)"}}></div>
            <div className="container">
                <h2>Causes</h2>
                <ul className="thm-breadcrumb list-unstyled">
                    <li><a href="index.html">Home</a></li>
                    <li className="color-thm-gray">/</li>
                    <li><span>Causes</span></li>
                </ul>
            </div>
      </div>
  )
}
export default CampaignPageHeader;