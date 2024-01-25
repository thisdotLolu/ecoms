import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants'


const Carousel = () => {
    const slides = [
        'https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg',
        'https://media.istockphoto.com/photos/home-interior-mockup-with-dark-green-armchair-table-and-decor-in-picture-id1274163113?k=20&m=1274163113&s=612x612&w=0&h=kqxQ4kC6Scim0jlCoaucA0TDc5ruECSVel7a0FnQ9FE=',
        'https://m.media-amazon.com/images/I/71u3F2NZ9gL._AC_UF1000,1000_QL80_DpWeblab_.jpg'
    ]

  return (
    <View style={styles.carouselContainer}>
        <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{borderRadius: 15, width: '95%', marginTop: 15}}
        autoplay
        circleLoop
        />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer:{
        flex:1,
        alignItems:'center',
    }
})