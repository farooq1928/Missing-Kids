import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class AddPostPage extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="c0dedb84-6b0e-47ad-854a-a725fe057b9a" style={styles.addPostPage}>
        <Svg data-layer="447cf9a7-7a8a-4e0b-8f58-4f69baeffc95" style={styles.addPostPage_ellipse5} preserveAspectRatio="none" viewBox="-0.75 -0.75 311.5 662.5" fill="rgba(162, 147, 147, 1)"><SvgPath d="M 155 0 C 240.6041259765625 0 310 147.9699096679688 310 330.5 C 310 513.0300903320312 240.6041259765625 661 155 661 C 69.39586639404297 661 0 513.0300903320312 0 330.5 C 0 147.9699096679688 69.39586639404297 0 155 0 Z"  /></Svg>
        <Svg data-layer="42e28248-d0df-4ab0-9f7d-3bbd2adebdb8" style={styles.addPostPage_ellipse6} preserveAspectRatio="none" viewBox="-0.75 -0.75 287.5 714.5" fill="rgba(207, 187, 187, 1)"><SvgPath d="M 143 0 C 221.9767150878906 0 286 159.6104888916016 286 356.5 C 286 553.3895263671875 221.9767150878906 713 143 713 C 64.02328491210938 713 0 553.3895263671875 0 356.5 C 0 159.6104888916016 64.02328491210938 0 143 0 Z"  /></Svg>
        <Svg data-layer="11b4dd23-2290-4661-8be7-0ce704649563" style={styles.addPostPage_ellipse7} preserveAspectRatio="none" viewBox="-0.75 -0.75 674.5 796.5" fill="rgba(221, 239, 226, 1)"><SvgPath d="M 336.5 0 C 522.3438110351562 0 673 177.9668121337891 673 397.5 C 673 617.033203125 522.3438110351562 795 336.5 795 C 150.6561889648438 795 0 617.033203125 0 397.5 C 0 177.9668121337891 150.6561889648438 0 336.5 0 Z"  /></Svg>
        <Svg data-layer="792cde7b-c73d-40cf-8301-b3dd4ee5d89c" style={styles.addPostPage_line7} preserveAspectRatio="none" viewBox="-0.0025634765625 -0.5 390.005126953125 3" fill="transparent"><SvgPath d="M 0 0 L 390 2"  /></Svg>
        <View data-layer="52f6caef-86ef-4b10-8ec6-f4dec1b8d588" style={styles.addPostPage_rectangle25}></View>
        <Text data-layer="de4ec7ae-fffe-4577-87e6-79ead2693353" style={styles.addPostPage_isYourChildMissing}>Is Your Child Missing</Text>
        <View data-layer="6ac4ed72-43c9-4186-8f75-1485d3964468" style={styles.addPostPage_rectangle26}></View>
        <Text data-layer="37a784c5-cd21-4a5d-8f7f-783c3682b6a8" style={styles.addPostPage_nameAddressAgeHeightGenderContact}>Name:

                          
Address:

                         
Age: 

                        
Height: 

                     
Gender: 

                         
contact:
                     
</Text>
        <View data-layer="ac83d149-b7f1-4453-9873-ef3a234cf3f8" style={styles.addPostPage_rectangle27}></View>
        <View data-layer="4a80664f-2168-4e4e-87a2-14292eeae262" style={styles.addPostPage_rectangle28}></View>
        <View data-layer="b37bb6c8-a0fa-4925-85f0-e9e1aeee7d1c" style={styles.addPostPage_rectangle29}></View>
        <View data-layer="d4ba7308-3e2d-4de6-9e77-3d2a6713e5f9" style={styles.addPostPage_rectangle30}></View>
        <View data-layer="06dc3d67-1102-4fc1-8fdc-ce434da15a4e" style={styles.addPostPage_rectangle31}></View>
        <View data-layer="d4e1a83e-d1a2-4dcf-a62e-09004108ec88" style={styles.addPostPage_rectangle32}></View>
        <View data-layer="06fe66e4-4289-4cd4-bac4-cdde0202cb9a" style={styles.addPostPage_rectangle33}></View>
        <Text data-layer="a78fd8ea-2311-4827-894d-9ffedbfcc472" style={styles.addPostPage_save}>Save</Text>
        <View data-layer="c9f00ad3-33ac-42ff-b68d-73d883f0ac56" style={styles.addPostPage_rectangle38}></View>
        <Text data-layer="e3aa8868-c6d7-49cc-866e-312cdd89f947" style={styles.addPostPage_home}>Home</Text>
    </ScrollView>
    );
  }
}

AddPostPage.propTypes = {

}

AddPostPage.defaultProps = {

}


const styles = StyleSheet.create({
  "addPostPage": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 390,
    "height": 844,
    "left": 0,
    "top": 0
  },
  "addPostPage_ellipse5": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 310,
    "height": 661,
    "left": -26,
    "top": -41
  },
  "addPostPage_ellipse6": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 286,
    "height": 713,
    "left": 210,
    "top": -55
  },
  "addPostPage_ellipse7": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 673,
    "height": 795,
    "left": -147,
    "top": -68
  },
  "addPostPage_line7": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 390.01,
    "height": 3,
    "left": 0.5,
    "top": 107
  },
  "addPostPage_rectangle25": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(217, 172, 172, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 390,
    "height": 108,
    "left": 0,
    "top": 0
  },
  "addPostPage_isYourChildMissing": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(4, 32, 4, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Wide Latin",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 367,
    "height": 24,
    "left": 23,
    "top": 54
  },
  "addPostPage_rectangle26": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(220, 176, 176, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 249,
    "height": 642,
    "left": 1,
    "top": 135
  },
  "addPostPage_nameAddressAgeHeightGenderContact": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(4, 32, 4, 1)",
    "fontSize": 28,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Wide Latin",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 220,
    "height": 612,
    "left": 16,
    "top": 150
  },
  "addPostPage_rectangle27": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(245, 237, 237, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 239,
    "height": 52,
    "left": 114,
    "top": 188
  },
  "addPostPage_rectangle28": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(245, 237, 237, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 239,
    "height": 52,
    "left": 114,
    "top": 494
  },
  "addPostPage_rectangle29": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(245, 237, 237, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 239,
    "height": 52,
    "left": 114,
    "top": 392
  },
  "addPostPage_rectangle30": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(245, 237, 237, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 239,
    "height": 52,
    "left": 114,
    "top": 290
  },
  "addPostPage_rectangle31": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(245, 237, 237, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 239,
    "height": 52,
    "left": 117,
    "top": 596
  },
  "addPostPage_rectangle32": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(245, 237, 237, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 239,
    "height": 52,
    "left": 114,
    "top": 710
  },
  "addPostPage_rectangle33": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(96, 161, 54, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 149,
    "height": 58,
    "left": 24,
    "top": 776
  },
  "addPostPage_save": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(4, 32, 4, 1)",
    "fontSize": 27,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Wide Latin",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 111,
    "height": 33,
    "left": 43,
    "top": 788
  },
  "addPostPage_rectangle38": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(96, 161, 54, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 149,
    "height": 58,
    "left": 195,
    "top": 776
  },
  "addPostPage_home": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(239, 249, 239, 1)",
    "fontSize": 42,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Tahoma",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 109,
    "height": 51,
    "left": 213,
    "top": 781
  }
});