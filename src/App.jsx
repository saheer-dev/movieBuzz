import Navbar from "./components/Navbar"
import Ecarousel from "./components/ECarousel"
import Upcoming from "./components/Upcoming"
import Nowplaying from "./components/Now_playing"
import Toprating from "./components/Top_Rated"
import Pop from "./components/popular"
import Footer from "./components/footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TvShow from "./TV Show/TvShow"
import Upcome from "./view_all_movies/upcome"
import Nowplay from "./view_all_movies/Nowplay"
import TopR from "./view_all_movies/TopR"
import Populars from "./view_all_movies/populars"
import Indivitual from "./components/indivitual"
import Search from "./components/Search"

function App() {

  return (
    <>
      <div className="overflow-x-hidden scroll-smooth" >
        <Router>
             <Navbar/>
          <Routes>
            <Route path="/" element={
              
              <div className="bg-[#3C486B] bg-gradient-to-b from-[#070318] via-transparent">
              <Ecarousel/>
              <Upcoming/>
              <Nowplaying/>
              <Toprating/>
              <Pop/>

              <Footer/>

              </div>
              
            }/>

        <Route path="/Tvshow" 
        element={<TvShow/>}/>

        <Route path="/upcoming"
        element={<Upcome/>}/>

         <Route path="/Now_playing"
        element={<Nowplay/>}/>

           <Route path="/TopRating"
        element={<TopR/>}/>

          <Route path="/Populars"
        element={<Populars/>}/>

        <Route path="/About/:id"
        element={<Indivitual/>}/>

        <Route path="/Search"
        element={<Search/>}/>
        
       

          </Routes>
        </Router>


      </div>
 
    </>
  )
}

export default App
