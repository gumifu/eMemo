import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Icon from './Icon'
import { Link } from 'expo-router'

const MemoListItem = (): JSX.Element => {
  return (
    <Link href={'/memo/detail'} asChild >
      <TouchableOpacity style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTtile}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2024年01月03日 10:00</Text>
        </View>
        <TouchableOpacity>
          <Icon name='delete' size={32} color='#B0B0B0'/>
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 19,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)'
  },
  memoListItemTtile: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  }
})

export default MemoListItem
