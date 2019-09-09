import React, { useEffect } from "react";

const title = "tourism in Hokkaido";
const url =
  "https://public.tableau.com/profile/tang.li.qun#!/vizhome/Hokkaidosunlightsnowlocalvisitors/HokkaidoAirportsSunlightandSnow?publish=yes";

const EmbedComponent = () => {
  useEffect(() => {
    const divElement = document.getElementById("viz1550725916740");
    const vizElement = divElement.getElementsByTagName("object")[0];
    vizElement.style.width = "1366px";
    vizElement.style.height = "818px";

    const scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }, []);

  return (
    <div
      class="tableauPlaceholder"
      id="viz1550725916740"
      style={{ position: "relative" }}
    >
      <noscript>
        <a href="#">
          <img
            alt=" "
            src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ho&#47;Hokkaidotourismcasestudyold&#47;instagramastourismdriver-horseshoe&#47;1_rss.png"
            style={{ border: "none" }}
          />
        </a>
      </noscript>
      <object className="tableauViz" style={{ display: "none" }}>
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />{" "}
        <param name="embed_code_version" value="3" />{" "}
        <param name="site_root" value="" />
        <param
          name="name"
          value="Hokkaidotourismcasestudyold&#47;instagramastourismdriver-horseshoe"
        />
        <param name="tabs" value="yes" />
        <param name="toolbar" value="yes" />
        <param
          name="static_image"
          value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ho&#47;Hokkaidotourismcasestudyold&#47;instagramastourismdriver-horseshoe&#47;1.png"
        />{" "}
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
      </object>
    </div>
  );
};

EmbedComponent.title = title;
EmbedComponent.url = url;

export default EmbedComponent;
