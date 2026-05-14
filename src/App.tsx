import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Content from "./components/Content";
import labs from "./labs";
import "./App.css";

function App() {
    const [selectedId, setSelectedId] = useState(1);
    const lab = labs.find((l) => l.id === selectedId)!;

    return (
        <div className="page">
            <Header />
            <div className="layout">
                <Menu labs={labs} selected={selectedId} onSelect={setSelectedId} />
                <Content lab={lab} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
