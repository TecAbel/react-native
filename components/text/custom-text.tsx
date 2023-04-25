import { FC } from 'react'

import { StyleProp, Text, TextStyle } from 'react-native'
import { COLORS } from '../../common/colors'
import { useCurrentTheme } from '../../utils/themeHook'

type Props = {
  children: string
  style: StyleProp<TextStyle>
}

export const CustomText: FC<Props> = ({ children, style }) => {
  return (
    <Text
      style={[
        style,
        { color: useCurrentTheme(COLORS.light.text, COLORS.dark.text) }
      ]}
    >
      {children}
    </Text>
  )
}
