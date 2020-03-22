import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';

import tl190218 from '../assets/images/tl190218.jpg';
import tl190119 from '../assets/images/tl190119.jpg';
import tl180801 from '../assets/images/tl180801.jpg';
import tl180421 from '../assets/images/tl180421.jpg';
import tl180315 from '../assets/images/tl180315.jpg';
import tl180306 from '../assets/images/tl180306.jpg';
import tl180209 from '../assets/images/tl180209.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-balance-scale"></span>
        </div>
        <h2>{config.heading}</h2>
        <div className="subHeading" style={{display: "flex", justifyContent: "space-around"}}>
          <p>{config.subHeading}</p>
          <a href="tel:815-954-8175" className="button">(815) 954-8175</a>
        </div>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
            <img className="image" src={pic1} alt="" />
          <div className="content">
            <h2 className="major">Help Where It Counts</h2>
            <p>
              <strong>Andreano & Lyons</strong> is a Will County law firm with offices in <strong>Downtown Joliet, Illinois</strong> focused on divorce and  <strong>family law</strong>. We have continuously served clients for over <strong>35 years</strong> and stand ready to represent you in the most difficult of family law cases.
            </p>
            <p>
              The  attorneys at Andreano and Lyons are experienced and dedicated professionals seeking the best resolution of our client's legal issues. <strong>We are focused on family law and centered in Will County</strong> so our clients gain the advantage of attorneys rooted in and familiar with the local court system.
            </p>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
            <img className="image" src={pic2} alt="" />
          <div className="content">
            <h2 className="major">Get In Touch</h2>
            <p>
              Phone consultations are provided at <strong><a href="tel:815-954-8175">(815) 954-8175</a></strong> with no cost and without an appointment during office hours. <strong>Attorneys are generally available in the afternoon.</strong> Office consultations include weekend and evening appointments but must be scheduled in advance. You can schedule one by <strong>calling our office or even set it up online.</strong> By speaking directly with one of our attorneys, your questions will get answered quickly and a quote or budget for legal services can be outlined.
            </p>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
            <img className="image" src={pic3} alt="" />
          <div className="content">
            <h2 className="major">Areas of Family Law Practice</h2>
              <ul style={{ textAlign:"left" }}>
                <li>Contested and Uncontested Divorces</li>
                <li>Allocating Parenting Decisions and Time (formerly Joint Parenting)</li>
                <li>Custody and Visitation Disputes</li>
                <li>Spousal Maintenance / Alimony Issues</li>
                <li>Property Division – Marital vs. Non-marital</li>
                <li>Shared Parenting Time - Joint Parenting vs. Sole Custody</li>
                <li>Child Support Collection / Reduction / Termination</li>
                <li>Pension, 401(k) and Other Retirement Asset Division </li>
                <li>Post-divorce Motions - Enforcement of Judgments or Changes</li>
                <li>Child Removal and Relocation Out of State</li>
                <li>Grandparent Visitation and Custody Rights</li>
                <li>Paternity Cases – Rights & Obligations of Unmarried Parents</li>
                <li>Prenuptial Agreements</li>
              </ul>
            <a href="/#" className="special">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Courthouse Construction Time Lapse</h2>
          <p>
            A pivotal project in the rejuvenation of downtown Joliet, this new Justice Center replaces an existing courthouse with a modern and secure facility that engages the public with a welcoming landscaped plaza. The new courthouse conveys the notion of “transparency in justice” through the generous use of glass in all public areas.
          </p>
          <p>
            The new facility accommodates 38 courtrooms serving criminal, civil, family, traffic, and special proceedings caseloads. The ten-story tower is composed of four court floor plates complete with judges’ chambers and jury deliberation suites.
          </p>
          <section className="features">
            <article>
              <img className="image" src="https://res.cloudinary.com/dpcbzfiye/image/upload/w_1620,c_fill,dpr_auto,f_auto,q_auto,fl_progressive/v1533740524/u607ut79iz8wxj0lgsol.jpg" alt="Will County Courthouse" />
              <h3 className="major">Will County Courthouse</h3>
              <p>
                Expected Completion: September 2020
              </p>
              <a href="https://www.aia.org/showcases/208431-will-county-courthouse" className="special">
                View Concept Art
              </a>
            </article>
            <article>
              <img className="image" src={tl190218} alt="" />
              <h3 className="major">{config.youTubeVideos[0].name}</h3>
              <p>{config.youTubeVideos[0].description}</p>
              <a target="_blank" rel="noopener noreferrer"   href={config.youTubeVideos[0].url} className="special">
                Watch Video
              </a>
            </article>
            <article>
              <img className="image" src={tl190119} alt="" />
              <h3 className="major">{config.youTubeVideos[1].name}</h3>
              <p>{config.youTubeVideos[1].description}</p>
              <a target="_blank" rel="noopener noreferrer"  href={config.youTubeVideos[1].url} className="special">
                Watch Video
              </a>
            </article>
            <article>
              <img className="image" src={tl180801} alt="" />
              <h3 className="major">{config.youTubeVideos[2].name}</h3>
              <p>{config.youTubeVideos[2].description}</p>
              <a target="_blank" rel="noopener noreferrer"  href={config.youTubeVideos[2].url} className="special">
                Watch Video
              </a>
            </article>
            <article>
              <img className="image" src={tl180421} alt="" />
              <h3 className="major">{config.youTubeVideos[3].name}</h3>
              <p>{config.youTubeVideos[3].description}</p>
              <a target="_blank" rel="noopener noreferrer"  href={config.youTubeVideos[3].url} className="special">
                Watch Video
              </a>
            </article>
            <article>
              <img className="image" src={tl180315} alt="" />
              <h3 className="major">{config.youTubeVideos[4].name}</h3>
              <p>{config.youTubeVideos[4].description}</p>
              <a target="_blank" rel="noopener noreferrer"  href={config.youTubeVideos[4].url} className="special">
                Watch Video
              </a>
            </article>
            <article>
              <img className="image" src={tl180306} alt="" />
              <h3 className="major">{config.youTubeVideos[5].name}</h3>
              <p>{config.youTubeVideos[5].description}</p>
              <a target="_blank" rel="noopener noreferrer"  href={config.youTubeVideos[5].url} className="special">
                Watch Video
              </a>
            </article>
            <article>
              <img className="image" src={tl180209} alt="" />
              <h3 className="major">{config.youTubeVideos[6].name}</h3>
              <p>{config.youTubeVideos[6].description}</p>
              <a target="_blank" rel="noopener noreferrer"  href={config.youTubeVideos[6].url} className="special">
                Watch Video
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
