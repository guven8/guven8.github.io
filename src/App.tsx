import React from "react";
import { CssBaseline, Container } from "@material-ui/core";
import { Header } from "./components/header/Header";
import { MainHeader } from "./components/mainHeader/MainHeader";
import { MediaGallery } from "./components/mediaGallery/MediaGallery";
import SimpleModal from "./components/Foo";
import { Bio } from "./components/bio/Bio";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <MainHeader />
        <Bio />
        <MediaGallery />
        <SimpleModal />
      </Container>
    </>
  );
};

export default App;
