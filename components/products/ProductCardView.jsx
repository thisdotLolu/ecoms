import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './ProductCardView.style'
import {Ionicons} from '@expo/vector-icons'
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'


const ProductCardView = () => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=>{
        navigation.navigate('ProductDetails')
    }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
            source={{uri:'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705708800&semt=ais'}}
            style={styles.image}
            />
        </View>
        <View style={styles.details}>
            <Text style={styles.title} numberOfLines={1}>Product Tiiiittlllee</Text>
            <Text style={styles.supplier} numberOfLines={1}>Product</Text>
            <Text style={styles.price} numberOfLines={1}>3455</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
            <Ionicons name='add-circle' size={35} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCardView
