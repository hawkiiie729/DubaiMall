import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CollapsibleList from '../Components/ExpandableBtn';

const Win = () => {
  return (
    <>
   <ScrollView style={{height: responsiveHeight(100), width: responsiveWidth(100)}}>
    <View >
      <View
        style={{
          backgroundColor: '#DC3545',
          height: responsiveHeight(14),
          width: responsiveWidth(95),
          marginHorizontal: responsiveWidth(2.5),
          marginTop: responsiveHeight(1),
          borderRadius: 5,
          justifyContent: 'center',
          //alignItems:'center'
        }}>
        <View style={{marginLeft: responsiveWidth(4)}}>
          <Text style={{color: 'white', fontSize: responsiveFontSize(2)}}>
            Available Balance $8.5
          </Text>
        </View>
        <View
          style={{
            marginTop: responsiveHeight(1),
            flexDirection: 'row',
            top: responsiveHeight(1.5),
            marginLeft: responsiveWidth(2),
          }}>
          <View
            style={{
              height: responsiveHeight(4),
              width: responsiveWidth(25),
              backgroundColor: '#01B2FF',
              borderRadius: 5,
              marginRight: responsiveWidth(4),
              justifyContent: 'center',
              elevation: 12,
            }}>
            <Text
              style={{color: 'white', textAlign: 'center', fontWeight: '700'}}>
              Recharge
            </Text>
          </View>
          <View
            style={{
              height: responsiveHeight(4),
              width: responsiveWidth(25),
              backgroundColor: '#D1D5DB',
              borderRadius: 5,
              justifyContent: 'center',
              elevation: 10,
            }}>
            <Text
              style={{color: 'black', textAlign: 'center', fontWeight: '700'}}>
              Read Rule
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: responsiveWidth(5),
          marginTop: responsiveHeight(2),
        }}>
        <View style={{}}>
          <Text style={{color: 'grey', fontSize: responsiveFontSize(2)}}>
            Period
          </Text>
          <Text style={{color: 'black'}}>24234534634</Text>
        </View>
        <View style={{}}>
          <Text style={{color: 'grey', fontSize: responsiveFontSize(2)}}>
            Count Down
          </Text>
          <Text style={{color: 'black'}}>24234534634</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: responsiveHeight(3),
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            backgroundColor: '#39B54A',
            height: responsiveHeight(4),
            width: responsiveWidth(26),
            borderRadius: 5,
            justifyContent: 'center',
          }}>
          <Text
            style={{textAlign: 'center', color: 'white', fontWeight: '700'}}>
            Green
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#6739B6',
            height: responsiveHeight(4),
            width: responsiveWidth(26),
            borderRadius: 5,
            justifyContent: 'center',
          }}>
          <Text
            style={{textAlign: 'center', color: 'white', fontWeight: '700'}}>
            Violet
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#E54D42',
            height: responsiveHeight(4),
            width: responsiveWidth(26),
            borderRadius: 5,
            justifyContent: 'center',
          }}>
          <Text
            style={{textAlign: 'center', color: 'white', fontWeight: '700'}}>
            Red
          </Text>
        </View>
      </View>
      <View style={{marginTop: responsiveHeight(1.5)}}>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontSize: responsiveFontSize(1.8),
          }}>
          Parity Record
        </Text>
        <View
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(0.16),
            backgroundColor: '#0D6EFD',
            marginTop: responsiveHeight(1),
          }}
        />
        <View style={{marginTop:responsiveHeight(2)}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginHorizontal: responsiveWidth(12)}}>Period</Text>
            <Text style={{marginHorizontal: responsiveWidth(5)}}>Price</Text>
            <Text style={{marginHorizontal: responsiveWidth(3)}}>Number</Text>
            <Text style={{marginHorizontal: responsiveWidth(3)}}>Result</Text>
            <Text style={{marginHorizontal: responsiveWidth(2)}}>Animal</Text>
          </View>
          <View>
          <View style={{flexDirection: 'row',marginTop:responsiveHeight(2.5)}}>
           <Text style={{marginLeft:responsiveWidth(5)}}>444665654889</Text>
           <Text style={{marginLeft:responsiveWidth(7)}}>14869</Text>
          </View>
          <View style={{flexDirection: 'row',marginTop:responsiveHeight(2.5)}}>
           <Text style={{marginLeft:responsiveWidth(5)}}>444665654889</Text>
           <Text style={{marginLeft:responsiveWidth(7)}}>14869</Text>
          </View>
          <View style={{flexDirection: 'row',marginTop:responsiveHeight(2.5)}}>
           <Text style={{marginLeft:responsiveWidth(5)}}>444665654889</Text>
           <Text style={{marginLeft:responsiveWidth(7)}}>14869</Text>
          </View>
          <View style={{flexDirection: 'row',marginTop:responsiveHeight(2.5)}}>
           <Text style={{marginLeft:responsiveWidth(5)}}>444665654889</Text>
           <Text style={{marginLeft:responsiveWidth(7)}}>14869</Text>
          </View>
          <View style={{flexDirection: 'row',marginTop:responsiveHeight(2.5)}}>
           <Text style={{marginLeft:responsiveWidth(5)}}>444665654889</Text>
           <Text style={{marginLeft:responsiveWidth(7)}}>14869</Text>
          </View>
          <View style={{flexDirection: 'row',marginTop:responsiveHeight(2.5)}}>
           <Text style={{marginLeft:responsiveWidth(5)}}>444665654889</Text>
           <Text style={{marginLeft:responsiveWidth(7)}}>14869</Text>
          </View>
          <View style={{flexDirection: 'row',marginTop:responsiveHeight(2.5)}}>
           <Text style={{marginLeft:responsiveWidth(5)}}>444665654889</Text>
           <Text style={{marginLeft:responsiveWidth(7)}}>14869</Text>
          </View>
          <View style={{flexDirection: 'row',marginTop:responsiveHeight(2.5)}}>
           <Text style={{marginLeft:responsiveWidth(5)}}>444665654889</Text>
           <Text style={{marginLeft:responsiveWidth(7)}}>14869</Text>
          </View>
          <View style={{flexDirection: 'row',marginTop:responsiveHeight(2.5)}}>
           <Text style={{marginLeft:responsiveWidth(5)}}>444665654889</Text>
           <Text style={{marginLeft:responsiveWidth(7)}}>14869</Text>
          </View>
          <View style={{flexDirection: 'row',marginTop:responsiveHeight(2.5)}}>
           <Text style={{marginLeft:responsiveWidth(5)}}>444665654889</Text>
           <Text style={{marginLeft:responsiveWidth(7)}}>14869</Text>
          </View>
          </View>
        </View>
      </View>
      {/* my parity record */}
      <View style={{marginTop: responsiveHeight(5.5)}}>
      <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontSize: responsiveFontSize(1.8),
          }}>
         My Parity Record
        </Text>
        <View
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(0.18),
            backgroundColor: '#0D6EFD',
            marginTop: responsiveHeight(1),
          }}
        />
        {/* <ExpandableButton/> */}
        <View style={{marginTop: responsiveHeight(2)}}>
          <CollapsibleList
            title="245646464656"
            subTitle='Fail-68,600.00'
           // content="I am React native developer who makes cool stuffs"
            icon="information-circle"
          />
        </View>
        <View style={{}}>
          <CollapsibleList
            title="245646464656"
            subTitle='Fail-68,600.00'
           // content="I am React native developer who makes cool stuffs"
            icon="information-circle"
          />
        </View>
        <View style={{}}>
          <CollapsibleList
            title="245646464656"
            subTitle='Fail-68,600.00'
           // content="I am React native developer who makes cool stuffs"
            icon="information-circle"
          />
        </View>
        <View style={{}}>
          <CollapsibleList
            title="245646464656"
            subTitle='Fail-68,600.00'
           // content="I am React native developer who makes cool stuffs"
            icon="information-circle"
          />
        </View>
        <View style={{}}>
          <CollapsibleList
            title="245646464656"
            subTitle='Fail-68,600.00'
           // content="I am React native developer who makes cool stuffs"
            icon="information-circle"
          />
        </View>
      </View>
    </View>
    </ScrollView>
    </>
  );
};

export default Win;
