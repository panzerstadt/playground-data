import React from "react";

class Iframe extends React.Component {
  static async getInitialProps({ res, req, query }) {
    const from = req ? "server" : "client";
    return { from: from };
  }

  render() {
    return (
      <section>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1, maximum-scale=1, width=device-width, user-scalable=no"
        />
        <iframe src={this.props.url} />
        <style jsx>
          {`
            iframe {
              width: 100%;
              height: 100vh;

              border: none;
            }
            ::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
      </section>
    );
  }
}

export default Iframe;
