import { View, Text, ScrollView, StyleSheet } from 'react-native'
// import { Feather } from '@expo/vector-icons'

import CircleBotton from '../../components/CircleBotton'
import Icon from '../../components/Icon'
import { router, useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { type Memo } from '../../../types/memo'
import { auth, db } from '../../config'
import { doc, onSnapshot } from 'firebase/firestore'

const handlePress = (id: string): void => {
  router.push({ pathname: '/memo/edit', params: { id } })
}

const Detail = (): JSX.Element => {
  const id = String(useLocalSearchParams().id)
  const [memo, setMemo] = useState<Memo | null>(null)
  useEffect(() => {
    if (auth.currentUser === null) { return }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    const unsubscribe = onSnapshot(ref, (memoDoc) => {
      const { bodyText, updatedAt } = memoDoc.data() as Memo
      setMemo({
        id: memoDoc.id,
        bodyText,
        updatedAt
      })
    })
    return unsubscribe
  }, [])
  // console.log(id)
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>{memo?.bodyText}</Text>
        <Text style={styles.memoDate}>{memo?.updatedAt?.toDate().toLocaleString('ja-JP')}</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          {memo?.bodyText}
        </Text>
      </ScrollView>
      <CircleBotton style={{ top: 60, bottom: 'auto' }} onPress={() => { handlePress(id) }}>
        {/* <Feather name="plus" size={40} /> */}
        <Icon name='pencil' size={48} color='#ffffff'/>
      </CircleBotton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingHorizontal: 19
  },
  memoTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 32,
    color: '#ffffff'
  },
  memoDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#ffffff'
  },

  memoBody: {
    paddingHorizontal: 27
  },
  memoBodyText: {
    paddingVertical: 32,
    fontSize: 16,
    lineHeight: 24,
    color: '#212121'
  }
})

export default Detail
