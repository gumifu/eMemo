import { View, StyleSheet } from 'react-native'
import { router, useNavigation } from 'expo-router'
import { useEffect } from 'react'

import MemoListItem from '../../components/MemoListItem'
import CircleBotton from '../../components/CircleBotton'
import Icon from '../../components/Icon'
import LogOutButton from '../../components/LogOutButton'
// import { Feather } from '@expo/vector-icons'

const handlePress = (): void => {
  // ログイン
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => { return <LogOutButton /> }
    })
  }, [])
  return (
    <View style={styles.container}>
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleBotton onPress={handlePress}>
        {/* <Feather name='plus' size={40}/> */}
        <Icon name='plus' size={40} color='#ffffff'/>
      </CircleBotton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default List
