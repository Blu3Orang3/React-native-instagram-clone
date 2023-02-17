import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import user from '../../assets/data/user.json';
import colors from '../../theme/colors';
import fonts from "../../theme/fonts";

interface ICustomInput {
  label: string;
  multiline?: boolean;
}

const CustomInput = ({label,multiline = false}: ICustomInput) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput placeholder="hello" multiline={multiline} style={styles.input}/>
  </View>
);

const EditProfileScreen = () => {

  const onSubmit = () => {
    console.warn('submit');
    
  }

  return (
    <View style={styles.page}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.textButton}>Change Profile Photo</Text>

      <CustomInput label="Name" />
      <CustomInput label="UserName" />
      <CustomInput label="Website" />
      <CustomInput label="Bio" multiline/>

      <Text onPress={onSubmit} style={styles.textButton}>Submit</Text>
    </View>
  );
};
export default EditProfileScreen;
const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  textButton: {
    color: colors.primary,
    fontWeight: fonts.weight.semi,
    fontSize: fonts.size.md,

    margin: 10,
  },

  inputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  label:{
    width: 75,
  },
  input:{
    flex: 1,
    borderColor: colors.border,
    borderBottomWidth: 1,
  },
  
});
