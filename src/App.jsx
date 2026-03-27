import { Suspense, useState } from "react";
import "./App.css";
import ButtonContainer from "./components/ButtonContainer/ButtonContainer";
import NavBar from "./components/NavBar/NavBar";
import Videos from "./components/Videos/Videos";
import Footer from "./components/Footer/Footer";

const promiseVideos = fetch(
  " https://openapi.programming-hero.com/api/phero-tube/videos",
).then((res) => res.json());

const promiseCategories = fetch(
  "  https://openapi.programming-hero.com/api/phero-tube/categories",
).then((res) => res.json());





function App() {
  const [activeCategory, setActiveCategory] = useState("All");



  
  //////////////////////////////
  const [searchQuery, setSearchQuery] = useState("");
  const [searchPromise, setSearchPromise] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchPromise(null);
      return;
    }

    const newPromise = fetch(
      `https://openapi.programming-hero.com/api/phero-tube/videos?title=${query}`
    ).then((res) => res.json());

    setSearchPromise(newPromise);
  };
////////////////////////////////


  return (
    <>
      <NavBar onSearch={handleSearch}></NavBar>

      <Suspense
        
      >
        <ButtonContainer
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}

          //////////
          promiseCategories={promiseCategories}
          isSearchActive={!!searchQuery}
          ///////////

        ></ButtonContainer>
      </Suspense>

      <Suspense
        fallback={
          <span className="loading loading-spinner loading-xl text-red-500 flex justify-self-center mt-20"></span>
        }
      >
        <Videos
          activeCategory={activeCategory}
          // promiseVideos={promiseVideos}

          ///////////////////
          promiseVideos={searchPromise || promiseVideos}
          searchQuery={searchQuery}
          ////////////////

        ></Videos>
      </Suspense>

        <Footer/>
      {/* <h1 className="font-extrabold text-4xl text-center pt-20">Hello React</h1> */}
    </>
  );
}

export default App;
