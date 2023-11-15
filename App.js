import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Text } from 'react-native';
import CircleButton from '@components/FloatingButton';

import { globalStyles } from '@styles/globalStyles';
import { homeStyles } from '@styles/homeStyles';

export default function App() {
  const createNewExpense = async () => {
    alert('Depense !');
  };

  return (
    <View style={[globalStyles.container, homeStyles.titleContainer]}>
      <View styles={globalStyles.cardContainer}>
        <ScrollView>
          <Text style={homeStyles.title}>
            Votre solde actuel est le suivant
          </Text>
        </ScrollView>
      </View>

      <CircleButton onPress={createNewExpense} />
      <StatusBar style="auto" />
    </View>
  );
}
