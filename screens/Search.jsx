import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './search.styles'
import { COLORS, SIZES } from '../constants/index'
import {Feather, Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import SearchTile from '../components/products/SearchTile'

const Search = () => {
  const navigation = useNavigation()
  const [searchKey, setSearchKey] = useState('')
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async() =>{
    try{
      const response = await axios.get(`http://172.20.10.2:5000/api/products/search/${searchKey}`) 
      console.log(response.data)
      setSearchResults(response.data)
    }catch(err){
      console.log('Failed to get products')
    }
  }

  return (
    <SafeAreaView>
       <View style={styles.searchContainer}>
      <TouchableOpacity>
      <Ionicons name='camera-outline' 
              size={24}
              style={styles.searchIcon}
      />
      </TouchableOpacity>
      <View style={styles.searchWrapper}>
        <TextInput
        style={styles.searchInput}
        value={searchKey}
        onChangeText={setSearchKey}
        placeholder='What are you looking for?'
        />
      </View>
      <View>
      <TouchableOpacity style={styles.searchBtn}
      onPress={()=>{
        handleSearch()
      }}>
      <Feather name = 'search'
        size={SIZES.xLarge} color={COLORS.offwhite}
      />
      </TouchableOpacity>
    </View>
    </View>

    {searchResults. length === 0 ? (
      <View style={{flex: 1}}>
        <Image
        source={require('../assets/images/Pose23.png')}
        style={styles.searchImage}
        />
      </View>
    ):(
      <FlatList
      data={searchResults}
      keyExtractor={(item)=> item._id}
      renderItem={({item})=>(
        <SearchTile
        item={item}
        />
      )}
      style={{marginHorizontal:12}}
      />
    )}
    </SafeAreaView>
  )
}

export default Search
