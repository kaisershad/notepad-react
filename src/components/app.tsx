import * as React from "react";
import { Header } from "./header";
import { Body } from "./body";
import { Footer } from "./footer";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export interface NotepadProps { compiler: string; framework: string; }

export class Notepad extends React.Component<NotepadProps, {}> {
  render() {
    return (
      <Container maxWidth="md">
        <Header />
        <Body />
        <Footer />
      </Container>
    )
  }
}
