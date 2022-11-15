import "./App.scss";
import AboutPage from "./pages/AboutPage/AboutPage";

// pages
import IntroductionPage from "./pages/IntroductionPage/IntroductionPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

function App() {
    return (
        <div className="app">
            <IntroductionPage />
            <ProjectsPage />
            <AboutPage />
        </div>
    );
}

export default App;
