import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class PostsPage extends Component {

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
    <ScrollView data-layer="edb45a05-10de-4d90-809d-710ba663ce7a" style={styles.postsPage}>
        <Svg data-layer="434942f3-ec20-4df9-af5e-0bb6210740f3" style={styles.postsPage_ellipse8} preserveAspectRatio="none" viewBox="-0.75 -0.75 468.5 858.5" fill="rgba(119, 110, 110, 1)"><SvgPath d="M 233.5 0 C 362.45849609375 0 467 191.8460083007812 467 428.5 C 467 665.1539916992188 362.45849609375 857 233.5 857 C 104.5415191650391 857 0 665.1539916992188 0 428.5 C 0 191.8460083007812 104.5415191650391 0 233.5 0 Z"  /></Svg>
        <Svg data-layer="419b3615-42ee-4db5-baa1-5ffa63b6a7ff" style={styles.postsPage_ellipse10} preserveAspectRatio="none" viewBox="-0.75 -0.75 510.5 847.5" fill="rgba(117, 85, 85, 1)"><SvgPath d="M 254.5 0 C 395.0564575195312 0 509 189.3835601806641 509 423 C 509 656.616455078125 395.0564575195312 846 254.5 846 C 113.9435424804688 846 0 656.616455078125 0 423 C 0 189.3835601806641 113.9435424804688 0 254.5 0 Z"  /></Svg>
        <View data-layer="f8ccea4b-cc5a-4e3e-8f69-60f35884e3ea" style={styles.postsPage_rectangle23}></View>
        <Text data-layer="38550dfe-77c9-4d26-af30-309c3a854861" style={styles.postsPage_nameAliKhanaddressLahoreJubliTownage9Yearheight2FeetgenderMalecontact03365131508}>Name:
                          Ali khan
Address:
                         Lahore jubli town
Age: 
                        9 year
Height: 
                        2 feet
Gender: 
                          male
contact:
                     03365131508
</Text>
        <View data-layer="be04046b-4015-4495-9ce1-533a527accf5" style={styles.postsPage_rectangle24}></View>
        <Text data-layer="4d2edb4c-5a53-4118-a41e-78cb4cfd7110" style={styles.postsPage_nameAhmadaddressLahoreJubliTownage12Yearheight3FeetgenderMalecontact03365131508}>Name:
                          Ahmad
Address:
                         Lahore jubli town
Age: 
                        12 year
Height: 
                        3 feet
Gender: 
                          male
contact:
                     03365131508
</Text>
        <View data-layer="9179f2b6-7f9a-404c-8761-460867ac26f7" style={styles.postsPage_rectangle22}></View>
        <Text data-layer="d2f39ac6-5438-44df-98f3-c08a11f1b080" style={styles.postsPage_home}>Home</Text>
    </ScrollView>
    );
  }
}

PostsPage.propTypes = {

}

PostsPage.defaultProps = {

}


const styles = StyleSheet.create({
  "postsPage": {
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
  "postsPage_ellipse8": {
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
    "width": 467,
    "height": 857,
    "left": -42,
    "top": 231
  },
  "postsPage_ellipse10": {
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
    "width": 509,
    "height": 846,
    "left": -62,
    "top": -187
  },
  "postsPage_rectangle23": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(113, 26, 26, 1)",
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
    "height": 422,
    "left": 0,
    "top": 0
  },
  "postsPage_nameAliKhanaddressLahoreJubliTownage9Yearheight2FeetgenderMalecontact03365131508": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(32, 165, 32, 1)",
    "fontSize": 21,
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
    "width": 317,
    "height": 399,
    "left": 27,
    "top": 23
  },
  "postsPage_rectangle24": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(191, 34, 34, 1)",
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
    "height": 359,
    "left": 0,
    "top": 445
  },
  "postsPage_nameAhmadaddressLahoreJubliTownage12Yearheight3FeetgenderMalecontact03365131508": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(32, 165, 32, 1)",
    "fontSize": 18,
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
    "width": 317,
    "height": 351,
    "left": 51,
    "top": 476
  },
  "postsPage_rectangle22": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(232, 235, 231, 1)",
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
    "width": 128,
    "height": 36,
    "left": 244,
    "top": 0
  },
  "postsPage_home": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(32, 165, 32, 1)",
    "fontSize": 21,
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
    "width": 65,
    "height": 31,
    "left": 264,
    "top": 1
  }
});