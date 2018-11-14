const StaticBlock = props => {
  const style = {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%"
    },
    image: {
      width: "100%",
      borderRadius: 10,
      boxShadow: "0 0 10px lightgrey",

      link: {
        width: "70%",
        maxWidth: 1500,
        overflow: "show"
      }
    },
    text: {
      box: {
        //marginTop: 15,
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

  const links = props.data;

  const output = links.map((website, i) => {
    return (
      <div key={i} style={style.root}>
        <a style={style.image.link} href={website.url} target="_blank">
          <img style={style.image} src={website.image} alt={website.title} />
        </a>

        <div style={style.text.box}>
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

export default StaticBlock;
