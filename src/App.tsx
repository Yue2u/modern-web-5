import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import HomePage from "./pages/HomePage";
import LabPage from "./pages/LabPage";
import CounterPage from "./pages/CounterPage";
import "./App.css";

function Layout() {
    const { dark } = useTheme();

    return (
        <div className={`page${dark ? " dark" : ""}`}>
            <Header />
            <div className="layout">
                <Menu />
                <main className="content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/lab/:id" element={<LabPage />} />
                        <Route path="/counter" element={<CounterPage />} />
                    </Routes>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default function App() {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <BrowserRouter>
                    <Layout />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
}
