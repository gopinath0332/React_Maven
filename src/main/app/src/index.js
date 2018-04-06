import React, { Component } from "react";
import { render } from "react-dom";


let asyncComponent = (importComponent) => {
   return class extends Component {
      state = {
         component: null
      }

      componentDidMount() {
         importComponent()
            .then(cmp => {
               this.setState({ component: cmp.default });
            });
      }

      render() {
         const C = this.state.component;
         return C ? <C {...this.props} /> : null;
      }
   }
};

const Content = asyncComponent = () => {
   return (
      <div>Test-123 - service ui !!!</div>
   );
}

render(<Content />, document.getElementById("content"));