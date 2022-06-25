import { Provider } from 'react-redux'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css"
import '../styles/globals.css'
import '../styles/modelCarousel.scss'
import '../styles/headerCarousel.scss'
import 'bootstrap/dist/css/bootstrap.css';
import {store} from "../store";


function MyApp({ Component, pageProps }) {
  return <Provider store={store} >
            <Component {...pageProps} />
          </Provider>
}

export default MyApp
