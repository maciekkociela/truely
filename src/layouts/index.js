import "typeface-open-sans";
import FontFaceObserver from "fontfaceobserver";
import PropTypes from "prop-types";
import React from "react";
import { graphql, StaticQuery } from "gatsby";

import { getScreenWidth, timeoutThrottlerHandler } from "../utils/helpers";
import Footer from "../components/Footer/";
import Header from "../components/Header";

import "../font/font.css";

export const ThemeContext = React.createContext(null);
export const ScreenWidthContext = React.createContext(0);
export const FontLoadedContext = React.createContext(false);

import themeObjectFromYaml from "../theme/theme.yaml";

class Layout extends React.Component {
  constructor() {
    super();

    this.state = {
      font400loaded: false,
      font600loaded: false,
      screenWidth: 0,
      headerMinimized: false,
      theme: themeObjectFromYaml
    };

    if (typeof window !== `undefined`) {
      this.loadFont("font400", "Roboto", 400);
      this.loadFont("font600", "Roboto", 600);
    }
  }

  timeouts = {};

  componentDidMount() {
    this.setState({
      screenWidth: getScreenWidth()
    });
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.resizeThrottler, false);
    }
  }

  resizeThrottler = () => {
    return timeoutThrottlerHandler(this.timeouts, "resize", 100, this.resizeHandler);
  };

  resizeHandler = () => {
    this.setState({ screenWidth: getScreenWidth() });
  };

  isHomePage = () => {
    if (this.props.location.pathname === "/") {
      return true;
    }

    return false;
  };

  loadFont = (name, family, weight) => {
    const font = new FontFaceObserver(family, {
      weight: weight
    });

    font.load(null, 10000).then(
      () => {
        console.log(`${name} is available`);
        this.setState({ [`${name}loaded`]: true });
      },
      () => {
        console.log(`${name} is not available`);
      }
    );
  };

  render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            pages: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "//pages//" }, fields: { prefix: { regex: "/^\\d+$/" } } }
              sort: { fields: [fields___prefix], order: ASC }
            ) {
              edges {
                node {
                  fields {
                    slug
                    prefix
                  }
                  frontmatter {
                    title
                    menuTitle
                  }
                }
              }
            }
            footnote: markdownRemark(fileAbsolutePath: { regex: "/footnote/" }) {
              id
              html
            }
          }
        `}
        render={data => {
          const { children } = this.props;
          const {
            footnote: { html: footnoteHTML },
            pages: { edges: pages }
          } = data;

          return (
            <ThemeContext.Provider value={this.state.theme}>
              <FontLoadedContext.Provider value={this.state.font400loaded}>
                <ScreenWidthContext.Provider value={this.state.screenWidth}>
                  <React.Fragment>
                    <Header
                      path={this.props.location.pathname}
                      pages={pages}
                      theme={this.state.theme}
                    />
                    <main>{children}</main>
                    <Footer html={footnoteHTML} theme={this.state.theme} />

                    {/* --- STYLES --- */}
                    <style jsx>{`
                      main {
                        min-height: 80vh;
                      }
                    `}</style>
                    <style jsx global>{`
                      html {
                        box-sizing: border-box;
                      }
                      *,
                      *:after,
                      *:before {
                        box-sizing: inherit;
                        margin: 0;
                        padding: 0;
                      }
                      body, button {
                        font-family: Coiny, sans-serif !important;
                      }
                      h1,
                      h2,
                      h3 {
                        font-weight: ${this.state.font600loaded ? 600 : 400};
                        line-height: 1.1;
                        letter-spacing: -0.03em;
                        margin: 0;
                      }
                      button {
                        padding: 10px;
                      }
                      .containerBox {
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 20px;
                      }
                      h1 {
                        letter-spacing: -0.04em;
                      }
                      article h1 {
                        color: #31bfbd;
                        font-size: 36px !important;
                        letter-spacing: 0.04em;
                        font-weight: 600;
                      }
                      .gatsby-resp-image-wrapper {
                        max-width: 1200px !important;
                      }
                      p {
                        margin: 0;
                      }
                      strong {
                        font-weight: ${this.state.font600loaded ? 600 : 400};
                      }
                      a {
                        text-decoration: none;
                        color: #666;
                      }
                      a.activeItem {
                        color: #31bfbd !important;
                      }
                      main {
                        width: auto;
                        display: block;
                      }
                      a.button {
                        background: #31bfbd;
                        border: 1px solid #31bfbd;
                        border-radius: 0;
                        text-transform: none;
                        opacity: 0.9;
                        padding: 13px 34px;
                        font-size: 13px;
                        color: #fff !important;
                        display: inline-block;
                        margin-top: 20px;
                        transition: 0.2s;
                        font-weight: 400 !important;
                        text-decoration: none !important;
                        cursor: pointer;

                        :hover {
                          border-color: #31bfbd;
                          background: transparent;
                          color: #31bfbd !important;
                        }
                      }

                      article {
                        max-width: 800px;
                        padding: 10px;
                        margin: 50px auto;
                        p {
                          font-size: 1.1em;
                          line-height: 1.6;
                          margin: 0 0 1.5em;
                          color: #545454;
                        }
                        h1 {
                          margin: 0.3em 0 0.8em;
                        }

                        &.article {
                          padding: 180px 10px 140px;
                          margin: 0 auto;
                          z-index: 2;
                          position: relative;

                          h1,
                          p,
                          h3 {
                            color: #fff;
                            max-width: 405px;
                            margin-bottom: 0;
                            margin-top: 0;
                            position: relative;
                            z-index: 3;
                          }

                          h1 {
                            margin-bottom: 10px;
                          }

                          h3 {
                            font-weight: 600;
                            margin-top: 0.8em;
                          }
                        }
                      }

                      .heading {
                        color: #31bfbd;
                        font-size: 36px !important;
                      }

                      .svgDevider {
                        width: 15px;
                        display: inline-block;
                      }

                      .flex {
                        display: flex;

                        .flexColumn {
                          width: 50%;
                          margin: 0 40px;
                          @media (max-width: 800px) {
                            width: 100%;
                            margin: 0 10px;
                          }
                        }
                      }
                    `}</style>
                  </React.Fragment>
                </ScreenWidthContext.Provider>
              </FontLoadedContext.Provider>
            </ThemeContext.Provider>
          );
        }}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Layout;

//eslint-disable-next-line no-undef
/*
export const postQuery = graphql`
  query LayoutQuery {
    pages: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages//" }, fields: { prefix: { regex: "/^\\d+$/" } } }
      sort: { fields: [fields___prefix], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            menuTitle
          }
        }
      }
    }
    footnote: markdownRemark(fileAbsolutePath: { regex: "/footnote/" }) {
      id
      html
    }
  }
`;

*/
