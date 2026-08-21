import '@/App.css'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import Czecharms from '@/assets/czecharms.png'

import CoverflowCarousel from '@/Components/Carousel2'


function Home() {
  
  return (
    <>
    <Navbar/>
      <section id="center">
        <br>
        </br>
        <div className="MainLogo">
          <img src={Czecharms} className="base" width="170" height="179" alt="" />
        </div>
        <div>
          <h1>The Vitosh Family</h1>
        
          <p>
    Become a member to access upcoming family events and Christmas cards.
          </p>
      
          
        </div>
      </section>
      <br>
      </br>
   
      <div className="Coverflowcarousel">
      <CoverflowCarousel/>
      </div>
      
      <br>
      </br>
      "We're all related, it just depends how far back you go."
      <br/>
      Miroslav Koudelka
      <section id="spacer"></section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </>
  )
}

export default Home