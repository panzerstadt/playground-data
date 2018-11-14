import Radium from "radium";
import { Fragment } from "react";
import StaticBlock from "../components/StaticBlock";
import EmbedBlock from "../components/EmbedBlock";

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

const embed_links = [
  {
    title: "unemployment patterns around the globe",
    url:
      "https://public.tableau.com/profile/tang.li.qun#!/vizhome/unemployment_70/unemployment1953-2018",
    embedCode: (
      <Fragment>
        {`
      <div class='tableauPlaceholder' id='viz1542173671283' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;un&#47;unemployment_70&#47;unemployment1953-2018&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='unemployment_70&#47;unemployment1953-2018' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;un&#47;unemployment_70&#47;unemployment1953-2018&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='filter' value='publish=yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1542173671283');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.minWidth='800px';vizElement.style.maxWidth='1080px';vizElement.style.width='100%';vizElement.style.minHeight='627px';vizElement.style.maxHeight='977px';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>
      `}
      </Fragment>
    )
  },
  {
    title: "tourism in Hokkaido",
    url:
      "https://public.tableau.com/profile/tang.li.qun#!/vizhome/Hokkaidosunlightsnowlocalvisitors/HokkaidoAirportsSunlightandSnow?publish=yes"
  },
  {
    title: "Instagram posts in Hokkaido 2017-2018",
    url:
      "https://public.tableau.com/profile/tang.li.qun#!/vizhome/HokkaidoTourism/InstagramPostsHokkaido2017-2018"
  }
];

const Content = () => {
  return (
    <div style={style.root}>
      <EmbedBlock data={embed_links} />
      {/* <StaticBlock data={static_links} /> */}
    </div>
  );
};

export default Radium(Content);
