import React from 'react'
import { 
  SafeAreaView, 
  Text, 
  View, 
  StatusBar, 
  Image,
  StyleSheet,
  Dimensions, 
} from "react-native";
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from '../assets/colors/colors';

const {width, height} = Dimensions.get('window');

const data = [
  {
    title: 'Get real-time healthcare from doctors anywhere in the world',
    text: '',
    image: require('../assets/images/onboard1.png'),
    bg: colors.white,
  },
  {
    title: 'Track your medical records and health goals easily and quickly',
    text: '',
    image: require('../assets/images/onboard2.png'),
    bg: colors.white,
  },
  {
    title: 'Secure your health records',
    text: "",
    image: require('../assets/images/onboard3.png'),
    bg: colors.white,
  },
];

const Onboard = (props) => {

  const renderItem = ({item}) => {
    return (
      <View style={[styles.slide, {backgroundColor: item.bg}]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };

  const keyExtractor = (item) => item.title;

  const renderNextButton = () => {
    return (
      <View style={styles.button}>
        <Text style={styles.btnText}>Next</Text>
      </View>
    );
  };

  const renderSkipButton = () => {
    return (
      <View style={styles.skipTextWrapper}>
        <Text style={styles.btnText}>Skip</Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.button}>
        <Text style={styles.btnText}>Start</Text>
      </View>
    );
  };

  const handleDone = () => {
    props.handleDone();
  }

  return (
    <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor={colors.green} />
        <AppIntroSlider
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          renderDoneButton={renderDoneButton}
          renderSkipButton={renderSkipButton}
          renderNextButton={renderNextButton}
          bottomButton
          showSkipButton
          data={data}
          onDone={handleDone}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 96, // Add padding to offset large buttons and pagination in bottom of page
    
  },
  image: {
    height: '50%',
    width,resizeMode: 'contain',
    marginTop: 32,
  },
  title: {
    fontSize: 24,
    color: colors.black,
    textAlign: 'center',
    fontFamily: '',
    marginHorizontal: 40,
  },
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    backgroundColor: colors.grey,
  },
  skipTextWrapper: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: colors.green,
  },
  activeDotStyle: {
    bottom: 30,
    backgroundColor: colors.green,
    width: 20,
  },
  dotStyle: {
    bottom: 30,
    backgroundColor: colors.grey,
  },
});

export default Onboard;