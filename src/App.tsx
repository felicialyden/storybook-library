import "./App.css";
import Button from "../taskbox/src/components/Button";
import Input from "../taskbox/src/components/Input";

function App() {
  return (
    <>
      <div className="card">
        <Input
          input={{
            placeholder: "First name",
            size: "large",
          }}
        />
        <Input
          input={{
            placeholder: "Last name",
            size: "large",
          }}
        />
        <Button
          button={{
            primary: true,
            size: "large",
            text: "Submit",
          }}
        />
      </div>
    </>
  );
}

export default App;
