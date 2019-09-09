import Radium from "radium";
import React, { useState, useEffect } from "react";

import StaticBlock from "../components/StaticBlock";
import EmbedBlock from "../components/EmbedBlock";

import Unemployment from "../data/unemployment";
import Tourism from "../data/tourism";
import InstaTourism from "../data/instatourism";

const style = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  }
};

const static_links = [
  {
    title: "react playground",
    url: "https://react-playground-tliqun.now.sh/",
    image: "static/images/playground.png"
  }
];

const Content = () => {
  return (
    <div style={style.root}>
      <EmbedBlock>
        <Unemployment />
      </EmbedBlock>

      <EmbedBlock>
        <Tourism />
      </EmbedBlock>
      <EmbedBlock>
        <InstaTourism />
      </EmbedBlock>

      {/* <StaticBlock data={static_links} /> */}
    </div>
  );
};

export default Radium(Content);
