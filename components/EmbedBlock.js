import Iframe from "./Iframe";

const EmbedBlock = props => {
  if (!props.data) {
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
      width: "70%",
      maxWidth: 1500,
      minHeight: 500,
      overflow: "hidden",
      borderRadius: 10,
      boxShadow: "0 0 10px lightgrey",

      link: {
        //width: "inherit",
        maxWidth: 1500,
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
        width: "70%",
        maxWidth: 1500
      },

      fontSize: "1.5vw",
      "@media (min-width: 1200px)": {
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
        <div style={style.embedded}>
          <Iframe url={website.url} />
          {/* <div dangerouslySetInnerHTML={{ __html: website.embedCode }} /> */}
        </div>

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
