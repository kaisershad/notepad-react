import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <Container maxWidth="sm">
        <Typography variant="h2" component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
          Hallo from {this.props.compiler} and {this.props.framework}!
            </Typography>;
        </Container>
    )
  }
}
