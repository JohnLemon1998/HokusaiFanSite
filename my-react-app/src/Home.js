// Home page
// The default page when first visiting the site.
// Includes a hero image and some text

import './Home.css';
import foden from './images/foden.jpg' 

function Home() {
    return (
      <div className="home">
        <h2>tinkotinko</h2>
        <img src={ foden } alt='Header Image'></img>

      </div>
    );
  }
  
  export default Home;