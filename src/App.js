import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { LanguageProvider } from "./hooks/useLanguage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Fencing from "./pages/Fencing";
import Instructors from "./pages/Instructors";
import Programs from "./pages/Programs";
import "./App.css";

const theme = createTheme({
	palette: {
		primary: {
			main: "#1a1a1a",
			light: "#333333",
			dark: "#000000",
		},
		secondary: {
			main: "#f5f5f5",
			light: "#ffffff",
			dark: "#e0e0e0",
		},
		background: {
			default: "#ffffff",
			paper: "#f8f9fa",
		},
	},
	typography: {
		fontFamily: "'Noto Sans KR', 'Inter', sans-serif",
		h1: {
			fontSize: "3.5rem",
			fontWeight: 700,
			lineHeight: 1.2,
		},
		h2: {
			fontSize: "2.5rem",
			fontWeight: 600,
			lineHeight: 1.3,
		},
		h3: {
			fontSize: "1.8rem",
			fontWeight: 500,
			lineHeight: 1.4,
		},
		body1: {
			fontSize: "1rem",
			lineHeight: 1.7,
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none",
					borderRadius: "12px",
					padding: "12px 24px",
					fontSize: "1rem",
					fontWeight: 500,
				},
			},
		},
	},
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LanguageProvider>
          <div className="App">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/fencing" element={<Fencing />} />
                <Route path="/instructors" element={<Instructors />} />
                <Route path="/programs" element={<Programs />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
