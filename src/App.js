import "./App.css";
import DraggableComponent from "./components/Draggable";
import DropArea from "./components/DropArea";
import SVGBackgroundGenerator from "./components/SvgGenerator";

function App() {
    return (
        <div className="w-screen h-screen flex items-center justify-center ">
            {/* <SVGBackgroundGenerator />
             */}
            <DraggableComponent />
            <DropArea />
        </div>
    );
}

export default App;
