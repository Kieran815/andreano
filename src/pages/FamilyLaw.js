import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/pic04.jpg';

const FamilyLaw = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Family Law</h2>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Massive Changes in Illinois Family Law Over the Last Several Years </h3>
          <p><strong>In 2016, there was the first major revision to Illinois Divorce Laws that:</strong></p>
          <ul>
            <li>eliminate all but one of the traditional grounds for divorce</li>
            <li>revamp custody laws and terminology</li>
            <li>adopt spousal maintenance guidelines based on gross incomes</li>
          </ul>

          <p><strong>In 2017, the child support laws were completely overhauled.</strong> Illinois now uses an "income share" approach where both parent's income are factored into the calculation.</p>
          <p><strong>For 2019, Illinois has implemented modified maintenance (alimony) guidelines.</strong> These are meant to address the been the new tax laws passed by Congress in 2018.  Essentially the new alimony statute uses net income (not on gross income) in making calculations.  This will mean most divorcing parties will need to have proper tax calculations made by a knowledgeable attorney or accountant.</p>
          <p>With all these changes, clients must carefully select a law firm that is prepared to navigate the best path forward. <strong>At Andreano & Lyons, we remain a litigation law firm - ready to fight for our client's rights along the way.</strong></p>
          <p>​However, we have also developed our practice to be <strong>flexible to meet each client's needs</strong>. This approach recognizes some options to traditional litigation, such as:​</p>
          <ul>
            <li><strong>Settlement</strong> reached between the parties,</li>
            <li>​<strong>Mediation</strong> with an independent mediator selected by the parties</li>
            <li><strong>Collaborative</strong> divorce process</li>
            <li>​<strong>Pretrial</strong> Conferences with the judge</li>
          </ul>

          <section>
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">2016 Family Law Video</h3>
              <p>
                Connect to Tony's Family Law Video for 2016 updates and some other text to fill up the line so I can see how it renders on a wider screen vs a smaller screen.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default FamilyLaw;
