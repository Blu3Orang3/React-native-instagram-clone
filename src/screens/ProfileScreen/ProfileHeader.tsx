import {View, Image, Text} from 'react-native';
import Button from "../../components/Button";
import styles from './styles';
import user from '../../assets/data/user.json';

const ProfileHeader = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/* Profile image */}
        <Image source={{uri: user.image}} style={styles.avatar} />

        {/* Posts, followers, following numbers */}
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Posts</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>8</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>48</Text>
          <Text>Following</Text>
        </View>
      </View>
      {/* bio */}
      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.bio}</Text>
      {/* edit and other buttons */}
      <View style={{flexDirection: 'row'}}>
        <Button
          text="Edit Profile"
          onPress={() => console.warn('On edit Profile')}
        />
        <Button
          text="Another Button"
          onPress={() => console.warn('another button')}
        />
      </View>
    </View>
  );
};

export default ProfileHeader;
