import React from 'react';

import Layout from '../components/Layout';

const DivorcePrep = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Divorce Preparations</h2>

        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Financial Concerns</h3>
          <p>There are financial preparations anyone facing divorce should begin - especially if the other spouse has managed most of the money and finances. Below is a checklist of items generally needed by a divorce attorney to get started. <u>Note that this is a basic list.</u> The more assets or liabilities you have, the more that is needed. </p>
          <ul>
            <li>Federal and State Income Tax Returns </li>
            <li>Proof income: W-2’s, 1099’s, and pay stubs (year-end and current) </li>
            <li>Social Security Statements (you can order online at: <a href="https://www.ssa.gov/myaccount/">https://www.ssa.gov/myaccount/</a>)</li>
            <li>Bank and Credit Card Statements</li>
            <li>Pension/401(k)/Investment Account Statements</li>
            <li>Stock certificates and info on options, bonds, mutual funds, annuities or any other financial asset</li>
            <li>Real estate documents including, recent mortgage/home equity line statements, deeds, lien information, closing statements, appraisals or market studies</li>
            <li>Car, boat, motorcycle titles and any loan information</li>
            <li>Life insurance policies</li>
            <li>Information on any other debt or asset held by either party even if you think it is not marital property or only in the name of the other party</li>
            <li>If one spouse may seek alimony (maintenance), then a copy of resumes for both parties or an education and job history for both</li>
          </ul>

          <h3 className="major">How far back do you go?</h3>
          <p>  That depends on the circumstances. Current and most recent information is always needed. Past information for 2-3 years is generally requested in contested cases. Whenever possible, you should get specific information on assets and debt balances close to the date of marriage; information on large gifts or inheritances; information on contributions to or from non-marital assets; and finally information on balances around the date of any separation.</p>

        </div>
      </div>
    </section>
  </Layout>
);

export default DivorcePrep;
