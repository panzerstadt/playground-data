import React, { useEffect } from "react";

const title = "unemployment patterns around the globe";
const url =
  "https://public.tableau.com/profile/tang.li.qun#!/vizhome/unemployment_70/unemployment1953-2018";

const EmbedComponent = () => {
  useEffect(() => {
    var divElement = document.getElementById("viz1542173671283");
    var vizElement = divElement.getElementsByTagName("object")[0];
    vizElement.style.minWidth = "800px";
    vizElement.style.maxWidth = "1080px";
    vizElement.style.width = "100%";
    vizElement.style.minHeight = "627px";
    //vizElement.style.maxHeight = "977px";
    vizElement.style.height = "1000px";
    //vizElement.style.height = divElement.offsetWidth * 0.75 + "px";
    var scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }, []);

  const data = (
    <div
      class="tableauPlaceholder"
      id="viz1542173671283"
      style={{ position: "relative" }}
    >
      <noscript>
        <a href="#">
          <img
            alt=" "
            src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;un&#47;unemployment_70&#47;unemployment1953-2018&#47;1_rss.png"
            style={{ border: "none" }}
          />
        </a>
      </noscript>
      <object className="tableauViz" style={{ display: "none" }}>
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />{" "}
        <param name="embed_code_version" value="3" />{" "}
        <param name="site_root" value="" />
        <param name="name" value="unemployment_70&#47;unemployment1953-2018" />
        <param name="tabs" value="no" />
        <param name="toolbar" value="yes" />
        <param
          name="static_image"
          value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;un&#47;unemployment_70&#47;unemployment1953-2018&#47;1.png"
        />{" "}
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="filter" value="publish=yes" />
      </object>
    </div>
  );

  const props = { title: title, url: url };
  const output = React.cloneElement(data, [props]);
  return output;
};

EmbedComponent.title = title;
EmbedComponent.url = url;

export default EmbedComponent;
