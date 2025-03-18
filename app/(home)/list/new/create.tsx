import { ThemedText } from "@/components/ThemedText";
import { BodyScrollView } from "@/components/ui/BodyScrollView";
import { StyleSheet } from 'react-native';

export default function CreateScreen() {
  return (
    <BodyScrollView contentContainerStyle={{
      padding: 16,
    }}>
      <ThemedText type="subtitle">Better Together</ThemedText>
      <ThemedText type="defaultSemiBold" style={styles.subtitle}>
        Create shared shopping lists and collaborate in real time with family and friends
      </ThemedText>
    </BodyScrollView>
  )
}

const styles = StyleSheet.create({
  subtitle: {

  }
});