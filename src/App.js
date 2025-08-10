import React, { useEffect } from 'react';
import Menu  from './components/menu/menu.component';
import Hero  from './components/hero/hero.component';
import About  from './components/about/about.component';
//import Blog from './components/blog/blog.component';
import Porfolio from './components/porfolio/portfolio.component';
import Services from './components/services/services.component';
import Contact from './components/contact/contact.component';
import Chat from './components/chat/chat.component';

import cdnScripts from './assets/scripts/main';
const App = () =>{
  useEffect(() => {
    cdnScripts();
  });
    return (
      <div id="page-top">
        <Menu/>
        <Hero/>
        <About/>
        <Porfolio />
        <Services/>
        <Contact />
        <Chat/>
      </div>
    );
}

export default App;

// 
// <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js" integrity="sha512-3J8teBiHrSyaaRBajZyIEtpDsXdPq1gsznKWIVb5CnorQuFhjWGhWe54z8YNnHHr7MZuExb9m5kvf964HiT1Sw==" crossorigin="anonymous"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js" integrity="sha512-0QbL0ph8Tc8g5bLhfVzSqxe9GERORsKhIn1IrpxDAgUsbBGz/V7iSav2zzW325XGd1OMLdL4UiqRJj702IeqnQ==" crossorigin="anonymous"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js" integrity="sha512-k2GFCTbp9rQU412BStrcD/rlwv1PYec9SNrkbQlo6RZCf75l6KcC3UwDY8H5n5hl4v77IDtIPwOk9Dqjs/mMBQ==" crossorigin="anonymous"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/js/bootstrap.min.js" integrity="sha512-UR25UO94eTnCVwjbXozyeVd6ZqpaAE9naiEUBK/A+QDbfSTQFhPGj5lOR6d8tsgbBk84Ggb5A3EkjsOgPRPcKA==" crossorigin="anonymous"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/counterup2/2.0.2/index.min.js" integrity="sha512-iELsXYafbp3drYeT4GnTWc0bRzoyA9zeMPohtYOL/xmCEjqc7xbPpV0UXRfhjGgy3co9XR2YkZq/CQvEa+Os8g==" crossorigin="anonymous"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous"></script>