import AddProductForm from "components/AddProductForm/AddProductForm";
import "./App.scss";
import BasicModalWindow from "./components/BasicModalWindow/BasicModalWindow";

function App() {
  return (
    <div>
      <BasicModalWindow>
        <AddProductForm title={"banana"} amount={100} />
      </BasicModalWindow>
    </div>
  );
}

export default App;
