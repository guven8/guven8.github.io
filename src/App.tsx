import React from "react";
import { CssBaseline, Container } from "@material-ui/core";
import { Header } from "./components/header/Header";
import { MainHeader } from "./components/mainHeader/MainHeader";
import { MediaGallery } from "./components/mediaGallery/MediaGallery";
import SimpleModal from "./components/Foo";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <MainHeader />
        <MediaGallery />
        <SimpleModal />
      </Container>
    </>
  );
};

export default App;
