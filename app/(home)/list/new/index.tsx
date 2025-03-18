import { IconCircle } from "@/components/IconCircle";
import { ThemedText } from "@/components/ThemedText";
import { BodyScrollView } from "@/components/ui/BodyScrollView";
import { backgroundColors, emojies } from "@/constants/Colors";
import { useMemo } from "react";
import { StyleSheet, View } from 'react-native';

export default function NewListScreen() {

  const randomEmoji = useMemo( () => emojies[Math.floor(Math.random() * emojies.length)], [])
  const randomColor = useMemo( () => backgroundColors[Math.floor(Math.random() * backgroundColors.length)], [])
  return (
    <BodyScrollView contentContainerStyle={{
      padding: 16,
    }}>
      <View 
        style={{
          alignItems: 'center',
          gap: 16,
          marginTop: 32
        }}
      >
        <IconCircle emoji={randomEmoji} style={{ 
          backgroundColor: randomColor,
          marginBottom: 8
          }} 
          size={60}
        />
        <ThemedText type="subtitle" style={{ fontSize: 32}}>Better Together</ThemedText>
        <ThemedText type="defaultSemiBold" style={styles.subtitle}>
          Create shared shopping lists and collaborate in real time with family and friends
        </ThemedText>
      </View>
     
    </BodyScrollView>
  )
}

const styles = StyleSheet.create({
  subtitle: {

  }
});