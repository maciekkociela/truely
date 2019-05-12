import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import hiring from "../../images/png/hiring.png"
import Analytics from "../../images/svg-icons/analysis.svg"


const Summary = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="blocks">
      <div style={{textAlign: "center", marginBottom: 50}}>
        <h1 className="heading">Quick summary</h1>
      </div>
      
        <div className="row">
        
            <div className="column">
            
                <h3>how do I calculate the ROI?</h3>
                <p> our dashboard does that automatically. you can also run an A/B test.</p>
                <div>
                </div>
            </div>
            <div className="column">
                <h3>do I have to know how to code?</h3>
                <p>Our widget is extramly easy to use. No coding needed.
</p>
            </div>
            <div className="column">
                <h3>what is social proof marketing?</h3>
                <p>nobody cares what you say about your business. social proof marketing is when customers sell for you.

                </p>
            </div>
        </div>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
      .blocks {
          padding: 100px 0;
      }
        .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        .column {
            flex: 100%;
            max-width: 100%;
            margin: 30px;

            h3 {
                color: #31bfbd;
                margin-bottom: 21px;
                font-size: 16px;
                font-weight: 600;
                text-transform: none;
                letter-spacing: 0.12em;
            }

            p {
                color: #777;
                font-size: 14px;
                font-weight: 300;
                line-height: 1.86;
            }  
        }
        @from-width tablet {
            .column {
              flex: calc(50% - 60px);
              width: calc(50% - 60px);
            }
        }

        @from-width desktop {
            .row {
                max-width: 1200px;
                margin-left: auto;
                margin-right: auto;
            }
            .column {
              flex: calc(25% - 60px);
              width: calc(25% - 60px);
            }
        }

        .flex {
            display: flex;

            .flexColumn {
              width: 50%;
              @media (max-width: 800px) {
                width: 100%;
              }
            }
          }
      `}</style>
    </React.Fragment>
  );
};

Summary.propTypes = {
};

export default Summary;
