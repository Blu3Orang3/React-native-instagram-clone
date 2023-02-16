import user from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView/FeedGridView';

const ProfileScreen = () => {
  return (
    // posts grid view
    <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />
  );
};

export default ProfileScreen;
