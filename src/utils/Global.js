import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
${normalize()};
html{
  font-size: 16px;
  box-sizing: border-box;
}
*,*:after,*:before{
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}
body{
  font-family: ${primaryFont};
}
main{
  margin: 0 auto;
  width: 90%;
}
`;
