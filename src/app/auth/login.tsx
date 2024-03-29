import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import Button from '../../components/Button'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config'

const handlePress = (email: string, password: string): void => {
  // ログイン
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredetial) => {
      console.log(userCredetial.user.uid)
      router.replace('/memo/list')
    })
    .catch((error) => {
      const { code, message } = error
      console.log(code, message)
      Alert.alert(message)
    })
}

const Login = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text) }}
          autoCapitalize='none'
          keyboardType='email-address'
          placeholder='Email Address'
          textContentType='emailAddress'
          />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text) }}
          autoCapitalize='none'
          secureTextEntry={true}
          placeholder='Password'
          textContentType='password'
        />
        <Button label='Submit' onPress={() => { handlePress(email, password) }}/>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Link href={'/auth/sign_up'} asChild={true} replace>
            <TouchableOpacity >
              <Text style={styles.footerLink}>Sign up here!</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F4F8',
    flex: 1
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24
  },
  title: {
    color: '#212121',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24
  },
  input: {
    backgroundColor: '#ffffff',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16
  },
  footer: {
    flexDirection: 'row'
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: '#212121'
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3'
  }
})

export default Login
