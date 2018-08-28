import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'

const setupVectorIconFont = () => {
  const style = document.createElement('style')

  const materialIconsFont = require('react-native-vector-icons/Fonts/MaterialIcons.ttf')
  const materialIconsFontStyles = `@font-face {
    src: url(${materialIconsFont});
    font-family: 'Material Icons';
  }`
  style.type = 'text/css'
  style.appendChild(document.createTextNode(materialIconsFontStyles))

  document.head.appendChild(style)
}

setupVectorIconFont()

const root = document.getElementById('root')
const load = () => render((
  <AppContainer>
    <App />
  </AppContainer>
), root)

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App', load)
}

load()
