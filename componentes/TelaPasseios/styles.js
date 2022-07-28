import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        padding:20,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f4fbc3',
    },

    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:5,
    },

    description:{
        textAlign:'center',
        marginBottom:20,
    },

    card:{
        backgroundColor:'#fff',
        width:320,
        marginBottom:5,
        padding:10,
        borderRadius:5,
        borderColor:'#979797',
        borderWidth:1,
    },

    cardTitle:{
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:5,
    },

    img:{
        width:300,
        height:80,
    },
})

export default styles;