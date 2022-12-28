# Plan

1. Create a baseline font
2. Import a font from a local ttf file.

## Step by Step

### Basics

1. Initialise React Native project
2. Install Expo Font
3. Create src folder
3. Add asset folder to src
4. Add fonts folder to asset directory
5. Add local font files to fonts folder
6. Add header View with
```js
  header: {
    backgroundColor: 'skyblue',
    padding: 20,
    borderRadius: 50
  }
```

### Create BaseText Component

1. Create components directory in root/src
2. Create BaseFont directory in src
3. code index.js
4. Destructure {children}
5. View and Text sandwich
6. Nest {children} bewteen Text tags
7. import {useFonts} from 'expo-font'
8. create styles = StyleSheet.create({default:{}})
9. Check that you're able to style BaseFont differently in App

### Import the font

1. In BaseFont import {useFonts} from 'expo-font'
2. Instantiate your font with
```js
const [fontsLoaded] = useFonts({
    'Comfortaa': require('...')
  })
```
3. Add `{fontFamily: fontsLoaded ? 'Comfortaa' : 'monospace'}` to your Text style prop