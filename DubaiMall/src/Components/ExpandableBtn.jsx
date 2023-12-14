import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
    responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
const CollapsibleList = ({title, subTitle, icon}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggleCollapsible}
        style={{
          flexDirection: 'row',
          // alignItems: 'center'
        }}>
        <Text
          style={{
            textAlign: 'center',
            textAlignVertical: 'center',
            marginRight: 8,
            top: responsiveHeight(0.2),
          }}>
          <Icon name={icon} size={28} />
        </Text>

        <Text style={styles.header}>{title}</Text>
        <Text
          style={{
            color: 'red',
            fontSize: 14,
            textAlignVertical: 'center',
            marginLeft: responsiveWidth(3),
          }}>
          {subTitle}
        </Text>
      </TouchableOpacity>
      {!isCollapsed && (
        <View style={{marginLeft:responsiveWidth(4)}}>
          <Text style={{color:'green'}}>Period Detail</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:responsiveHeight(1)}}>
            <Text>Period</Text>
            <Text style={{right:responsiveWidth(30)}}>205464645664</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:responsiveHeight(1)}}>
            <Text>Contract Money</Text>
            <Text style={{right:responsiveWidth(47)}}>7000</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:responsiveHeight(1)}}>
            <Text>Delivery</Text>
            <Text style={{right:responsiveWidth(44.5)}}>68600</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:responsiveHeight(1)}}>
            <Text>Fee</Text>
            <Text style={{right:responsiveWidth(47)}}>1400</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:responsiveHeight(1)}}>
            <Text>Select</Text>
            <Text style={{right:responsiveWidth(49),color:'red'}}>Red</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:responsiveHeight(1)}}>
            <Text>Status</Text>
            <Text style={{right:responsiveWidth(49),color:'red'}}>Fail</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:responsiveHeight(1)}}>
            <Text>Amount</Text>
            <Text style={{right:responsiveWidth(44),color:'red'}}>68600</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:responsiveHeight(1)}}>
            <Text>Create Time</Text>
            <Text style={{right:responsiveWidth(27)}}>2023-12-02 12:29</Text>
            </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 3,
    // borderColor: '#ccc',
    // borderWidth: 1,
   // padding: 10,
    // backgroundColor: 'grey',
    // borderRadius: 20,
    //marginHorizontal: responsiveWidth(10),
    // elevation: 20,
  },
  header: {
    fontSize: 14,
    // fontWeight: 'bold',
    textAlignVertical: 'center',
    //fontFamily: 'Ubuntu-Medium',
  },
  content: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: 'Ubuntu-Regular',
  },
});

export default CollapsibleList;
