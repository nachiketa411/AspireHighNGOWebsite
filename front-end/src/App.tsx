import Form from "./components/FormComponent/Form";
import InteractiveList from "./components/parentComponents/InteractiveList"; // Adjust the import path as needed

function App() {
  return (
    <>
      <div>
        <InteractiveList />
      </div>
      <div>
        <Form onSubmit={(data) => console.log(data)} />
      </div>
    </>
  );
}

export default App;
