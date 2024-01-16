import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";


const styles = StyleSheet.create({
    container:{
        width:"100%"
    },
    welcomeTxt:(color,top)=>({
        fontFamily:'bold',
        fontSize:SIZES.xxLarge - 5,
        marginTop: top,
        color:color,
        marginHorizontal: 12
    })
})

export default styles;