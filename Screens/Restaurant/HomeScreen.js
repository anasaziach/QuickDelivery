import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  StatusBar,
  FlatList,
} from "react-native";
import React, { useState,useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import SPACING from "../../config/SPACING";
import colors from "../../config/Restaurant/colors";
import DATA from "../../config/Restaurant/DATA";
import axios from "axios";
import FloattingButton from "../../Components/FloattingButton";
import { ipv4 } from "../../IPV4";
import { ItemContext } from "../../App";
const { width } = Dimensions.get("window");

const ITEM_WIDTH = width / 2 - SPACING * 3;

const HomeScreen = (props) => {
  // variables
  const [activeCategory, setActiveCategory] = useState(0);
  const [data,setData] = useState();
  const {selectedItem, setSelectedItem} = React.useContext(ItemContext);
  const [dataFetched,setDataFetched] = useState(0)

  // functions
  const fetchData=()=>{
    axios.get("http://"+ipv4+":8080/api/showItems")
    .then(result=>{
      console.log(result.data)
      setData(result.data)
      setDataFetched(1)
    })
  }
  useEffect(()=>{
    fetchData()
    console.log("value of itemSelected is :"+selectedItem)  
  },[])
  return (
    <>
    <SafeAreaView>
      <StatusBar barStyle={"dark-content"} />
      </SafeAreaView>
        <FloattingButton />
        <View style={{ padding: SPACING * 2,flex:1}}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{
                  width: SPACING * 4.5,
                  height: SPACING * 4.5,
                  borderRadius: SPACING * 3,
                  marginRight: SPACING,
                }}
                source={{uri : 'https://www.leparisien.fr/resizer/gW8-0hVfHLR5fRj65PR-cStPAP0=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/47XS5SBD5FFYVL53B4STPFI4UA.jpg'}}
              />
              <Text
                style={{
                  fontSize: SPACING * 1.7,
                  fontWeight: "800",
                  color: colors.dark,
                }}
              >
                Mr. Anas
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity style={{ marginRight: SPACING }}>
                <Ionicons
                  name="notifications-outline"
                  size={SPACING * 3.5}
                  color={colors.dark}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="menu"
                  size={SPACING * 3.5}
                  color={colors.dark}
                />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ width: "60%", marginTop: SPACING * 2 }}>
              <Text style={{ fontSize: SPACING * 3, fontWeight: "700" }}>
                What would you like to order?
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: colors.light,
                marginVertical: SPACING * 3,
                padding: SPACING * 1.5,
                borderRadius: 26,
                borderColor:'#A9A9A9',
                borderWidth:2
              }}
            >
              <Ionicons name="search" color={colors.gray} size={SPACING * 2.7} />
              <TextInput
                placeholder="Want to .."
                placeholderTextColor={colors.gray}
                style={{
                  color: colors.gray,
                  fontSize: SPACING * 2,
                  marginLeft: SPACING
                }}
              />
            </View>
            {/* Categories */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {DATA.map((category, index) => (
                <TouchableOpacity
                  style={[
                    { 
                      marginRight: SPACING * 3,
                      padding:10
                    },
                    activeCategory === index && {
                      backgroundColor: colors.black ,
                      borderRadius:20,
                    }]
                  }
                  key={index}
                  onPress={() => {
                    setActiveCategory(index)
                    console.log(index)
                  }}
                >
                  <Text
                    style={[
                      {
                        fontSize: SPACING * 1.7,
                        fontWeight: "600",
                        color: colors.gray,
                      },
                      activeCategory === index && {
                        color: colors.white,
                        fontWeight: "700",
                        fontSize: SPACING * 1.5,
                      },
                    ]}
                  >
                    {category.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                marginVertical: SPACING * 2,
              }}
            >
              {dataFetched==1 ? data.map((item,index) => (
                <TouchableOpacity
                  style={{ width: ITEM_WIDTH, marginBottom: SPACING * 2 }}
                  key={index}
                  onPress={()=>{
                    setSelectedItem(item.id)
                    props.navigation.navigate('RecipeDetailScreen')
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: ITEM_WIDTH + SPACING * 3,
                      borderRadius: SPACING * 2,
                    }}
                    source={{uri:item.images[0].uri}}
                  />
                  <Text
                    style={{
                      fontSize: SPACING * 2,
                      fontWeight: "700",
                      marginTop: SPACING,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: SPACING * 1.5,
                      color: colors.gray,
                      marginVertical: SPACING / 2,
                    }}
                  >
                    {item.description}
                  </Text>
                  <Text style={{ fontSize: SPACING * 2, fontWeight: "700" }}>
                    {item.total} MAD
                  </Text>
                </TouchableOpacity>
              )):false}
            </View>
           </ScrollView>
        </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  categories: {
    borderRadius:20,
  }
});
