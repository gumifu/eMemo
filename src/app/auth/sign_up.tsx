import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Button from '../../components/Button'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import { auth } from '../../config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const handlePress = (email: string, password: string): void => {
  // 会員登録
  // console.log('email,password')
  createUserWithEmailAndPassword(auth, email, password)
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

const SignUp = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
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
        <Button label='Submit' onPress={() => { handlePress(email, password) }} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
        <Link href={'/auth/login'} asChild replace>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Log In</Text>
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

export default SignUp
