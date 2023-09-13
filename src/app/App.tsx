import { Route, Routes } from "react-router-dom";
import { Home, NewsPage, VideoPage } from "pages";
import * as Styles from "./App.styles";

function App() {
  return (
    <Styles.AppWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:title" element={<NewsPage />} />
        <Route path="/video/:title" element={<VideoPage />} />
      </Routes>
    </Styles.AppWrapper>
  );
}

export default App;
