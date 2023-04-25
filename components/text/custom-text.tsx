import { useCurrentTheme } from '@src/utils/themeHook'
import { FC } from 'react'

import { StyleProp, Text, TextStyle } from 'react-native'
import { COLORS } from '../../common/colors'

type Props = {
  children: string
  style?: StyleProp<TextStyle>
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
