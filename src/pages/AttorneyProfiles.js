import React from 'react';

import Layout from '../components/Layout';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';

const AttorneyProfiles = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Attorney Profiles</h2>
        </div>
        <div>
        </div>

      </header>

      <div className="wrapper">
        <div className="inner">

        <p><span className="image left"><img src={pic1} alt="" /></span><h3>Anthony P. Andreano</h3><h4>Family and Divorce Law</h4>Anthony Andreano was born and raised in Will County. After graduating from Joliet West in 1988, he attended University of Loyola in Chicago and obtained a degree in history. He then followed his mother's path and attended Northern Illinois College of Law. His trial practice is limited to family law cases in Will County. He has over 20 years of experience as a divorce attorney handling custody, visitation, property division, child support, spousal maintenance civil unions, paternity other family law case.</p>
        <p>Anthony is a current member of the Illinois Supreme Court's Access to Justice Commission, Divorce Subcommittee. He is also a member of the Illinois State Bar and Will County Bar Associations. He is a former board member at Guardian Angel Community Services, an agency serving abuse victims and foster children and a past president of the Troy Consolidated School District 30-C School Board. </p>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div>
            Education:
            <ul>
              <li>Loyola University of Chicago - BA 1992</li>
              <li>​Northern Illinois College of Law - JD 1996</li>
            </ul>
          </div>
          <div>
            <a href="tel:815-954-8175" className="button" style={{marginTop: "1.5em"}}>(815) 954-8175</a>
          </div>
        </div>


        <p><span className="image right"><img src={pic2} alt="" /></span><h3>​Samuel J. Andreano</h3><h4>Criminal and Traffic Law</h4>Samuel Andreano is the father of Frank and Anthony and the senior partner at the firm. He has over 40 years of courtroom experience and leads our criminal law practice. Sam handles Felonies, Misdemeanors, Traffic and Driving Under the Influence (DUI) cases. He is a highly experienced litigator who has helped hundreds of clients facing very serious criminal charges. His broad criminal law experience includes serving as Will County's Chief Public Defender for over 20 years.</p>



        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div>
            Education:
            <ul>
              <li>Loras College - BA in 1960</li>
              <li>The John Marshall Law School - JD in 1966</li>
            </ul>
          </div>
          <div>
            <a href="tel:815-727-1937" className="button" style={{marginTop: "1.5em"}}>(815) 727-1937</a>
          </div>
        </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AttorneyProfiles;
