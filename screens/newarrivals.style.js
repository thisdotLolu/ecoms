import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.lightWhite
    },
    wrapper:{
        flex:1,
        backgroundColor: COLORS.lightWhite
    },
    upperRow:{
        marginHorizontal:SIZES.large,
        width: SIZES.width-50,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        position:'absolute',
        backgroundColor:COLORS.primary,
        borderRadius:SIZES.large,
        top: SIZES.large,
        zIndex:999
    },
    heading:{
        fontFamily:'semibold',
        fontSize:SIZES.medium,
        color:COLORS.lightWhite,
        marginLeft:5
    },
    separator:{
        height: 16,
    }
})

export default styles;