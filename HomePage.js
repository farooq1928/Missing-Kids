import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class HomePage extends Component {

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
    <ScrollView data-layer="3f5747fb-b0aa-4cc8-8b0a-3234c52ea055" style={styles.homePage}>
        <Svg data-layer="1bba27ad-445f-404f-bc3f-20dead71c58c" style={styles.homePage_ellipse5} preserveAspectRatio="none" viewBox="-0.75 -0.75 311.5 662.5" fill="rgba(162, 147, 147, 1)"><SvgPath d="M 155 0 C 240.6041259765625 0 310 147.9699096679688 310 330.5 C 310 513.0300903320312 240.6041259765625 661 155 661 C 69.39586639404297 661 0 513.0300903320312 0 330.5 C 0 147.9699096679688 69.39586639404297 0 155 0 Z"  /></Svg>
        <Svg data-layer="62b0e8c0-9c84-43d3-8b82-613381c515a8" style={styles.homePage_ellipse6} preserveAspectRatio="none" viewBox="-0.75 -0.75 287.5 714.5" fill="rgba(207, 187, 187, 1)"><SvgPath d="M 143 0 C 221.9767150878906 0 286 159.6104888916016 286 356.5 C 286 553.3895263671875 221.9767150878906 713 143 713 C 64.02328491210938 713 0 553.3895263671875 0 356.5 C 0 159.6104888916016 64.02328491210938 0 143 0 Z"  /></Svg>
        <Svg data-layer="49e6d6fc-2829-482d-8aad-f093956cc029" style={styles.homePage_ellipse7} preserveAspectRatio="none" viewBox="-0.75 -0.75 674.5 796.5" fill="rgba(54, 99, 67, 1)"><SvgPath d="M 336.5 0 C 522.3438110351562 0 673 177.9668121337891 673 397.5 C 673 617.033203125 522.3438110351562 795 336.5 795 C 150.6561889648438 795 0 617.033203125 0 397.5 C 0 177.9668121337891 150.6561889648438 0 336.5 0 Z"  /></Svg>
        <View data-layer="5f0d9e98-bd14-4e0c-8505-bb1ecd565cd3" style={styles.homePage_rectangle10}></View>
        <View data-layer="9c5c476c-f452-48bd-a236-577ef03f6e39" style={styles.homePage_rectangle11}></View>
        <View data-layer="9982ac4e-c958-4bf9-a52b-de82cfe58d80" style={styles.homePage_rectangle12}></View>
        <View data-layer="d7908761-49db-4747-af8b-99befa4dcda0" style={styles.homePage_rectangle13}></View>
        <Text data-layer="af89e9bd-eed0-479b-9cac-f926ebf7bc93" style={styles.homePage_aboutUs}>About Us</Text>
        <Text data-layer="c6e3c2db-bf20-40fa-8793-66236ae3cf69" style={styles.homePage_search}>Search</Text>
        <Text data-layer="25cc15f2-51d7-4803-895d-bb3f1561f445" style={styles.homePage_addPost}>Add Post</Text>
        <Text data-layer="cd339779-82b9-4298-aeb4-dd35245ff017" style={styles.homePage_profile}>Profile</Text>
        <View data-layer="b2e99848-842b-4b4b-9994-a554158d119f" style={styles.homePage_rectangle18}></View>
        <Text data-layer="f7df1a14-2cb9-4b54-809a-9976bc40bc65" style={styles.homePage_logout}>Logout</Text>
        <Text data-layer="58d07c66-2d1f-4177-9d55-ce296dfec250" style={styles.homePage_welcomeToTheMissingKidsApp}>Welcome To The Missing 
Kids App</Text>
        <ReactImage data-layer="7652b4bc-59ed-42e1-a22b-3e46488d452e" source={require('./assets/th6.png')} style={styles.homePage_th6} />
        <ReactImage data-layer="a0b97a0a-0ff8-4096-a039-3581b2ced11c" source={require('./assets/th5.png')} style={styles.homePage_th5} />
        <ReactImage data-layer="df8d7584-8810-4ada-b41c-843391222a34" source={require('./assets/th3.png')} style={styles.homePage_th3} />
    </ScrollView>
    );
  }
}

HomePage.propTypes = {

}

HomePage.defaultProps = {

}


const styles = StyleSheet.create({
  "homePage": {
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
  "homePage_ellipse5": {
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
  "homePage_ellipse6": {
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
  "homePage_ellipse7": {
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
  "homePage_rectangle10": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(30, 32, 21, 1)",
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
    "borderTopLeftRadius": 19,
    "borderTopRightRadius": 19,
    "borderBottomLeftRadius": 19,
    "borderBottomRightRadius": 19,
    "width": 390,
    "height": 24,
    "left": 0,
    "top": 251
  },
  "homePage_rectangle11": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(22, 23, 15, 1)",
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
    "borderTopLeftRadius": 19,
    "borderTopRightRadius": 19,
    "borderBottomLeftRadius": 19,
    "borderBottomRightRadius": 19,
    "width": 395,
    "height": 28,
    "left": -5,
    "top": 170
  },
  "homePage_rectangle12": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(32, 33, 25, 1)",
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
    "borderTopLeftRadius": 19,
    "borderTopRightRadius": 19,
    "borderBottomLeftRadius": 19,
    "borderBottomRightRadius": 19,
    "width": 395,
    "height": 24,
    "left": 0,
    "top": 216
  },
  "homePage_rectangle13": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(16, 17, 9, 1)",
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
    "borderTopLeftRadius": 19,
    "borderTopRightRadius": 19,
    "borderBottomLeftRadius": 19,
    "borderBottomRightRadius": 19,
    "width": 395,
    "height": 24,
    "left": 0,
    "top": 128
  },
  "homePage_aboutUs": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(90, 52, 187, 1)",
    "fontSize": 17,
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
    "width": 74,
    "height": 22,
    "left": 149,
    "top": 251
  },
  "homePage_search": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(90, 52, 187, 1)",
    "fontSize": 18,
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
    "width": 56,
    "height": 24,
    "left": 157,
    "top": 170
  },
  "homePage_addPost": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(90, 52, 187, 1)",
    "fontSize": 17,
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
    "width": 73,
    "height": 22,
    "left": 149,
    "top": 215
  },
  "homePage_profile": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(90, 52, 187, 1)",
    "fontSize": 16,
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
    "width": 50,
    "height": 21,
    "left": 156,
    "top": 128
  },
  "homePage_rectangle18": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(22, 23, 15, 1)",
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
    "borderTopLeftRadius": 19,
    "borderTopRightRadius": 19,
    "borderBottomLeftRadius": 19,
    "borderBottomRightRadius": 19,
    "width": 390,
    "height": 30,
    "left": -5,
    "top": 284
  },
  "homePage_logout": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(90, 52, 187, 1)",
    "fontSize": 21,
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
    "height": 28,
    "left": 161,
    "top": 284
  },
  "homePage_welcomeToTheMissingKidsApp": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(52, 187, 65, 1)",
    "fontSize": 32,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Tempus Sans ITC",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 349,
    "height": 84,
    "left": 21,
    "top": 17
  },
  "homePage_th6": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 124,
    "borderTopRightRadius": 124,
    "borderBottomLeftRadius": 124,
    "borderBottomRightRadius": 124,
    "width": 503.39,
    "height": 378.63,
    "left": -56.69,
    "top": 329.5
  },
  "homePage_th5": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 167,
    "borderTopRightRadius": 167,
    "borderBottomLeftRadius": 167,
    "borderBottomRightRadius": 167,
    "width": 149,
    "height": 149,
    "left": 0,
    "top": 699
  },
  "homePage_th3": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 70,
    "borderTopRightRadius": 70,
    "borderBottomLeftRadius": 70,
    "borderBottomRightRadius": 70,
    "width": 241,
    "height": 143.24,
    "left": 149,
    "top": 695.76
  }
});