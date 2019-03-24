import React from "react";
import { css } from "@emotion/core";
// First way to import
import { DotLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  render() {
    return (
      <div className="sweet-loading">
        <DotLoader
          css={override}
          sizeUnit={"px"}
          size={50}
          color={"#e22b2e"}
          loading={this.state.loading}
        />
        <style jsx>
          {`
            .sweet-loading {
              margin: auto;
            }
          `}
        </style>
      </div>
    );
  }
}
