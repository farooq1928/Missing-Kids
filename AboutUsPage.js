import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class AboutUsPage extends Component {

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
    <ScrollView data-layer="d1c00ac6-f5ad-4182-a429-a0642c67223a" style={styles.aboutUsPage}>
        <Svg data-layer="0690a425-c698-4111-930b-7648b3f3fa58" style={styles.aboutUsPage_ellipse5} preserveAspectRatio="none" viewBox="-0.75 -0.75 311.5 662.5" fill="rgba(162, 147, 147, 1)"><SvgPath d="M 155 0 C 240.6041259765625 0 310 147.9699096679688 310 330.5 C 310 513.0300903320312 240.6041259765625 661 155 661 C 69.39586639404297 661 0 513.0300903320312 0 330.5 C 0 147.9699096679688 69.39586639404297 0 155 0 Z"  /></Svg>
        <Svg data-layer="99d7a0a5-3239-4959-b026-f7d6f59917ab" style={styles.aboutUsPage_ellipse6} preserveAspectRatio="none" viewBox="-0.75 -0.75 287.5 714.5" fill="rgba(207, 187, 187, 1)"><SvgPath d="M 143 0 C 221.9767150878906 0 286 159.6104888916016 286 356.5 C 286 553.3895263671875 221.9767150878906 713 143 713 C 64.02328491210938 713 0 553.3895263671875 0 356.5 C 0 159.6104888916016 64.02328491210938 0 143 0 Z"  /></Svg>
        <Svg data-layer="69e4b925-dbfb-4960-b59b-6d4a682a887b" style={styles.aboutUsPage_ellipse7} preserveAspectRatio="none" viewBox="-0.75 -0.75 674.5 796.5" fill="rgba(66, 77, 69, 1)"><SvgPath d="M 336.5 0 C 522.3438110351562 0 673 177.9668121337891 673 397.5 C 673 617.033203125 522.3438110351562 795 336.5 795 C 150.6561889648438 795 0 617.033203125 0 397.5 C 0 177.9668121337891 150.6561889648438 0 336.5 0 Z"  /></Svg>
        <Text data-layer="d652bc8c-b099-4e63-bc86-4ad06e8af745" style={styles.aboutUsPage_muhammadFarooqfarooqsafi1928}>Muhammad 
Farooq


farooqsafi1928@gmail.com
</Text>
        <View data-layer="9eb0c9ae-2573-41fa-8cd3-ee904d0d6dd4" style={styles.aboutUsPage_rectangle39}></View>
        <ReactImage data-layer="b93d085c-3565-4f34-85c8-f468c0661e73" source={require('./assets/beautyplus20180814125846487save.png')} style={styles.aboutUsPage_beautyplus20180814125846487save} />
        <View data-layer="ff0f4eb3-3a5a-43ed-b818-a7b9f063291d" style={styles.aboutUsPage_rectangle38}></View>
        <Text data-layer="eeea668c-f946-44bc-bfd4-519c818f0ab7" style={styles.aboutUsPage_home}>Home</Text>
    </ScrollView>
    );
  }
}

AboutUsPage.propTypes = {

}

AboutUsPage.defaultProps = {

}


const styles = StyleSheet.create({
  "aboutUsPage": {
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
  "aboutUsPage_ellipse5": {
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
  "aboutUsPage_ellipse6": {
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
  "aboutUsPage_ellipse7": {
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
  "aboutUsPage_muhammadFarooqfarooqsafi1928": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(239, 249, 239, 1)",
    "fontSize": 29,
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
    "width": 347,
    "height": 210,
    "left": 22,
    "top": 474
  },
  "aboutUsPage_rectangle39": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(129, 20, 20, 1)",
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
    "height": 169,
    "left": 0,
    "top": 0
  },
  "aboutUsPage_beautyplus20180814125846487save": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 297.5,
    "height": 446.51,
    "left": -13.5,
    "top": 0
  },
  "aboutUsPage_rectangle38": {
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
  "aboutUsPage_home": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(239, 249, 239, 1)",
    "fontSize": 36,
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
    "width": 93,
    "height": 43,
    "left": 217,
    "top": 782
  }
});