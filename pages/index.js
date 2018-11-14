import { StyleRoot } from "radium";

import Body from "./body";
import Content from "./content";

const Index = () => {
  return (
    <StyleRoot>
      <div>
        <head>
          <link
            href="https://fonts.googleapis.com/css?family=KoHo|Open+Sans|Roboto+Mono"
            rel="stylesheet"
          />
        </head>
        <Body />
        <Content />
      </div>
    </StyleRoot>
  );
};

export default Index;
