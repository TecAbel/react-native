import { View } from 'react-native'
import { CustomText } from '@components/text/custom-text'
import { styles } from './hellow.styles'

export const Hellow = () => {
  return (
    <View>
      <CustomText style={styles.hellow}>Hola!</CustomText>
      <CustomText>Aquí encontramos las bases de React Native</CustomText>
    </View>
  )
}
