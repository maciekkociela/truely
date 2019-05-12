import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import hiring from "../../images/png/hiring.png"
import Analytics from "../../images/svg-icons/analysis.svg"


const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="blocks">
      <div style={{textAlign: "center", marginBottom: 50}}>
        <h1 className="heading">How it works</h1>
      </div>
      
        <div className="row">
        
            <div className="column">
            <svg viewBox="0 0 60 60" width="48px" height="48px"><g><g>
            <path d="M53.707,58.293L51,55.586v-35l-0.497-0.497L46,15.586V0H6v52h5v5h38.586l2.707,2.707C52.488,59.902,52.744,60,53,60   s0.512-0.098,0.707-0.293C54.098,59.316,54.098,58.684,53.707,58.293z M47.586,20H36V8.414l10,10L47.586,20z M8,50V2h36v11.586   l-8.089-8.089L35.414,5H11v45H8z M13,55v-3V7h21v15h15v31.586l-7.514-7.514c1.74-2.06,2.795-4.717,2.795-7.619   c0-6.522-5.306-11.828-11.828-11.828s-11.828,5.306-11.828,11.828s5.306,11.828,11.828,11.828c2.902,0,5.559-1.055,7.619-2.795   L47.586,55H13z M32.453,48.281c-5.419,0-9.828-4.409-9.828-9.828s4.409-9.828,9.828-9.828s9.828,4.409,9.828,9.828   S37.872,48.281,32.453,48.281z" data-original="#000000" class="active-path" data-old_color="#31bfbd" fill="#31bfbd"/>
                <path d="M26.625,36h6c0.553,0,1-0.447,1-1s-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1S26.072,36,26.625,36z" data-original="#000000" class="active-path" data-old_color="#31bfbd" fill="#31bfbd"/>
                <path d="M38.625,40h-12c-0.553,0-1,0.447-1,1s0.447,1,1,1h12c0.553,0,1-0.447,1-1S39.178,40,38.625,40z" data-original="#000000" class="active-path" data-old_color="#31bfbd" fill="#31bfbd"/>
            </g></g> </svg>
                <h3>Search</h3>
                <p>Our AI powered system crawls over 150 websites in order to deliver you and your customers best quality reviews.
</p>
                <div>
                </div>
            </div>
            <div className="column">
                <img style={{width: 48}} src={hiring} />
            
                <h3>Select</h3>
                <p>We love data! Encouraged with all we can offer you we select the trends for every product.
</p>
            </div>
            <div className="column">
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 496 496" width="48px" class=""><g><path d="m256 288h128v-16h-128v-48h16v-16h-16v-32h96v-16h-96v-88c0-39.695312-32.304688-72-72-72-28.855469 0-53.734375 17.105469-65.214844 41.679688l-.378906.082031c-40.796875 8.277343-70.40625 44.550781-70.40625 86.238281 0 10.078125 1.710938 19.945312 5.105469 29.40625-32.488281 18.304688-53.105469 53.082031-53.105469 90.59375 0 34.023438 16.863281 65.902344 44.496094 85.246094-7.871094 12.386718-12.496094 27.027344-12.496094 42.753906 0 44.113281 35.886719 80 80 80 2.40625 0 4.855469-.128906 7.382812-.375 11.976563 24.382812 37.183594 40.375 64.617188 40.375 39.695312 0 72-32.304688 72-72v-88h56v-16h-56zm-16 136c0 30.878906-25.121094 56-56 56-23 0-43.992188-14.464844-52.246094-35.992188l-2.355468-6.144531-6.476563 1.121094c-3.921875.6875-7.496094 1.015625-10.921875 1.015625-35.289062 0-64-28.710938-64-64s28.710938-64 64-64v-16c-22.574219 0-42.953125 9.441406-57.511719 24.527344-23.816406-16.320313-38.488281-43.4375-38.488281-72.527344 0-33.878906 19.886719-65.121094 50.664062-79.59375l7.167969-3.367188-3.296875-7.199218c-4.335937-9.496094-6.535156-19.527344-6.535156-29.839844 0-31.113281 20.175781-58.472656 49.121094-68.207031-.6875 3.976562-1.121094 8.039062-1.121094 12.207031 0 12.65625 3.335938 25.105469 9.640625 36l13.847656-8.007812c-4.894531-8.464844-7.488281-18.152344-7.488281-27.992188 0-30.878906 25.121094-56 56-56s56 25.121094 56 56zm0 0" data-original="#000000" class="active-path" data-old_color="#31bfbd" fill="#31bfbd"/><path d="m184 448v16c22.054688 0 40-17.945312 40-40h-16c0 13.230469-10.769531 24-24 24zm0 0" data-original="#000000" class="active-path" data-old_color="#31bfbd" fill="#31bfbd"/><path d="m80 376h-16c0 26.472656 21.527344 48 48 48v-16c-17.648438 0-32-14.351562-32-32zm0 0" data-original="#000000" class="active-path" data-old_color="#31bfbd" fill="#31bfbd"/><path d="m448 393.472656v-33.472656c0-22.054688-17.945312-40-40-40h-80v16h80c13.230469 0 24 10.769531 24 24v33.472656c-9.289062 3.3125-16 12.113282-16 22.527344 0 13.230469 10.769531 24 24 24s24-10.769531 24-24c0-10.414062-6.710938-19.214844-16-22.527344zm-8 30.527344c-4.40625 0-8-3.59375-8-8s3.59375-8 8-8 8 3.59375 8 8-3.59375 8-8 8zm0 0" data-original="#000000" class="active-path" data-old_color="#31bfbd" fill="#31bfbd"/><path d="m472 256c-10.414062 0-19.214844 6.710938-22.527344 16h-49.472656v16h49.472656c3.3125 9.289062 12.113282 16 22.527344 16 13.230469 0 24-10.769531 24-24s-10.769531-24-24-24zm0 32c-4.40625 0-8-3.59375-8-8s3.59375-8 8-8 8 3.59375 8 8-3.59375 8-8 8zm0 0" data-original="#000000" class="active-path" data-old_color="#31bfbd" fill="#31bfbd"/><path d="m449.472656 208h-161.472656v16h161.472656c3.3125 9.289062 12.113282 16 22.527344 16 13.230469 0 24-10.769531 24-24s-10.769531-24-24-24c-10.414062 0-19.214844 6.710938-22.527344 16zm22.527344 0c4.40625 0 8 3.59375 8 8s-3.59375 8-8 8-8-3.59375-8-8 3.59375-8 8-8zm0 0" data-original="#000000" class="active-path" data-old_color="#31bfbd" fill="#31bfbd"/><path d="m448 136v-33.472656c9.289062-3.3125 16-12.113282 16-22.527344 0-13.230469-10.769531-24-24-24s-24 10.769531-24 24c0 10.414062 6.710938 19.214844 16 22.527344v33.472656c0 13.230469-10.769531 24-24 24h-40v16h40c22.054688 0 40-17.945312 40-40zm-8-64c4.40625 0 8 3.59375 8 8s-3.59375 8-8 8-8-3.59375-8-8 3.59375-8 8-8zm0 0" data-original="#000000" class="active-path" data-old_color="#31bfbd" fill="#31bfbd"/><path d="m87.03125 207.03125c-15.597656 15.59375-15.597656 40.976562 0 56.570312l11.3125-11.3125c-9.351562-9.359374-9.351562-24.585937 0-33.945312 9.359375-9.367188 24.585938-9.359375 33.945312 0l11.3125-11.3125c-15.601562-15.589844-40.976562-15.597656-56.570312 0zm0 0" data-original="#000000" class="active-path" data-old_color="#31bfbd" fill="#31bfbd"/><path d="m184 32c-22.054688 0-40 17.945312-40 40h16c0-13.230469 10.769531-24 24-24s24 10.769531 24 24h16c0-22.054688-17.945312-40-40-40zm0 0" data-original="#000000" class="active-path" data-old_color="#31bfbd" fill="#31bfbd"/><path d="m216 184c0-22.054688-17.945312-40-40-40v16c13.230469 0 24 10.769531 24 24s-10.769531 24-24 24v16c22.054688 0 40-17.945312 40-40zm0 0" data-original="#000000" class="active-path" data-old_color="#31bfbd" fill="#31bfbd"/><path d="m136 352c0 22.054688 17.945312 40 40 40v-16c-13.230469 0-24-10.769531-24-24s10.769531-24 24-24v-16c-22.054688 0-40 17.945312-40 40zm0 0" data-original="#000000" class="active-path" data-old_color="#31bfbd" fill="#31bfbd"/></g> </svg>

                <h3>Study</h3>
                <p>We put the best offer in order to study our results. Our product is getting better year by year.

                </p>
            </div>
            <div className="column">
            <Analytics />
                <h3>Show</h3>
                <p>We are integrated with over 6 platform and have dedicated code to make us adaptable for your website
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

Hero.propTypes = {
};

export default Hero;
