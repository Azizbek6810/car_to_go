import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { AllSaga } from '../redux/saga/saga'
import { Provider } from 'react-redux'
import { rootreduser } from '../redux/redusers/rootreduser'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css"
import '../styles/globals.css'
import '../styles/globalStill.scss'
import '../styles/modelCarousel.scss'
import '../styles/headerCarousel.scss'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootreduser ,compose(applyMiddleware(sagaMiddleware),  ));
  
sagaMiddleware.run(AllSaga);

function MyApp({ Component, pageProps }) {
  return <Provider store={store} >
            <Component {...pageProps} />
          </Provider>
}

export default MyApp
