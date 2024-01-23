import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './productdetails.styles'
import {Ionicons,SimpleLineIcons, MaterialCommunityIcons, Fontisto} from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants'



const ProductDetails = ({navigation}) => {
    const [count, setCount] = useState(1)

    const increment = () =>{
        setCount(count+1)
    }
    
    const decrement = () =>{
        if(count > 1){
            setCount(count-1)
        }
        
    }

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: "https://media.istockphoto.com/id/1323194108/photo/plant-based-black-bean-burger-in-a-light-and-bright-environment.jpg?s=612x612&w=0&k=20&c=EqvhgipGfLluH8ULjtdAF5G6a2vJuKqZccNp2DouVWc=",
        }}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$999.34</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={24} color="gold" />
            ))}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}> {count} </Text>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>
               Description
            </Text>
            <Text style={styles.descText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio asperiores modi exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum unde qui! Voluptatem autem minima expedita tempora inventore nostrum, rerum provident aspernatur repudiandae. Eaque unde laboriosam exercitationem, officiis temporibus hic eius pariatur esse? Praesentium!
            </Text>
        </View>
        <View style={{marginBottom: SIZES.small}}>
            <View style={styles.location}>
                <View
                style={{
                    flexDirection:'row'
                }}
                >
                <Ionicons
                name='location-outline'
                size={20}/>
                <Text> Dallas </Text>
                </View>

                <View
                style={{
                    flexDirection:'row'
                }}
                >
                <MaterialCommunityIcons
                name='truck-delivery-outline'
                size={20}/>
                <Text> Free Delivery </Text>
                </View>
            </View>
        </View>

        <View style={styles.cartRow}>
            <TouchableOpacity 
            // onPress={()=>()}
            style={styles.cartBtn}
            >
             <Text style={styles.cartTitle}>BUY NOW</Text>   
            </TouchableOpacity>
            
            <TouchableOpacity 
            // onPress={()=>()}
            style={styles.addCart}
            >
             <Fontisto
             name='shopping-bag'
             size={24}
             color={COLORS.lightWhite}
             />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ProductDetails
