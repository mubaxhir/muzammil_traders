import './App.css';
import Header from './Header'
import Footer from './Footer'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'
import Footer2 from './Footer2';


function App() {


  return (
    <div className="App">
      <Header/>
    
      <div className="bg-image">  
      
      </div>  
      <div className="bg-text">
        <h1 >THE INNOVATORS</h1>
        <h4>Importer, Exporter, Wholesaler, Service Provider</h4>
      </div>   

      <div className="intro" >
        <h1>WE PROMOTE YOUR GOODS & YOUR BUSINESS AS WELL</h1>
        <div className=" intro__para">
          <p>In Pakistan, MUZAMMIL TRADERS offers innovative promotional items and personalized giveaway services with the highest quality and standards that produce a strong positive impact.</p>
          <p>If you're looking for inspiration for your forthcoming campaign out of the box giveaway, email us. Our team is energetic, ambitious, experienced, and highly competent. We research your brand personality with our respected custom giveaway concepts and come up with the genre that fits your brand best.</p>          
          <p>It allows you to raise the exposure of your company with customized prizes at the next function or trade fair.We please our customers with our high-quality and quick manufacturing services.</p>
          <p>Investing in giveaways and discounted merchandise is like investing in the business's ability.Executive pens, key chains, mugs, shields, wood plaques, clocks, laptop pieces, diaries, journals, wallets, personalized cases, tea coasters, t-shirts, belts, frames and so many more are part of our collection of giveaway and promotional goods.</p>
        </div>
      {/* <img className="front__image" src={front} alt="promotional" />  */}
      </div>

      {/* slides */}
      <div className="slider">
        <h1>WE DEAL IN</h1>
      <Carousel>
          <div className="slider__slide">
              <img src={img1} alt=""/>
          </div>
          <div className="slider__slide">
              <img src={img2} alt=""/>
          </div>
          <div className="slider__slide">
              <img src={img3} alt=""/>
          </div>
          <div className="slider__slide">
              <img src={img4} alt=""/>
          </div>
      </Carousel>
      </div>

      <Footer2/>
      <Footer/>
    </div>
  );
}

export default App;
