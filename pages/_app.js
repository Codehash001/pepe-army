import '../styles/globals.css'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    Aos.init({ duration : 1500,
               offset: 100,
               delay : 100})
  }, []);
  
  return (
   
    <div className='custom-scrollbar'>
  <Component {...pageProps} />
  </div>
  
  )
}
