import React, { Fragment, Component } from "react";

import Editor from "react-simple-code-editor";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsLight";

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`;

class EditorExample extends Component {
  state = { code: exampleCode };
  onValueChange = (code: any) => {
    this.setState({ code });
  };

  highlight = (code: string) => (
    <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Fragment>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Fragment>
      )}
    </Highlight>
  );

  render() {
    return (
      <Editor
        value={this.state.code}
        onValueChange={this.onValueChange}
        highlight={this.highlight}
        padding={10}
        style={{
          boxSizing: "border-box",
          fontFamily: '"Dank Mono", "Fira Code", monospace',
          ...theme.plain,
        }}
      />
    );
  }
}
export default EditorExample;
