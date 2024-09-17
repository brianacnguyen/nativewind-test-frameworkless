import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export type MyButtonProps = {
  onPress: () => void;
  text: string;
};

export const MyButton = ({onPress, text}: MyButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="bg-primary-default h-10">
      <Text className="text-primary-inverse">{text}</Text>
    </TouchableOpacity>
  );
};
