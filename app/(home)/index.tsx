import { ThemedText } from "@/components/ThemedText";
import { BodyScrollView } from "@/components/ui/BodyScrollView";
import Button from "@/components/ui/button";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { appleBlue } from "@/constants/Colors";
import { useClerk } from "@clerk/clerk-expo";
import { Stack, useRouter } from "expo-router";
import { Pressable, View } from "react-native";

export default function HomeScreen() {

  const { signOut } = useClerk();
  const router = useRouter();

  const renderHeaderRight = () => {
    return (
      <Pressable onPress={() => router.push('/(home)/list/new')}>
        <IconSymbol name="plus" color={appleBlue}/>
      </Pressable>
    )
  }

  const renderHeaderLeft = () => {
    return (
      <Pressable onPress={() => router.push('/(home)/profile')}>
        <IconSymbol name="gear" color={appleBlue}/>
      </Pressable>
    )
  }

  return (
    <>
      <BodyScrollView
        contentContainerStyle={{
          padding: 16
        }}
      >
        <Stack.Screen options={{
          headerRight: renderHeaderRight,
          headerLeft: renderHeaderLeft
        }}/>
        <ThemedText type="title"> Home In </ThemedText>
        <Button onPress={signOut}> Sign Out</Button>
      </BodyScrollView>
    </>
  )
}