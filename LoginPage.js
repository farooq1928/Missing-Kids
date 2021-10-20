import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class LoginPage extends Component {

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
    <ScrollView data-layer="df613c31-86ce-433e-b26c-65b5b901bd19" style={styles.loginPage}>
        <Svg data-layer="8b9f99da-48bd-4887-ae77-50d8c0a7c517" style={styles.loginPage_ellipse1} preserveAspectRatio="none" viewBox="-0.75 -0.75 376.5 435.5" fill="rgba(195, 207, 131, 1)"><SvgPath d="M 187.5 0 C 291.0533752441406 0 375 97.15421295166016 375 217 C 375 336.8457946777344 291.0533752441406 434 187.5 434 C 83.94661712646484 434 0 336.8457946777344 0 217 C 0 97.15421295166016 83.94661712646484 0 187.5 0 Z"  /></Svg>
        <View data-layer="b9a032d4-5f61-4036-b170-6883b0df344a" style={styles.loginPage_rectangle1}></View>
        <ReactImage data-layer="78573a55-bf46-4196-9192-b0141b58e71b" source={require('./assets/th.png')} style={styles.loginPage_th} />
        <Text data-layer="f779e48d-e894-430f-9caa-33e27e4a38a7" style={styles.loginPage_userName}>User Name:</Text>
        <Text data-layer="2a48635b-1e8f-46c1-867a-4b7f1239d08d" style={styles.loginPage_password}>Password:</Text>
        <View data-layer="5d640bf3-b082-446b-b7be-0bf1b8fe5f3a" style={styles.loginPage_rectangle2}></View>
        <View data-layer="041a3c9d-5b3b-4db9-8426-e53f1469ed3c" style={styles.loginPage_rectangle3}></View>
        <View data-layer="6c375bec-c801-4b3a-a988-fbf56a1e6244" style={styles.loginPage_rectangle4}></View>
        <Text data-layer="a7178cfa-8aaa-4555-9005-36ae99b89d25" style={styles.loginPage_forgottenPassword}>Forgotten Password</Text>
        <View data-layer="48e357ee-14b6-4196-9b10-2947abb126c5" style={styles.loginPage_rectangle6}></View>
        <Text data-layer="a052bcc1-faab-4537-ac03-a1ed4879e966" style={styles.loginPage_createNewAccount}>Create new Account</Text>
        <Text data-layer="236d40c0-9c5e-496e-b966-ed274eb81472" style={styles.loginPage_login}>login</Text>
    </ScrollView>
    );
  }
}

LoginPage.propTypes = {

}

LoginPage.defaultProps = {

}


const styles = StyleSheet.create({
  "loginPage": {
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
    "width": 375,
    "height": 728,
    "left": 0,
    "top": 0
  },
  "loginPage_ellipse1": {
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
    "width": 375,
    "height": 434,
    "left": 0,
    "top": 258
  },
  "loginPage_rectangle1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(172, 185, 160, 1)",
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
    "width": 375,
    "height": 487,
    "left": 0,
    "top": 0
  },
  "loginPage_th": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 33,
    "borderTopRightRadius": 33,
    "borderBottomLeftRadius": 33,
    "borderBottomRightRadius": 33,
    "width": 65,
    "height": 65,
    "left": 144,
    "top": 41
  },
  "loginPage_userName": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 25,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 128,
    "height": 33,
    "left": 106,
    "top": 154
  },
  "loginPage_password": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 26,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 113,
    "height": 35,
    "left": 117,
    "top": 243.5
  },
  "loginPage_rectangle2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
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
    "borderTopLeftRadius": 28,
    "borderTopRightRadius": 28,
    "borderBottomLeftRadius": 28,
    "borderBottomRightRadius": 28,
    "width": 175,
    "height": 33,
    "left": 88,
    "top": 196
  },
  "loginPage_rectangle3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
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
    "borderTopLeftRadius": 28,
    "borderTopRightRadius": 28,
    "borderBottomLeftRadius": 28,
    "borderBottomRightRadius": 28,
    "width": 175,
    "height": 33,
    "left": 91,
    "top": 293
  },
  "loginPage_rectangle4": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(34, 219, 102, 1)",
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
    "width": 382,
    "height": 44,
    "left": 0,
    "top": 357
  },
  "loginPage_forgottenPassword": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 25,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 213,
    "height": 33,
    "left": 81,
    "top": 421
  },
  "loginPage_rectangle6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(92, 71, 143, 1)",
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
    "borderTopLeftRadius": 24,
    "borderTopRightRadius": 24,
    "borderBottomLeftRadius": 24,
    "borderBottomRightRadius": 24,
    "width": 262,
    "height": 40,
    "left": 63,
    "top": 532
  },
  "loginPage_createNewAccount": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(154, 212, 148, 1)",
    "fontSize": 25,
    "fontWeight": "700",
    "fontStyle": "italic",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 233,
    "height": 33,
    "left": 81,
    "top": 532
  },
  "loginPage_login": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(90, 52, 187, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "italic",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 36,
    "height": 20,
    "left": 154,
    "top": 369
  }
});