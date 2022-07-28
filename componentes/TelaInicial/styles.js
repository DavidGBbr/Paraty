import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fecda5',
    },

    card:{
        width:320,
        backgroundColor:'#fff',
        padding:10,
        borderRadius:5,
        borderColor:'#979797',
        borderWidth:1,
    },

    title:{
        textAlign:'center',
        fontSize:26,
        fontWeight:'bold',
        marginBottom:10,
    },

    description:{
        textAlign:'center',
        marginBottom:20,
    },

    img:{
        width:300,
        height:200,
        marginBottom:20,
    },

    boxButton:{
        marginBottom:10,
    },

    button:{
        backgroundColor:'#372d00'
    }
})

export default styles;