import Iframe from "./Iframe";
import React, { useEffect, useState } from "react";

const EmbedBlock = ({ children }) => {
  if (!children) {
    return <div />;
  }

  const style = {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%"
    },
    embedded: {
      // width: "90%",
      // maxWidth: 1100,
      margin: "0 auto",
      width: 1000,
      minHeight: 500,
      overflow: "hidden",
      padding: 10,
      borderRadius: 10,
      boxShadow: "0 0 10px lightgrey",

      link: {
        //width: "inherit",
        maxWidth: 1000,
        overflow: "show"
      },
      button: {
        height: "50%",
        outline: "none",
        border: "none",
        margin: 15,
        backgroundColor: "black",
        color: "white",
        lineHeight: 2
      }
    },
    text: {
      box: {
        //marginTop: 15,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        //justifyContent: "center",
        width: "90%",
        maxWidth: 1000
      },

      fontSize: "1.5vw",
      "@media (minWidth: 1200px)": {
        fontSize: 18
      },

      lineHeight: 2,
      fontFamily: "'KoHo', sans-serif",
      fontWeight: 100,
      color: "lightgrey",
      paddingLeft: 5,

      textDecoration: "none"
    }
  };

  const [website, setWebsite] = useState({ url: "", title: "website" });

  useEffect(() => {
    const title = children.type.title;
    const url = children.type.url;

    setWebsite({ url: url, title: title });
  }, []);

  let button_name = "";
  if (website.url.match("tableau")) {
    button_name = "tableau";
  } else if (website.url.match("powerbi")) {
    button_name = "powerBI";
  } else {
    button_name = "go to dataviz";
  }

  return (
    <div style={style.root}>
      <div style={style.embedded}>{children}</div>

      <div style={style.text.box}>
        <a style={style.embedded.link} href={website.url} target="_blank">
          <button style={style.embedded.button}>{button_name}</button>
        </a>
        <a href={website.url} style={style.text} target="_blank">
          {website.title}
        </a>
      </div>

      <br />
      <br />
    </div>
  );

  const output = props.data.map((website, i) => {
    let button_name = "";
    if (website.url.match("tableau")) {
      button_name = "tableau";
    } else if (website.url.match("powerbi")) {
      button_name = "powerBI";
    } else {
      button_name = "go to dataviz";
    }

    return (
      <div key={i} style={style.root}>
        <div style={style.embedded}>{props.children}</div>

        <div style={style.text.box}>
          <a style={style.embedded.link} href={website.url} target="_blank">
            <button style={style.embedded.button}>{button_name}</button>
          </a>
          <a href={website.url} style={style.text} target="_blank">
            {website.title}
          </a>
        </div>

        <br />
        <br />
      </div>
    );
  });
  return output;
};

export default EmbedBlock;
