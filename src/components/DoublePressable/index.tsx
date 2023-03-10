import {Pressable, Text} from 'react-native';
import {ReactNode} from 'react';

interface IDoublePressable {
  onDoublePress?: () => void;
  children: ReactNode;
}

function DoublePressable({
  onDoublePress = () => {},
  children,
}: IDoublePressable) {
  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now(); //timestamp
    if (now - lastTap < 300) {
      onDoublePress();
    }

    lastTap = now;
  };

  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
}
export default DoublePressable;
