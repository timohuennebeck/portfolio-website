import "./App.scss";
import LearnMoreField from "./components/LearnMoreField/LearnMoreField";

function App() {
    return (
        <div>
            <LearnMoreField
                name="ABOUT ME"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
        </div>
    );
}

export default App;
