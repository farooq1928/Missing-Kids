import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class ForgetAccount extends Component {

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
    <ScrollView data-layer="f568149a-ea39-467e-bede-ba1273cc3233" style={styles.forgetAccount}>
        <Svg data-layer="ff6ef303-063a-4e77-a87f-d1c18e37a224" style={styles.forgetAccount_ellipse4} preserveAspectRatio="none" viewBox="-0.75 -0.75 659.5 702.5" fill="rgba(183, 165, 165, 1)"><SvgPath d="M 329 0 C 510.70166015625 0 658 156.9242095947266 658 350.5 C 658 544.0758056640625 510.70166015625 701 329 701 C 147.2983245849609 701 0 544.0758056640625 0 350.5 C 0 156.9242095947266 147.2983245849609 0 329 0 Z"  /></Svg>
        <Text data-layer="873f6a18-5187-402e-983f-2330b5c642e6" style={styles.forgetAccount_findYourAccount}>Find Your Account</Text>
        <Text data-layer="83b9397b-e90d-4980-a518-308b2b1ada0a" style={styles.forgetAccount_pleaseEnterYourEmailAddress}>Please enter your email address</Text>
        <View data-layer="9643c202-3ce1-4edb-9bf4-bf22f9a71599" style={styles.forgetAccount_rectangle8}></View>
        <View data-layer="0ba7649e-db97-426f-a18f-33236d76350b" style={styles.forgetAccount_rectangle1de22d423}></View>
        <View data-layer="689cf4c9-4fe0-4e83-be44-c60dfeeb8847" style={styles.forgetAccount_rectangle1}></View>
        <Text data-layer="04c70805-85c9-45c2-b36b-851f74774681" style={styles.forgetAccount_search}>search</Text>
        <Text data-layer="a1fa5fbf-8f6f-413f-ae25-b5d81cf09505" style={styles.forgetAccount_cancel}>cancel</Text>
        <View data-layer="7932e995-9ff9-46d2-9aa8-cf69a309ab2a" style={styles.forgetAccount_rectangle7}></View>
        <Text data-layer="1eb48ac9-4c4a-40aa-be14-7cb2ae7ddcb3" style={styles.forgetAccount_x}><-</Text>
    </ScrollView>
    );
  }
}

ForgetAccount.propTypes = {

}

ForgetAccount.defaultProps = {

}


const styles = StyleSheet.create({
  "forgetAccount": {
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
  "forgetAccount_ellipse4": {
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
    "width": 658,
    "height": 701,
    "left": -132,
    "top": -92
  },
  "forgetAccount_findYourAccount": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(90, 52, 187, 1)",
    "fontSize": 35,
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
    "width": 300,
    "height": 47,
    "left": 34,
    "top": 44
  },
  "forgetAccount_pleaseEnterYourEmailAddress": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(90, 52, 187, 1)",
    "fontSize": 23,
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
    "width": 342,
    "height": 31,
    "left": 24,
    "top": 176
  },
  "forgetAccount_rectangle8": {
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
    "borderTopLeftRadius": 62,
    "borderTopRightRadius": 62,
    "borderBottomLeftRadius": 62,
    "borderBottomRightRadius": 62,
    "width": 321,
    "height": 65,
    "left": 45,
    "top": 248
  },
  "forgetAccount_rectangle1de22d423": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(49, 212, 71, 1)",
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
    "borderTopLeftRadius": 26,
    "borderTopRightRadius": 26,
    "borderBottomLeftRadius": 26,
    "borderBottomRightRadius": 26,
    "width": 121.34,
    "height": 30.73,
    "left": 234.16,
    "top": 356.4
  },
  "forgetAccount_rectangle1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(49, 212, 71, 1)",
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
    "borderTopLeftRadius": 26,
    "borderTopRightRadius": 26,
    "borderBottomLeftRadius": 26,
    "borderBottomRightRadius": 26,
    "width": 101.71,
    "height": 31.7,
    "left": 82.87,
    "top": 355.76
  },
  "forgetAccount_search": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(90, 52, 187, 1)",
    "fontSize": 23,
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
    "width": 69,
    "height": 31,
    "left": 256,
    "top": 354
  },
  "forgetAccount_cancel": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(90, 52, 187, 1)",
    "fontSize": 23,
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
    "width": 68,
    "height": 31,
    "left": 96,
    "top": 354
  },
  "forgetAccount_rectangle7": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(134, 216, 99, 1)",
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
    "width": 69.94,
    "height": 42.15,
    "left": 0.36,
    "top": 453.24
  },
  "forgetAccount_x": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(90, 52, 187, 1)",
    "fontSize": 42,
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
    "width": 47,
    "height": 56,
    "left": 0,
    "top": 440
  }
});