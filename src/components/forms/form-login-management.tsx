import { COLORS } from '@src/common/colors'
import { useIsDarkMode } from '@src/utils/isDarkHook'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button, TextInput, View, Text } from 'react-native'
import { formStyles } from './forms-styles'
import { PATTERNS } from './patterns'

export const FormLoginManagement = () => {
  const isDark = useIsDarkMode()
  const [triedSubmit, settriedSubmit] = useState(false)
  const [styles, setStyles] = useState(formStyles(isDark))
  useEffect(() => {
    console.log('isdark', isDark)

    setStyles(formStyles(isDark))
  }, [isDark])
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const onSubmit = (value: { email: string; password: string }) => {
    console.log(value)
  }
  const onErrorSubmit = () => {
    settriedSubmit(true)
  }
  return (
    <View style={{ gap: 20 }}>
      <View>
        <Controller
          name="email"
          control={control}
          rules={{
            required: { value: true, message: 'El correo es obligatorio' },
            pattern: {
              value: PATTERNS.email,
              message: 'El correo ingresado no es váido'
            }
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              inputMode="email"
              textContentType="emailAddress"
              style={styles.textInput}
              placeholderTextColor={COLORS.dark.inputPlaceHolder}
              value={value}
              placeholder="ejemplo@gmail.com"
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />
        {errors.email?.message && triedSubmit && (
          <Text style={styles.textError}>{errors.email.message}</Text>
        )}
      </View>
      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            textContentType="password"
            style={styles.textInput}
            placeholderTextColor={COLORS.dark.inputPlaceHolder}
            value={value}
            placeholder="******"
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
      />
      <Button
        title="Ingresar"
        onPress={handleSubmit(onSubmit, onErrorSubmit)}
      />
    </View>
  )
}
