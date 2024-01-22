import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import styles from './home.styles'
import {Ionicons,Fontisto} from '@expo/vector-icons'
import { Welcome } from '../components'
import Carousel from '../components/home/Carousel'
import Heading from '../components/home/Heading'
import ProductRow from '../components/products/ProductRow'





const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View
        style={styles.appBar}
        >
          <Ionicons name='location-outline' size={24}/>

          <Text
          style={styles.location}
          >Shanghai China</Text>

          <View style={{alignItems:'flex-end'}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
            <Fontisto
            name='shopping-bag'
            size={24}
            />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome/>
        <Carousel/>
        <Heading/>
        <ProductRow/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;