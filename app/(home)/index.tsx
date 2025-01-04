import { ThemedText } from "@/components/ThemedText";
import { BodyScrollView } from "@/components/ui/BodyScrollView";
import Button from "@/components/ui/button";
import { useClerk } from "@clerk/clerk-expo";
import { View } from "react-native";

export default function HomeScreen() {

  const { signOut } = useClerk();

  return (
    <BodyScrollView
      contentContainerStyle={{
        padding: 16
      }}
    >
      <ThemedText type="title"> Home In </ThemedText>
      <Button onPress={signOut}> Sign Out</Button>
    </BodyScrollView>
  )
}