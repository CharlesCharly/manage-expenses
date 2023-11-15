import { View, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { buttonStyles } from '@styles/buttonStyles';

export default function CircleButton({ onPress }) {
  return (
    <View style={buttonStyles.floatingButtonContainer}>
      <Pressable style={buttonStyles.circleButton} onPress={onPress}>
        <MaterialIcons name="add" size={35} color="#25292e" />
      </Pressable>
    </View>
  );
}
