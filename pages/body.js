const style = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
};

const titlePage = () => {
  const dummyPageStyle = {
    page: {
      height: "50vh",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },

    text: {
      display: "inline-block",
      borderRight: "1px solid rgba(0, 0, 0,.3)",
      margin: 0,
      marginRight: 20,
      padding: "10px 23px 10px 0",
      fontSize: "24px",
      fontFamily: "'KoHo', sans-serif",
      fontWeight: 500,
      verticalAlign: "top"
    },
    dummyContent: {
      display: "inline-block",
      textAlign: "left",
      lineHeight: 1.3,
      height: 49,
      verticalAlign: "middle"
    }
  };
  return (
    <div style={dummyPageStyle.page}>
      <div>
        <h1 style={dummyPageStyle.text}>the dataviz playground</h1>
        <p style={dummyPageStyle.dummyContent}>
          experiments in data visualization
        </p>
      </div>
    </div>
  );
};

const Body = () => {
  return <div style={style.root}>{titlePage()}</div>;
};

export default Body;
