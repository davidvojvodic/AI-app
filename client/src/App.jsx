import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, CreatePost } from "./pages";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Navbar } from "./components";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Navbar />

          <main className="sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-73px)]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-post" element={<CreatePost />} />
            </Routes>
          </main>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
