import { Text, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/globalStyles'
import { colors } from '../constants/colors'
import { fontFamilies } from '~/constants/fontFamilies'

interface Props {
  text: string
  font?: string
  color?: string
  size?: number
  type?: 'title' | 'description'
  styles?: StyleProp<TextStyle>
  flex?: number
}
const TextComponent = (props: Props) => {
  const { text, type, color, size, font, styles, flex } = props
  return (
    <Text
      style={[
        globalStyles.text,
        {
          fontFamily: font
            ? font
            : type === 'title'
            ? fontFamilies.bold
            : fontFamilies.regular,
          fontSize: size ? size : type === 'title' ? 16 : 14,
          color: color ?? colors.white,
          flex: flex ?? 0
        },
        styles
      ]}
    >
      {text}
    </Text>
  )
}

export default TextComponent
