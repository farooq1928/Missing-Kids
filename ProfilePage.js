import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class ProfilePage extends Component {

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
    <ScrollView data-layer="5b096bd2-4725-4f0f-ade6-4a7887ecdb15" style={styles.profilePage}>
        <Svg data-layer="83b7e62e-989f-4570-8b08-31aeed8ea1a6" style={styles.profilePage_ellipse5} preserveAspectRatio="none" viewBox="-0.75 -0.75 311.5 662.5" fill="rgba(162, 147, 147, 1)"><SvgPath d="M 155 0 C 240.6041259765625 0 310 147.9699096679688 310 330.5 C 310 513.0300903320312 240.6041259765625 661 155 661 C 69.39586639404297 661 0 513.0300903320312 0 330.5 C 0 147.9699096679688 69.39586639404297 0 155 0 Z"  /></Svg>
        <Svg data-layer="4c6e1c53-e4c6-42fd-9e03-e844a7a987fd" style={styles.profilePage_ellipse6} preserveAspectRatio="none" viewBox="-0.75 -0.75 287.5 714.5" fill="rgba(207, 187, 187, 1)"><SvgPath d="M 143 0 C 221.9767150878906 0 286 159.6104888916016 286 356.5 C 286 553.3895263671875 221.9767150878906 713 143 713 C 64.02328491210938 713 0 553.3895263671875 0 356.5 C 0 159.6104888916016 64.02328491210938 0 143 0 Z"  /></Svg>
        <Svg data-layer="13b52029-cb74-403f-a360-5f3ab70b6a69" style={styles.profilePage_ellipse7} preserveAspectRatio="none" viewBox="-0.75 -0.75 674.5 796.5" fill="rgba(27, 174, 68, 1)"><SvgPath d="M 336.5 0 C 522.3438110351562 0 673 177.9668121337891 673 397.5 C 673 617.033203125 522.3438110351562 795 336.5 795 C 150.6561889648438 795 0 617.033203125 0 397.5 C 0 177.9668121337891 150.6561889648438 0 336.5 0 Z"  /></Svg>
        <ReactImage data-layer="e8792634-bf06-43e0-b0e4-d5e265b223f2" source={require('./assets/beautyplus20180815224943413save.png')} style={styles.profilePage_beautyplus20180815224943413save} />
        <View data-layer="b3573122-bf35-46cb-8914-bef56d639405" style={styles.profilePage_rectangle19}></View>
        <Text data-layer="de73e7f5-7cda-487e-99bb-8be56476ef91" style={styles.profilePage_posts}>Posts</Text>
        <View data-layer="9b5617a7-9b03-479e-b293-0584ee24bde1" style={styles.profilePage_rectangle20}></View>
        <Text data-layer="41e549ed-2b84-43bd-a6c7-852a28c49a5e" style={styles.profilePage_editInfo}>Edit Info</Text>
        <Text data-layer="798c053c-0bda-4d5e-8754-a49b9b2c4ac2" style={styles.profilePage_muhammdFarooq}>Muhammd Farooq</Text>
        <Svg data-layer="1d3f0c5d-efea-4e7d-8473-afde487f56fe" style={styles.profilePage_line6} preserveAspectRatio="none" viewBox="-0.0252685546875 -2.4998779296875 396.050537109375 8.999755859375" fill="transparent"><SvgPath d="M 0 0 L 396 4"  /></Svg>
        <View data-layer="9348dadf-9c7e-4b95-89ef-81969658b64c" style={styles.profilePage_rectangle34}></View>
        <Text data-layer="292da034-af2b-45a7-9d24-0c4bdb2e86c3" style={styles.profilePage_home}>Home</Text>
    </ScrollView>
    );
  }
}

ProfilePage.propTypes = {

}

ProfilePage.defaultProps = {

}


const styles = StyleSheet.create({
  "profilePage": {
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
  "profilePage_ellipse5": {
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
  "profilePage_ellipse6": {
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
  "profilePage_ellipse7": {
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
  "profilePage_beautyplus20180815224943413save": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 69,
    "borderTopRightRadius": 69,
    "borderBottomLeftRadius": 69,
    "borderBottomRightRadius": 69,
    "width": 207,
    "height": 137.5,
    "left": 91.5,
    "top": 0
  },
  "profilePage_rectangle19": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(39, 8, 8, 1)",
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
    "borderTopLeftRadius": 42,
    "borderTopRightRadius": 42,
    "borderBottomLeftRadius": 42,
    "borderBottomRightRadius": 42,
    "width": 401,
    "height": 54,
    "left": -5,
    "top": 375
  },
  "profilePage_posts": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(29, 183, 38, 1)",
    "fontSize": 43,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Snap ITC",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 140,
    "height": 56,
    "left": 108,
    "top": 374
  },
  "profilePage_rectangle20": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(39, 8, 8, 1)",
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
    "borderTopLeftRadius": 42,
    "borderTopRightRadius": 42,
    "borderBottomLeftRadius": 42,
    "borderBottomRightRadius": 42,
    "width": 401,
    "height": 54,
    "left": -5,
    "top": 302
  },
  "profilePage_editInfo": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(29, 183, 38, 1)",
    "fontSize": 34,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Snap ITC",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 183,
    "height": 43,
    "left": 116,
    "top": 302
  },
  "profilePage_muhammdFarooq": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(6, 25, 7, 1)",
    "fontSize": 29,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Snap ITC",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 276,
    "height": 37,
    "left": 57,
    "top": 160.54
  },
  "profilePage_line6": {
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
    "width": 396.05,
    "height": 9,
    "left": 0.47,
    "top": 224
  },
  "profilePage_rectangle34": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(39, 8, 8, 1)",
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
    "borderTopLeftRadius": 42,
    "borderTopRightRadius": 42,
    "borderBottomLeftRadius": 42,
    "borderBottomRightRadius": 42,
    "width": 401,
    "height": 54,
    "left": -5,
    "top": 458
  },
  "profilePage_home": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(108, 183, 108, 1)",
    "fontSize": 31,
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
    "width": 159,
    "height": 38,
    "left": 116,
    "top": 472
  }
});