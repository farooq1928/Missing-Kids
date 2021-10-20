import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class SearchPage extends Component {

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
    <ScrollView data-layer="3a45feb1-d4f5-4539-9a8f-974b2993b2dd" style={styles.searchPage}>
        <Svg data-layer="823c587e-6035-4b15-b032-60245b3eddf2" style={styles.searchPage_ellipse5} preserveAspectRatio="none" viewBox="-0.75 -0.75 311.5 662.5" fill="rgba(162, 147, 147, 1)"><SvgPath d="M 155 0 C 240.6041259765625 0 310 147.9699096679688 310 330.5 C 310 513.0300903320312 240.6041259765625 661 155 661 C 69.39586639404297 661 0 513.0300903320312 0 330.5 C 0 147.9699096679688 69.39586639404297 0 155 0 Z"  /></Svg>
        <Svg data-layer="cab82b5a-1c51-460c-ab77-9d281a019f6c" style={styles.searchPage_ellipse6} preserveAspectRatio="none" viewBox="-0.75 -0.75 287.5 714.5" fill="rgba(207, 187, 187, 1)"><SvgPath d="M 143 0 C 221.9767150878906 0 286 159.6104888916016 286 356.5 C 286 553.3895263671875 221.9767150878906 713 143 713 C 64.02328491210938 713 0 553.3895263671875 0 356.5 C 0 159.6104888916016 64.02328491210938 0 143 0 Z"  /></Svg>
        <Svg data-layer="2b761264-ab87-4fc2-86ca-81b2d2b4c3de" style={styles.searchPage_ellipse7} preserveAspectRatio="none" viewBox="-0.75 -0.75 674.5 796.5" fill="rgba(59, 209, 101, 1)"><SvgPath d="M 336.5 0 C 522.3438110351562 0 673 177.9668121337891 673 397.5 C 673 617.033203125 522.3438110351562 795 336.5 795 C 150.6561889648438 795 0 617.033203125 0 397.5 C 0 177.9668121337891 150.6561889648438 0 336.5 0 Z"  /></Svg>
        <Svg data-layer="441dd8b1-97d6-43a6-9f86-28da7591e8e8" style={styles.searchPage_line8} preserveAspectRatio="none" viewBox="-0.0013427734375 -0.5 390.0025634765625 2" fill="transparent"><SvgPath d="M 0 0 L 390 1"  /></Svg>
        <Text data-layer="fa52cd16-792e-461c-aa25-fd1989c44b14" style={styles.searchPage_searching}>Searching</Text>
        <Text data-layer="eaeab7a7-5cb9-4833-8836-49670b732dc6" style={styles.searchPage_nameOrAge}>Name or Age:</Text>
        <View data-layer="deee9ba8-bf5b-4c9a-979a-325e58d95569" style={styles.searchPage_rectangle35}></View>
        <View data-layer="8880d46b-8451-4420-8542-d89bfb2d6091" style={styles.searchPage_rectangle36}></View>
        <Text data-layer="b5322046-01cf-4c55-848d-c812928c8147" style={styles.searchPage_search}>Search</Text>
        <View data-layer="1512bce9-09ab-4cfe-9323-1d709969f426" style={styles.searchPage_rectangle37}></View>
        <Text data-layer="17b174fd-3cbb-404f-a84d-166ab4150d7c" style={styles.searchPage_back}>Back</Text>
    </ScrollView>
    );
  }
}

SearchPage.propTypes = {

}

SearchPage.defaultProps = {

}


const styles = StyleSheet.create({
  "searchPage": {
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
  "searchPage_ellipse5": {
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
  "searchPage_ellipse6": {
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
  "searchPage_ellipse7": {
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
  "searchPage_line8": {
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
    "width": 390,
    "height": 2,
    "left": 0.5,
    "top": 102
  },
  "searchPage_searching": {
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
    "width": 268,
    "height": 38,
    "left": 50,
    "top": 34
  },
  "searchPage_nameOrAge": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(5, 42, 5, 1)",
    "fontSize": 24,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Viner Hand ITC",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 145,
    "height": 39,
    "left": 19,
    "top": 142
  },
  "searchPage_rectangle35": {
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
    "borderTopLeftRadius": 23,
    "borderTopRightRadius": 23,
    "borderBottomLeftRadius": 23,
    "borderBottomRightRadius": 23,
    "width": 223,
    "height": 45,
    "left": 79,
    "top": 208
  },
  "searchPage_rectangle36": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(83, 6, 6, 1)",
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
    "borderTopLeftRadius": 31,
    "borderTopRightRadius": 31,
    "borderBottomLeftRadius": 31,
    "borderBottomRightRadius": 31,
    "width": 99,
    "height": 57,
    "left": 184,
    "top": 302
  },
  "searchPage_search": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(44, 209, 44, 1)",
    "fontSize": 24,
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
    "width": 72,
    "height": 29,
    "left": 195,
    "top": 315
  },
  "searchPage_rectangle37": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(83, 6, 6, 1)",
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
    "borderTopLeftRadius": 31,
    "borderTopRightRadius": 31,
    "borderBottomLeftRadius": 31,
    "borderBottomRightRadius": 31,
    "width": 99,
    "height": 57,
    "left": 74,
    "top": 301
  },
  "searchPage_back": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(44, 209, 44, 1)",
    "fontSize": 24,
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
    "width": 50,
    "height": 29,
    "left": 92,
    "top": 313
  }
});