import {View, StyleSheet, ScrollView} from 'react-native';
import FeedPost from './src/components/FeedPost';
import posts from './src/assets/data/posts.json';

const App = () => {
  return (
    <ScrollView style={styles.app}>
      <FeedPost post={posts[3]}/>
      <FeedPost post={posts[4]}/>
      <FeedPost post={posts[2]}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
