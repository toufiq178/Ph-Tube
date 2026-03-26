import { Suspense } from "react";
import "./App.css";
import ButtonContainer from "./components/ButtonContainer/ButtonContainer";
import NavBar from "./components/NavBar/NavBar";
import Videos from "./components/Videos/Videos";

const promiseVideos = fetch(
  " https://openapi.programming-hero.com/api/phero-tube/videos",
).then((res) => res.json());
const promiseCategories = fetch(
  "  https://openapi.programming-hero.com/api/phero-tube/categories",
).then((res) => res.json());

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Suspense fallback={ <span className="loading loading-spinner loading-xl text-red-500 flex justify-self-center mt-20"></span>}>

        <ButtonContainer promiseCategories={promiseCategories} ></ButtonContainer>
      </Suspense>
      
      <Suspense
        fallback={
          <span className="loading loading-spinner loading-xl text-red-500 flex justify-self-center mt-20"></span>
        }
      >
        <Videos promiseVideos={promiseVideos}></Videos>
      </Suspense>

      {/* <h1 className="font-extrabold text-4xl text-center pt-20">Hello React</h1> */}
    </>
  );
}

export default App;
