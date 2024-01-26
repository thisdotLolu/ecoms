import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './newarrivals.style'
import { useNavigation } from '@react-navigation/native'
import {Ionicons} from '@expo/vector-icons'
import { COLORS } from '../constants'
import { ProductList } from '../components'


const NewArrivals = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons
                name='chevron-back-circle'
                color={COLORS.lightWhite}
                size={30}
                />
            </TouchableOpacity>
            <Text
            style={styles.heading}
            >
                Products
            </Text>
        </View>
            <ProductList/>
      </View>
    </SafeAreaView>
  )
}

export default NewArrivals
