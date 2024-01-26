import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'
import {Ionicons} from '@expo/vector-icons'
import styles from './headings.styles'
import { useNavigation } from '@react-navigation/native'


const Heading = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Picked For You</Text>
        <TouchableOpacity
        onPress={()=>navigation.navigate('ProductList')}
        >
            <Ionicons
            name='ios-grid'
            size={24}
            color={COLORS.primary}
            />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Heading

