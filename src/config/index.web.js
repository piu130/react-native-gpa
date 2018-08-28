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

export const configure = () => {
  setupVectorIconFont()
}

export default configure
