import PropTypes from "prop-types";
import React from "react";
import { Link, graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import Blocks from "../components/Blocks";

import Summary from "../components/Blocks/Summary";

import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';


import Whyus from "../images/svg-icons/whyme.svg";

class IndexPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    const {
      data: {
        posts: { edges: posts = [] },
        bgDesktop: {
          resize: { src: desktop }
        },
        bgTablet: {
          resize: { src: tablet }
        },
        bgMobile: {
          resize: { src: mobile }
        },
        site: {
          siteMetadata: { facebook }
        }
      }
    } = this.props;

    const backgrounds = {
      desktop,
      tablet,
      mobile
    };

    return (
      <React.Fragment>
        <ThemeContext.Consumer>
          {theme => (
            <Hero scrollToContent={this.scrollToContent} backgrounds={backgrounds} theme={theme} />
          )}
        </ThemeContext.Consumer>
        <hr ref={this.separator} />

        <article>
          <div style={{ height: 80 }} />

          <div className="flex">
            <div className="flexColumn">
              <h1>Why Truely?</h1>
              <p>Don't let your customers go out of your website to look for informations.</p>
              <p>
                We found thousends of reviews and comments searching internet and created best
                summery using maching learning solutions.
              </p>
            </div>
            <div class="flexColumn">
              <Whyus style={{ width: 300 }} />
            </div>
          </div>
        </article>

        <article style={{textAlign: "center"}}>
          <div style={{ height: 80 }} />

          <h1>Quick setup</h1>
          <p style={{ maxWidth: 350, textAlign: "center", margin: "0 auto 20px" }}>
            Increase conversions in minutes. Integrate 80+ apps even faster.
          </p>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="50" viewBox="0 0 45 50">
              <g fill="#6A6FB1" fill-rule="nonzero">
                <path
                  d="M38.227 9.672a.45.45 0 0 0-.427-.391c-.178 0-3.986-.285-3.986-.285S31.18 6.365 30.859 6.08c-.284-.284-.854-.213-1.067-.142-.036 0-.57.178-1.495.462-.89-2.595-2.456-4.942-5.197-4.942h-.25C22.104.462 21.108 0 20.289 0 13.881 0 10.82 8 9.86 12.054c-2.491.782-4.27 1.316-4.484 1.387-1.389.426-1.424.462-1.602 1.778C3.63 16.214 0 44.305 0 44.305l28.297 5.298 15.34-3.307c0-.035-5.374-36.375-5.41-36.624zM26.731 6.827a82.02 82.02 0 0 0-2.385.747V7.04c0-1.564-.214-2.844-.57-3.875 1.424.213 2.35 1.813 2.955 3.662zM21.997 3.52c.391.996.64 2.383.64 4.303v.284c-1.566.498-3.239.996-4.947 1.53.96-3.663 2.776-5.441 4.307-6.117zM20.11 1.707c.285 0 .57.106.819.284-2.065.96-4.236 3.378-5.161 8.25-1.353.426-2.67.817-3.915 1.209 1.067-3.698 3.666-9.743 8.257-9.743zm2.99 16l-1.886 5.619s-1.673-.89-3.702-.89c-2.99 0-3.132 1.885-3.132 2.348 0 2.56 6.691 3.555 6.691 9.565 0 4.729-2.99 7.787-7.047 7.787-4.877 0-7.332-3.023-7.332-3.023l1.316-4.302s2.563 2.205 4.699 2.205c1.424 0 1.993-1.103 1.993-1.92 0-3.343-5.481-3.485-5.481-8.997 0-4.622 3.31-9.102 10.037-9.102 2.563-.036 3.844.71 3.844.71z"
                  opacity=".66"
                />
                <path d="M37.8 9.245c-.178 0-3.986-.284-3.986-.284s-2.634-2.632-2.955-2.916a.572.572 0 0 0-.391-.178l-2.136 43.736 15.34-3.307-5.41-36.624a.616.616 0 0 0-.462-.427z" />
              </g>
            </svg>
            <span className="svgDevider" />
            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="39" viewBox="0 0 65 39">
              <path
                fill="#6A6FB1"
                fill-rule="nonzero"
                d="M.725 3.88C1.565 1.76 3.78.173 6.108.173h52.358c1.47 0 3.054.535 4.123 1.587 1.26 1.166 2.004 2.848 2.004 4.55v20.09c0 3.058-2.634 5.715-5.708 5.811H39.78c.84 2.122 1.68 4.225 2.538 6.347-3.798-2.122-7.597-4.225-11.395-6.347-8.341-.115-16.778 0-25.12 0C2.75 32.095.096 29.457.096 26.4V6.729c.096-.956.21-2.007.63-2.848zm25.654.421c-.63.726-.84 1.587-1.26 2.18-1.584 4.033-2.1 8.353-2.634 12.692-1.05-2.848-1.89-5.811-2.424-8.774-.114-.63-.21-1.357-.744-1.892-.65-.631-1.585-.631-2.329-.21-.534.324-.84.84-1.164 1.376-1.89 3.593-3.799 7.302-5.688 10.896-1.165-4.55-1.91-9.1-2.635-13.764-.114-.63-.21-1.261-.744-1.682-.744-.535-1.699-.535-2.539-.21-.954.325-1.374 1.586-1.164 2.542.954 5.926 1.909 11.948 3.589 17.759.534 1.261.744 2.638 1.794 3.593.649.631 1.584.115 2.118-.42 1.28-1.262 2.12-2.848 2.96-4.435 1.163-2.332 2.328-4.645 3.492-6.977 1.164 3.9 2.749 7.933 5.593 10.991.649.746 1.584 1.377 2.538 1.166 1.05-.21 1.585-1.471 1.47-2.427-.21-3.804.325-7.608.955-11.412.534-2.849 1.05-5.812 2.424-8.45.305-.65.305-1.49-.115-2.121-.649-1.166-2.538-1.472-3.493-.421zm10.766 2.313a7.716 7.716 0 0 0-3.379 1.472c-3.264 2.963-4.543 7.818-3.798 12.158.42 1.911 1.279 3.804 2.958 4.97 2.119 1.376 4.963 1.472 7.082.21 1.47-.86 2.52-2.237 3.264-3.708 1.374-2.524 1.909-5.601 1.584-8.45-.21-1.682-.84-3.383-2.004-4.645-1.489-1.586-3.703-2.217-5.707-2.007zm.42 4.454c.63-.21 1.488.096 2.004.746 1.05 1.471 1.164 3.383.84 5.18-.325 1.491-.86 3.078-2.12 4.129-.534.42-1.278.86-2.003.745-.726-.114-1.146-.745-1.47-1.376-1.05-2.332-.744-5.18.63-7.302.534-.86 1.164-1.797 2.119-2.122zm16.052-4.454a7.651 7.651 0 0 0-3.798 1.759c-3.264 3.498-4.524 8.774-3.054 13.323.515 1.491 1.47 2.868 2.844 3.709 2.004 1.28 4.753 1.376 6.757.115 1.489-.842 2.539-2.333 3.378-3.804 1.375-2.524 1.91-5.391 1.585-8.24-.23-1.796-.86-3.593-2.119-4.97-1.374-1.471-3.588-2.102-5.593-1.892zm.42 4.454c.63-.21 1.47 0 2.004.63.84 1.282 1.165 2.964.955 4.55-.21 1.587-.745 3.384-2.004 4.55-.65.516-1.28 1.051-2.12 1.051-.744 0-1.259-.63-1.583-1.261-1.05-2.313-.745-5.066.42-7.188.649-.956 1.278-1.911 2.328-2.332z"
              />
            </svg>
            <span className="svgDevider" />
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="50" viewBox="0 0 49 50">
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#6A6FB1"
                  d="M47.605 32.56c-.344-.735-1-1.242-1.824-1.437-.275-1.257-.656-1.875-.69-1.966.145-.166.285-.332.316-.37 1.163-1.443.404-3.556-1.583-4.054-1.118-1.075-2.13-1.581-2.96-1.996-.798-.398-.48-.242-1.227-.58-.198-.971-.264-3.232-.58-4.819-.283-1.427-.854-2.46-1.735-3.14-.353-.764-.847-1.533-1.443-2.099 2.771-4.248 3.5-8.445 1.471-10.642C36.446.477 35.104.013 33.5.013c-2.26 0-5.041.922-7.849 2.627l-1.866-1.502c-7.82-6.157-29.932 21.054-22.126 27l2.015 1.54c-1.265 3.52.494 7.714 4.16 9.06.811.298 1.69.443 2.6.392 0 0 5.924 10.863 18.42 10.866 14.457.005 18.137-14.138 18.176-14.265 0 0 1.171-1.732.576-3.171zM2.259 26.338C.675 23.664 3.431 18.172 5.393 15.05 10.24 7.335 18.309 1.247 21.974 2.116l1.008-.386 2.755 2.329c1.893-1.137 4.305-2.295 6.56-2.526-1.372.31-3.044 1.02-5.026 2.233-.048.028-4.688 3.16-7.522 5.971-1.545 1.533-7.748 8.971-7.744 8.965 1.134-2.146 1.881-3.199 3.676-5.456a50.57 50.57 0 0 1 3.207-3.664 41.462 41.462 0 0 1 1.556-1.53 34.655 34.655 0 0 1 1.572-1.375L18.38 3.673l.193 1.346 2.642 2.328s-2.338 1.574-3.501 2.567c-4.663 3.978-9.238 10.086-10.94 16.031l.08-.003c-.847.467-1.689 1.217-2.424 2.237-.02-.005-1.903-1.387-2.17-1.842zM9.97 37.505c-2.793 0-5.057-2.384-5.057-5.324s2.264-5.324 5.057-5.324c.724 0 1.413.16 2.035.449 0 0 1.075.542 1.378 3.103.315-.8.473-1.457.473-1.457.36 1.102.545 2.26.473 3.432.299-.398.62-1.146.62-1.146.555 3.272-1.833 6.267-4.979 6.267zm6.225-18.803s2.175-4.135 6.954-6.87c-.356-.056-1.226.054-1.379.072.868-.746 2.481-1.245 3.596-1.472-.327-.207-1.103-.26-1.49-.27-.113-.003-.112-.002-.247.003 1.049-.586 2.992-.93 4.76-.619-.223-.295-.726-.51-1.08-.615-.03-.009-.169-.043-.169-.043s.118-.028.133-.03c1.065-.206 2.308.015 3.292.41-.112-.259-.385-.56-.59-.752-.021-.02-.144-.108-.144-.108a7.832 7.832 0 0 1 2.757 1.172 3.835 3.835 0 0 0-.522-.702c.983.281 2.087.983 2.56 1.988a1.729 1.729 0 0 1 .044.115c-1.863-1.432-7.3-1.027-12.745 2.502-2.493 1.616-4.32 3.383-5.73 5.219zm29.379 16.327c-.066.128-.75 3.838-4.671 6.919-4.95 3.89-11.453 3.496-13.91 1.316-1.312-1.227-1.88-2.983-1.88-2.983s-.148.99-.174 1.378c-.99-1.683-.906-3.74-.906-3.74s-.528.985-.77 1.537c-.728-1.854-.352-3.769-.352-3.769l-.576.86s-.27-2.1.393-3.847c.71-1.868 2.084-3.225 2.356-3.394-1.043-.331-2.245-1.282-2.247-1.284 0 0 .478.032.81-.044 0 0-2.109-1.511-2.479-3.823.306.378.947.804.947.804-.208-.605-.333-1.95-.14-3.275l.001-.002c.4-2.53 2.485-4.178 4.847-4.158 2.515.023 4.2.55 6.309-1.394.446-.411.802-.766 1.429-.905.066-.015.23-.083.566-.083.34 0 .667.076.967.255 1.144.68 1.39 2.456 1.513 3.757.455 4.828.27 3.969 2.225 4.964.932.474 1.98.924 3.171 2.2l.01.011h.014c1.005.024 1.523.815 1.06 1.392-3.374 4.028-8.085 5.957-13.335 6.118l-.707.017c-2.12.064-2.81 2.807-1.48 4.457.84 1.043 2.458 1.385 3.79 1.39l.018-.006c5.74.116 11.507-3.946 12.503-6.186l.068-.159c-.23.271-5.822 5.535-12.616 5.345 0 0-.743-.016-1.443-.179-.922-.214-1.623-.62-1.891-1.539.564.113 1.277.186 2.105.186 4.905 0 8.439-2.23 8.07-2.26a.278.278 0 0 0-.054.01c-.571.132-6.467 2.415-10.194 1.245.01-.114.027-.225.053-.324.332-1.11.921-.955 1.873-.996 3.4-.113 6.144-.968 8.2-1.945 2.193-1.04 3.865-2.382 4.467-3.059.78 1.315.776 3.003.776 3.003s.306-.107.712-.107c1.274 0 1.536 1.14.572 2.297zm-16.65 1.612l-.007-.1.006.1zm.014-.106a.457.457 0 0 1-.012-.044c.004.015.007.03.012.044zm-.008.162l.005.042-.005-.042zm.002.014z"
                />
                <path
                  fill="#6A6FB1"
                  d="M21.846 3.875l.672.218-.544-1.977-.32.985.192.774M24.86 4.607l-1.113-.933.404 1.404c.223-.152.46-.31.709-.471M28.915 36.491c.016.17.035.338.058.5-.025-.164-.04-.332-.058-.5"
                />
                <path
                  fill="#6A6FB1"
                  d="M28.984 36.266a.479.479 0 0 0-.002.5.542.542 0 0 1 .002-.5"
                />
                <path d="M28.917 36.54l.031.1m.419.423c-.01-.014-.017-.029-.026-.043" />
                <path
                  fill="#6A6FB1"
                  d="M29.432 37.21a1.296 1.296 0 0 1-.5-.5c.118.221.295.4.5.5M34.977 22.554a3.026 3.026 0 0 1 1.614.29c-.037-1.372-.836-2.918-1.44-2.709-.354.116-.413.736-.406 1.11.018.451.087.867.232 1.31M23.707 5.387l-2.295-.7 1.517 1.27c.22-.167.482-.36.778-.57M29.531 24.509c.451.175.757.31.843.21.043-.048.014-.166-.092-.32-.28-.41-.816-.762-1.294-.937-1.09-.406-2.366-.176-3.295.565-.462.375-.666.762-.455.794.13.019.4-.093.78-.239 1.507-.57 2.358-.504 3.513-.073M29.701 25.875c.281.019.47.036.513-.04.097-.165-.648-.73-1.666-.556-.127.019-.245.058-.36.09a2.08 2.08 0 0 0-.8.463c-.24.232-.31.449-.24.502.069.055.236-.026.494-.13.865-.36 1.476-.37 2.06-.33M6.807 32.504a.285.285 0 0 0-.002-.008v-.003l.002.011"
                />
                <path
                  fill="#6A6FB1"
                  d="M11.769 30.362c.265.377.18.596.29.703.04.039.096.05.152.028.15-.062.225-.302.239-.47.038-.403-.175-.855-.457-1.175v-.001c-.367-.426-.945-.755-1.6-.856a3.496 3.496 0 0 0-1.346.075c-.084.024-.188.046-.278.081-1.603.626-2.298 2.19-1.965 3.746.083.376.25.8.513 1.077l.001.001c.329.355.688.287.535-.043-.037-.091-.235-.465-.262-1.142-.027-.696.134-1.419.58-1.971.33-.405.736-.586.784-.612.057-.03.116-.051.18-.081a.766.766 0 0 1 .086-.029c.204-.057.088-.032.295-.076 1.103-.234 1.9.245 2.253.745"
                />
                <path
                  fill="#6A6FB1"
                  d="M11.27 31.516a.466.466 0 0 1-.187-.27c-.044-.203-.02-.322.153-.444.134-.092.242-.136.243-.194.006-.11-.443-.222-.756.087-.26.278-.343.856.072 1.307.463.499 1.182.617 1.294 1.244.015.089.026.188.018.286.002.112-.036.273-.038.283-.139.606-.714 1.185-1.662 1.037-.175-.025-.288-.046-.322.002-.073.102.333.567 1.077.55 1.063-.023 1.942-1.103 1.732-2.31-.19-1.052-1.235-1.268-1.624-1.578M36.012 24.638c-.062.395.121.75.41.796.287.045.57-.239.632-.633.061-.395-.122-.751-.41-.796-.288-.045-.57.239-.632.633M33.913 26.071c.396.217.845.159 1.003-.13.158-.288-.035-.698-.43-.915-.396-.217-.845-.159-1.003.13-.158.289.034.698.43.915"
                />
              </g>
            </svg>
            <span className="svgDevider" />
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="45" viewBox="0 0 32 45">
              <path
                fill="#6A6FB1"
                d="M12.229 13.872c0-1.885 1.547-2.61 4.108-2.61 3.674 0 8.314 1.112 11.987 3.094V2.996C24.313 1.403 20.35.774 16.337.774 6.525.773 0 5.897 0 14.453c0 13.34 18.367 11.213 18.367 16.965 0 2.223-1.933 2.948-4.64 2.948-4.012 0-9.135-1.643-13.195-3.867v11.504c4.495 1.934 9.038 2.755 13.195 2.755 10.054 0 16.966-4.978 16.966-13.63-.049-14.404-18.464-11.842-18.464-17.256z"
                fill-rule="evenodd"
              />
            </svg>
          </div>
          <Link className="button" to="/#">
            Check all integrations
          </Link>
        </article>

        <Blocks />
        
        <article style={{textAlign: "center", marginBottom: 0}}>
        <h1>Pricing plan</h1>
        </article>

        <div className="containerBox">

        

        <PricingTable  highlightColor='#31bfbd'>
    <PricingSlot  onClick={this.submit} buttonText='SIGN UP' title='BASIC' priceText='$29/month'>
        <PricingDetail> <b>0-20k</b> unique users</PricingDetail>
        <PricingDetail> only plugin code on basic schemes</PricingDetail>
        <PricingDetail strikethrough> database or modifications</PricingDetail>
    </PricingSlot>
    <PricingSlot highlighted onClick={this.submit} buttonText='SIGN UP' title='PRO' priceText='$49/month'>
        <PricingDetail> <b>20-50k</b> unique users</PricingDetail>
        <PricingDetail> plugin or iframe code on basic and premium templates</PricingDetail>
        <PricingDetail> access to database with no modifications</PricingDetail>
    </PricingSlot>
    <PricingSlot  onClick={this.submit} buttonText='SIGN UP' title='Business' priceText='$79/month'>
        <PricingDetail> <b>50-100k</b> unique users</PricingDetail>
        <PricingDetail> plugin or iframe code on basic and premium templates</PricingDetail>
        <PricingDetail> access to database with no modifications</PricingDetail>
        <PricingDetail> After switching off no truely logotype on plugin
        <PricingDetail strikethrough> Truely logotype on widget</PricingDetail>
</PricingDetail>
    </PricingSlot>
    </PricingTable>
    <PricingTable  highlightColor='#31bfbd'>
    <PricingSlot  onClick={this.submit} buttonText='SIGN UP' title='Premium' priceText='$139/month'>
        <PricingDetail> <b>100-300k</b> unique users</PricingDetail>
        <PricingDetail> plugin or iframe code on basic and premium templates</PricingDetail>
        <PricingDetail> access to database with modifications in reviews - you can choose which reviews you want to use for every product, from which webpages you want to get reviews
</PricingDetail>
        <PricingDetail> After switching off no truely logotype on plugin</PricingDetail>
    </PricingSlot>
    <PricingSlot  onClick={this.submit} buttonText='SIGN UP' title='Platinum' priceText='on request'>
        <PricingDetail> <b>300k+</b> unique users</PricingDetail>
        <PricingDetail> customized plugin by developers team</PricingDetail>
        <PricingDetail> customized plugin by developers team</PricingDetail>
        <PricingDetail> access to database with modifications in reviews - you can choose which reviews you want to use for every product, from which webpages you want to get reviews
</PricingDetail>
<PricingDetail>customized plugin so no logotype probably</PricingDetail>
    </PricingSlot>
</PricingTable>

</div>


        <Summary />

        {/* <ThemeContext.Consumer>
          {theme => <Blog posts={posts} theme={theme} />}
        </ThemeContext.Consumer> */}

        <Seo facebook={facebook} />

        <style jsx>{`
          hr {
            margin: 0;
            border: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            category
            author
            cover {
              children {
                ... on ImageSharp {
                  fluid(maxWidth: 800, maxHeight: 360) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
    bgDesktop: imageSharp(fluid: { originalName: { regex: "/comments/" } }) {
      resize(width: 1200, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgTablet: imageSharp(fluid: { originalName: { regex: "/comments/" } }) {
      resize(width: 800, height: 1100, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgMobile: imageSharp(fluid: { originalName: { regex: "/comments/" } }) {
      resize(width: 450, height: 850, quality: 90, cropFocus: CENTER) {
        src
      }
    }
  }
`;

//hero-background
