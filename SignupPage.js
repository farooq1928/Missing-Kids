import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class SignupPage extends Component {

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
    <ScrollView data-layer="08ca301c-9822-40a0-b0ee-655dca59237f" style={styles.signupPage}>
        <Svg data-layer="6bed9457-f932-4d38-9041-44f1a8496be0" style={styles.signupPage_ellipse1} preserveAspectRatio="none" viewBox="-0.75 -0.75 760.5 770.5" fill="rgba(172, 216, 94, 1)"><SvgPath d="M 379.5 0 C 589.092041015625 0 759 172.1465301513672 759 384.5 C 759 596.8534545898438 589.092041015625 769 379.5 769 C 169.907958984375 769 0 596.8534545898438 0 384.5 C 0 172.1465301513672 169.907958984375 0 379.5 0 Z"  /></Svg>
        <Svg data-layer="6fdcafb8-f4e8-4c69-9a6c-d2ba4bf0dcb6" style={styles.signupPage_ellipse2} preserveAspectRatio="none" viewBox="-0.75 -0.75 4.5 42.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 9.178162574768066 3 20.5 C 3 31.82183837890625 2.328427076339722 41 1.5 41 C 0.6715729236602783 41 0 31.82183837890625 0 20.5 C 0 9.178162574768066 0.6715729236602783 0 1.5 0 Z"  /></Svg>
        <Svg data-layer="074ee9ff-4b3b-48dc-8389-668846fcd4a5" style={styles.signupPage_ellipse3} preserveAspectRatio="none" viewBox="-0.75 -0.75 723.5 689.5" fill="rgba(36, 178, 84, 1)"><SvgPath d="M 361 0 C 560.374755859375 0 722 154.0140533447266 722 344 C 722 533.9859619140625 560.374755859375 688 361 688 C 161.6252288818359 688 0 533.9859619140625 0 344 C 0 154.0140533447266 161.6252288818359 0 361 0 Z"  /></Svg>
        <ReactImage data-layer="bf3439b8-48b9-4bcd-bd71-f276e1d721e9" source={require('./assets/th328e7c1b.png')} style={styles.signupPage_th328e7c1b} />
        <Svg data-layer="95f1b0fd-b3ed-4b86-aea0-f5f32e56fe67" style={styles.signupPage_line1} preserveAspectRatio="none" viewBox="-0.00177001953125 -0.5 281.37310791015625 2" fill="transparent"><SvgPath d="M 0 1 L 281.3695373535156 0"  /></Svg>
        <Svg data-layer="e4455ae2-0b8a-4928-88fa-3a65b5d1f09b" style={styles.signupPage_line2} preserveAspectRatio="none" viewBox="-0.01068115234375 -0.4998779296875 281.0213623046875 6.999755859375" fill="transparent"><SvgPath d="M 0 0 L 281 6"  /></Svg>
        <Svg data-layer="c2ee7c5e-d7f4-41b4-a45d-c4f1a64c3e91" style={styles.signupPage_line3} preserveAspectRatio="none" viewBox="-0.00177001953125 -0.5 281.5035400390625 2" fill="transparent"><SvgPath d="M 0 0 L 281.5 1"  /></Svg>
        <Svg data-layer="a2d73494-dec1-4863-9b4b-d87c081fccab" style={styles.signupPage_line4} preserveAspectRatio="none" viewBox="-0.00714111328125 -0.49993896484375 279.7642822265625 4.9998779296875" fill="transparent"><SvgPath d="M 0 0 L 279.75 4"  /></Svg>
        <Text data-layer="a5fa7674-7d5b-4f27-9bd5-fbd51d81ef0a" style={styles.signupPage_firstName}>First Name:</Text>
        <Text data-layer="671b89d6-84fe-4d23-a0df-007bfcc01d1e" style={styles.signupPage_lastName}>Last Name:</Text>
        <Text data-layer="1bdd8079-9b38-40b5-aa0d-047381566a0a" style={styles.signupPage_emailAddress}>Email. Address:</Text>
        <Text data-layer="83796912-80fe-4c78-80ad-0cc75aa8120f" style={styles.signupPage_password}>Password:</Text>
        <Svg data-layer="7b11fec0-e66f-48c2-9a18-1f59ecb07a9e" style={styles.signupPage_line5} preserveAspectRatio="none" viewBox="-0.00714111328125 -0.49993896484375 279.7642822265625 4.9998779296875" fill="transparent"><SvgPath d="M 0 0 L 279.75 4"  /></Svg>
        <Text data-layer="b8073e65-3987-4d3c-842a-e66dbf349c2a" style={styles.signupPage_conformPassword}>Conform Password:</Text>
        <View data-layer="810f48b8-f33d-43bc-b587-ed29914b2327" style={styles.signupPage_rectangle1}></View>
        <Text data-layer="0e5d8a7f-1cea-4cde-b94a-c296789efacb" style={styles.signupPage_signUpe39959b1}>Sign up</Text>
        <ReactImage data-layer="10c7a1eb-1eea-48eb-9fcb-7363c1186112" source={require('./assets/th1.png')} style={styles.signupPage_th1} />
        <ReactImage data-layer="06f2b1bb-077b-469e-bf3d-29717c44e010" source={require('./assets/th2.png')} style={styles.signupPage_th2} />
        <ReactImage data-layer="806ee8e3-45f5-4568-856e-2b911dcd39a4" source={require('./assets/thac949b0b.png')} style={styles.signupPage_thac949b0b} />
        <ReactImage data-layer="ee6c09e8-2fcc-41bc-a89b-640e17ad1157" source={require('./assets/th.png')} style={styles.signupPage_th} />
        <Text data-layer="47357720-fda5-4fe6-89bb-57e848482b03" style={styles.signupPage_signUpfe53949f}>Sign up</Text>
        <Text data-layer="656aa4bc-a451-4c2a-9bab-5b8e86d9464b" style={styles.signupPage_signUp593291a2}>Sign up</Text>
        <Text data-layer="eee46ce0-ce95-4814-bc97-f81d850b0880" style={styles.signupPage_signUp}>Sign up</Text>
        <View data-layer="16fe1e91-9218-452e-bb15-402912fc0c82" style={styles.signupPage_rectangle7}></View>
        <Text data-layer="1bfcdc27-8a1d-4f93-9271-7c66080ef55b" style={styles.signupPage_x}><-</Text>
    </ScrollView>
    );
  }
}

SignupPage.propTypes = {

}

SignupPage.defaultProps = {

}


const styles = StyleSheet.create({
  "signupPage": {
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
    "height": 812,
    "left": 0,
    "top": 0
  },
  "signupPage_ellipse1": {
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
    "width": 759,
    "height": 769,
    "left": -102,
    "top": -131
  },
  "signupPage_ellipse2": {
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
    "width": 3,
    "height": 41,
    "left": 37,
    "top": -30
  },
  "signupPage_ellipse3": {
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
    "width": 722,
    "height": 688,
    "left": -112.88,
    "top": -104.75
  },
  "signupPage_th328e7c1b": {
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
    "width": 51,
    "height": 51,
    "left": 150,
    "top": 42
  },
  "signupPage_line1": {
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
    "width": 281.37,
    "height": 2,
    "left": 70.5,
    "top": 186
  },
  "signupPage_line2": {
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
    "width": 281.02,
    "height": 7,
    "left": 70.49,
    "top": 247
  },
  "signupPage_line3": {
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
    "width": 281.5,
    "height": 2,
    "left": 70,
    "top": 313
  },
  "signupPage_line4": {
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
    "width": 279.76,
    "height": 5,
    "left": 71.74,
    "top": 380
  },
  "signupPage_firstName": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
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
    "width": 99,
    "height": 27,
    "left": 70,
    "top": 160
  },
  "signupPage_lastName": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
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
    "width": 97,
    "height": 27,
    "left": 70,
    "top": 220
  },
  "signupPage_emailAddress": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
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
    "width": 129,
    "height": 27,
    "left": 70,
    "top": 287
  },
  "signupPage_password": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
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
    "width": 86,
    "height": 27,
    "left": 72,
    "top": 356
  },
  "signupPage_line5": {
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
    "width": 279.76,
    "height": 5,
    "left": 69.99,
    "top": 425.5
  },
  "signupPage_conformPassword": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
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
    "width": 167,
    "height": 27,
    "left": 72,
    "top": 399
  },
  "signupPage_rectangle1": {
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
    "width": 129.71,
    "height": 44.21,
    "left": 122.64,
    "top": 620.25
  },
  "signupPage_signUpe39959b1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(9, 9, 8, 0.30196078431372547)",
    "fontSize": 30,
    "fontWeight": "700",
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
    "width": 107,
    "height": 40,
    "left": 130,
    "top": 618
  },
  "signupPage_th1": {
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
    "width": 65,
    "height": 65,
    "left": 123,
    "top": 682
  },
  "signupPage_th2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 18,
    "borderTopRightRadius": 18,
    "borderBottomLeftRadius": 18,
    "borderBottomRightRadius": 18,
    "width": 56,
    "height": 56,
    "left": 197,
    "top": 682
  },
  "signupPage_thac949b0b": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 26,
    "borderTopRightRadius": 26,
    "borderBottomLeftRadius": 26,
    "borderBottomRightRadius": 26,
    "width": 51,
    "height": 51,
    "left": 150,
    "top": 42
  },
  "signupPage_th": {
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
    "width": 51,
    "height": 51,
    "left": 150,
    "top": 42
  },
  "signupPage_signUpfe53949f": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(9, 9, 8, 0.30196078431372547)",
    "fontSize": 30,
    "fontWeight": "700",
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
    "width": 107,
    "height": 40,
    "left": 130,
    "top": 618
  },
  "signupPage_signUp593291a2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(9, 9, 8, 0.30196078431372547)",
    "fontSize": 30,
    "fontWeight": "700",
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
    "width": 107,
    "height": 40,
    "left": 130,
    "top": 618
  },
  "signupPage_signUp": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(9, 9, 8, 0.30196078431372547)",
    "fontSize": 30,
    "fontWeight": "700",
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
    "width": 107,
    "height": 40,
    "left": 130,
    "top": 618
  },
  "signupPage_rectangle7": {
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
    "left": 0.43,
    "top": -4.76
  },
  "signupPage_x": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 7, 39, 1)",
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
    "width": 39,
    "height": 47,
    "left": 18,
    "top": -9
  }
});