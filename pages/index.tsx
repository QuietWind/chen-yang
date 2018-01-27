import * as React from "react";
import * as ReactSwipe from "react-swipe";
import styled from "styled-components";
import { getPageHead } from "./Head";
import Footer from "./Footer";

const ImgItem = styled.img`
  max-width: 100%;
  height: auto;
`;

interface IndexProps {}

interface IndexState {}

class Index extends React.Component<IndexProps, IndexState> {
  public render(): JSX.Element {
    return (
      <div className="indexWrapper">
        {getPageHead("index")}
        <ReactSwipe>
          {[1, 2, 3, 4].map(n => (
            <div
              style={{
                maxHeight: "3rem",
                overflow: "hidden"
              }}
            >
              <ImgItem src={`/static/images/${n}.jpeg`} />
            </div>
          ))}
        </ReactSwipe>
        <Footer activeKey="homepage" />
      </div>
    );
  }
}

export default Index;
