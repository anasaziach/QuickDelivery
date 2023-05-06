import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default App=()=>{
    return(
        <View style={styles.container}>
            <Text >test</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'red',
        width:50,
        height:50,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        position:"absolute",
        bottom:10,
        right:10,
        flex:0
    }
})