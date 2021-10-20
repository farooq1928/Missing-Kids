import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class ProfileInfoPage extends Component {

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
    <ScrollView data-layer="022ea74e-e0d5-40de-9b24-6cf0f79cac43" style={styles.profileInfoPage}>
        <Svg data-layer="f1bd368e-8b89-4fa5-be5f-5cbc20d04bb6" style={styles.profileInfoPage_path1} preserveAspectRatio="none" viewBox="-0.75 -0.75 527.5263671875 856.3343505859375" fill="rgba(59, 49, 49, 1)"><SvgPath d="M 263.01318359375 0 C 408.2713928222656 0 526.0263671875 191.3612060546875 526.0263671875 427.4171752929688 C 526.0263671875 663.47314453125 408.2713928222656 854.8343505859375 263.01318359375 854.8343505859375 C 117.7550354003906 854.8343505859375 0 663.47314453125 0 427.4171752929688 C 0 191.3612060546875 117.7550354003906 0 263.01318359375 0 Z"  /></Svg>
        <Text data-layer="bff41e6f-eba7-4d93-87b2-bb9c787637b5" style={styles.profileInfoPage_nameMfarooquserIdFarooq124genderMaleaddressLahorecontact03365131508}>Name:
     M.Farooq

User Id: 
     farooq124

Gender:
       Male

Address:
        Lahore

Contact:
       03365131508</Text>
        <Svg data-layer="181ea307-588d-4b2a-a440-5168dccf5e4b" style={styles.profileInfoPage_polygon1} preserveAspectRatio="none" viewBox="-0.75 -0.75 336.5 277.5" fill="rgba(232, 67, 67, 1)"><SvgPath d="M 167.4999847412109 0 L 335 276 L 0 276 Z"  /></Svg>
        <Svg data-layer="fa35c5ac-4835-4f26-896f-8ab8c5eef671" style={styles.profileInfoPage_polygon2} preserveAspectRatio="none" viewBox="-0.75 -0.75 336.5 277.5" fill="rgba(207, 33, 33, 1)"><SvgPath d="M 167.4999847412109 0 L 335 276 L 0 276 Z"  /></Svg>
        <View data-layer="b300540e-0a1a-4d76-a145-340135a6d14f" style={styles.profileInfoPage_rectangle21}></View>
        <Text data-layer="61100a80-8ea1-4395-8a06-ccdc2189f398" style={styles.profileInfoPage_save}>Save</Text>
        <View data-layer="b0a39c3c-51a9-4b96-9e9b-5f36b9e01504" style={styles.profileInfoPage_rectangle22}></View>
        <Text data-layer="49385ac7-fb7f-43c4-a0c0-e8c087b80c04" style={styles.profileInfoPage_home}>Home</Text>
    </ScrollView>
    );
  }
}

ProfileInfoPage.propTypes = {

}

ProfileInfoPage.defaultProps = {

}


const styles = StyleSheet.create({
  "profileInfoPage": {
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
  "profileInfoPage_path1": {
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
    "width": 526.03,
    "height": 854.83,
    "left": -66.03,
    "top": -142.19
  },
  "profileInfoPage_nameMfarooquserIdFarooq124genderMaleaddressLahorecontact03365131508": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(238, 245, 238, 1)",
    "fontSize": 28,
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
    "width": 322,
    "height": 504,
    "left": 18,
    "top": 44
  },
  "profileInfoPage_polygon1": {
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
    "width": 335,
    "height": 276,
    "left": -167,
    "top": 568
  },
  "profileInfoPage_polygon2": {
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
    "width": 335,
    "height": 276,
    "left": 223,
    "top": 568
  },
  "profileInfoPage_rectangle21": {
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
    "left": 23,
    "top": 641
  },
  "profileInfoPage_save": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(238, 245, 238, 1)",
    "fontSize": 42,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Meiryo",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 106,
    "height": 63,
    "left": 45,
    "top": 636
  },
  "profileInfoPage_rectangle22": {
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
    "left": 223,
    "top": 15
  },
  "profileInfoPage_home": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(238, 245, 238, 1)",
    "fontSize": 42,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Meiryo",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 130,
    "height": 63,
    "left": 225,
    "top": 15
  }
});