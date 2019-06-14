import * as React from "react";
import Typography from "@material-ui/core/Typography";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <Typography variant="h2">Hello from {this.props.compiler} and {this.props.framework}!</Typography>;
    }
}
