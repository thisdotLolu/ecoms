import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    loadingContainer:{
        justifyContent:"center",
        alignContent:'center',
        alignItems:'center',
        flex:1
    },
    container:{
        alignItems:'center',
        paddingTop:SIZES.xxLarge,
        paddingLeft:SIZES.small/2
    }
})

export default styles