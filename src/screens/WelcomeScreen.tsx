import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  GestureResponderEvent,
  StatusBar,
  Alert,
} from 'react-native';
import {
  ArrowLeft,
  FileArrowUp,
  WechatLogo,
  Globe,
} from 'phosphor-react-native';
import { Icons, Images } from '../theme/Theme';

interface WelcomeScreenProps {
  navigation?: {
    goBack: () => void;
  };
  patientName?: string;
  onUploadReports?: (event: GestureResponderEvent) => void;
  onTalkToZivankh?: (event: GestureResponderEvent) => void;
  onLanguagePress?: (event: GestureResponderEvent) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  navigation,
  patientName = 'Abc patient',
  onUploadReports,
  onTalkToZivankh,
  onLanguagePress,
}) => {
  const handleBack = () => {
    if (navigation?.goBack) {
      navigation.goBack();
    }
  };

  const handleUploadReports = (e: GestureResponderEvent) => {
    if (onUploadReports) {
      onUploadReports(e);
    } 
    // Alert.alert(
    //   'Upload Medical Reports',
    //   'You can upload your medical reports for better assistance.',
    //   [
    //     { text: 'Upload', onPress: () => console.log('Upload pressed') },
    //     { text: 'Cancel', style: 'cancel' },
    //   ]
    // );
  };

  const handleTalkToZivankh = (e: GestureResponderEvent) => {
    if (onTalkToZivankh) {
      onTalkToZivankh(e);
    } 
    // Alert.alert(
    //   'Talk to ZIVANKH',
    //   'You can start a conversation with ZIVANKH for assistance.',
    //   [
    //     { text: 'Start Chat', onPress: () => console.log('Chat started') },
    //     { text: 'Cancel', style: 'cancel' },
    //   ]
    // );
  };

  const handleLanguagePress = (e: GestureResponderEvent) => {
    if (onLanguagePress) {
      onLanguagePress(e);
    } 
      // Alert.prompt(
      //   'Select Language',
      //   'Please select your preferred language:',
      //   [
      //     { text: 'English', onPress: () => console.log('English selected') },
      //     { text: 'Hindi', onPress: () => console.log('Hindi selected') },
      //     { text: 'Spanish', onPress: () => console.log('Spanish selected') },
      //     { text: 'Cancel', style: 'cancel' },
      //   ]
      // );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#EAF9FC'} 
      barStyle="dark-content" 
      networkActivityIndicatorVisible={true} 
      translucent={true}
      showHideTransition={'slide'} />
      <View style={styles.header}>
        <Image source={Icons.logo} style={styles.logo} />
        <View style={styles.rightSide}>
        <TouchableOpacity
          style={styles.languageButton}
          onPress={handleLanguagePress}
        >
          <Text style={styles.languageText}>Language | </Text>
          <Globe size={16} color="#000" weight="regular" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBack}
        >
          <ArrowLeft size={16} color="#fff" weight="bold" />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mainContainer}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>
          Hi, {patientName}, Let’s get started — I’m here
          to listen and help you feel better!
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={handleUploadReports}
        >
          <FileArrowUp size={20} color="#000" weight="regular" />
          <Text style={styles.uploadButtonText}>Upload Medical Reports</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.talkButton}
          onPress={handleTalkToZivankh}
        >
          <WechatLogo size={20} color="#fff" weight="regular" />
          <Text style={styles.talkButtonText}>Talk to ZIVANKH</Text>
        </TouchableOpacity>
      </View>

      </View>
      <View style={styles.imageContainer}>
        <Image source={Images.doctor} style={styles.doctorImage} resizeMode="contain" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF9FC',
    paddingTop: 55,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 36,
  },
  logo: {
    width: 100,
    height: 50,
    objectFit: 'contain', 
    alignSelf: 'center',
    marginTop: 12,
  },
  rightSide:{
    flexDirection: 'row',
  },
  logoText: {
    color: '#357983',
    fontWeight: '700',
    fontSize: 18,
    marginLeft: 8,
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DDDDDD',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  languageText: {
    fontSize: 12,
    color: '#000',
  },
  backButton: {
    flexDirection: 'row',
    backgroundColor: '#98BCC3',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#136A1',
    paddingHorizontal: 14,
    paddingVertical: 6,
    alignItems: 'center',
    marginHorizontal: 12,
  },
  backButtonText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 12,
    marginLeft: 6,
  },
  mainContainer: {
    marginHorizontal: 20,
  },
  greetingContainer: {
    marginTop: 100,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  greetingText: {
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
    color: '#111',
  },
  patientName: {
    fontWeight: '700',
  },
  buttonsContainer: {
    alignItems: 'center',
    gap: 16,
    marginBottom: 48,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 14,
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#AAA',
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  uploadButtonText: {
    fontSize: 14,
    marginLeft: 10,
    color: '#222',
    fontWeight: '500',
  },
  talkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 14,
    width: '60%',
    borderRadius: 10,
    backgroundColor: '#4B8B96',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  talkButtonText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#fff',
    fontWeight: '600',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  doctorImage: {
    width: 260,
    height: 260,
  },
});

export default WelcomeScreen;