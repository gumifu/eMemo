import {
  View, TextInput, StyleSheet, KeyboardAvoidingView, Alert
} from 'react-native'
import CircleBotton from '../../components/CircleBotton'
import Icon from '../../components/Icon'
import { router, useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { auth, db } from '../../config'
import { Timestamp, doc, getDoc, setDoc } from 'firebase/firestore'

const handlePress = (id: string, bodyText: string): void => {
  if (auth.currentUser === null) { return }
  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
  setDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
    .then(() => {
      router.back()
    })
    .catch(() => {
      Alert.alert('更新に失敗しました')
    })
}

const Edit = (): JSX.Element => {
  const id = String(useLocalSearchParams().id)
  // console.log('edit', id)
  const [bodyText, setBodyText] = useState('')
  useEffect(() => {
    if (auth.currentUser === null) { return }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    getDoc(ref)
      .then((docRef) => {
        // console.log(docRef.data())
        const RemoteBodyText = docRef?.data()?.bodyText
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setBodyText(RemoteBodyText)
      })
      .catch(() => {
        console.log('error')
      })
  }, [])
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          value={bodyText}
          onChangeText={(text) => {
            setBodyText(text)
          }}
          />
      </View>
      <CircleBotton onPress={() => { handlePress(id, bodyText) }}>
        <Icon name='check' size={40} color='#ffffff' />
      </CircleBotton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    flex: 1
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 27,
    paddingVertical: 32
  }
})

export default Edit
