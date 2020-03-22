import React from 'react';
import Layout from '../components/Layout';
import tl190218 from '../assets/images/tl190218.jpg';
import tl190119 from '../assets/images/tl190119.jpg';
import tl180801 from '../assets/images/tl180801.jpg';
import tl180421 from '../assets/images/tl180421.jpg';
import tl180315 from '../assets/images/tl180315.jpg';
import tl180306 from '../assets/images/tl180306.jpg';
import tl180209 from '../assets/images/tl180209.jpg';
import config from '../../config';

const CourtHouse = () => (
  <Layout fullMenu>
  <div>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Courthouse Construction Timelapse</h2>
        </div>
      </header>
      <section id="four" className="wrapper alt style1">
        <div className="inner">
        <p>A pivotal project in the rejuvenation of downtown Joliet, this new Justice Center replaces an existing courthouse with a modern and secure facility that engages the public with a welcoming landscaped plaza. The new courthouse conveys the notion of “transparency in justice” through the generous use of glass in all public areas.</p>
        <p>The new facility accommodates 38 courtrooms serving criminal, civil, family, traffic, and special proceedings caseloads. The ten-story tower is composed of four court floor plates complete with judges’ chambers and jury deliberation suites.</p>
          <section className="features">
            <article>
              <img className="image" src="https://res.cloudinary.com/dpcbzfiye/image/upload/w_1620,c_fill,dpr_auto,f_auto,q_auto,fl_progressive/v1533740524/u607ut79iz8wxj0lgsol.jpg" alt="Will County Courthouse" />
              <h3 className="major">Will County Courthouse</h3>
              <p>
                Expected Completion: September 2020
              </p>
              <a target="_blank" rel="noopener noreferrer" href="https://www.aia.org/showcases/208431-will-county-courthouse" className="special">
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
              <a  target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCD6SmhAumDFaXMFBHf8oDNg" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </div>
  </Layout>
);

export default CourtHouse;
