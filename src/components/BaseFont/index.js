import {StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const BaseFont = ({children}) => {
  const [fontsLoaded] = useFonts({
    'Comfortaa': require('../../asset/fonts/Comfortaa-VariableFont_wght.ttf')
  })
  
  return (
    <View>
      <Text style={[
        styles.default,
        {fontFamily: fontsLoaded ? 'Comfortaa' : 'monospace'}
        ]}>
          {children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  default: {
    fontSize: 30,
    lineHeight: 50,
  }
})

export default BaseFont;