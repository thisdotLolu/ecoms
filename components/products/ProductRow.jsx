import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants'
import ProductCardView from './ProductCardView'
import styles from './productRow.styles'


const ProductRow = () => {
    const products = [1,2,3,4]
  return (
    <View
    style={styles.productRow}>
    <FlatList
    data={products}
    renderItem={({item})=>(
        <ProductCardView/>
    )}
    horizontal
    contentContainerStyle={{
        columnGap:SIZES.medium
    }}
    />
    </View>
  )
}

export default ProductRow

