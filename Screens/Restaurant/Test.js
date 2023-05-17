import React from 'react';
import {StyleSheet, View,Text} from 'react-native';
import { TouchableOpacity } from 'react-native';

const Flex = (props) => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
        //   flexDirection: 'column',
        },
      ]}>
        <View style={{flex: 1, backgroundColor: 'red',justifyContent:'center'}} >
            <View style={{flex: 0, backgroundColor: 'darkorange',height:'50%'}} />
        </View>
      
      <View style={{flex: 1, backgroundColor: 'green'}} />
      <TouchableOpacity onPress={()=>props.navigation.navigate('Home')}>
        <Text>touch</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;