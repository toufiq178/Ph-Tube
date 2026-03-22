import "./App.css";
import ButtonContainer from "./components/ButtonContainer/ButtonContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>

      <NavBar></NavBar>
      <ButtonContainer></ButtonContainer>

      <h1 className="font-extrabold text-4xl text-center pt-20">Hello React</h1>
    </>
  );
}

export default App;
