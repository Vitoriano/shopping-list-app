import Button from "@/components/ui/button";
import { useUser } from "@clerk/clerk-expo";
import { Redirect, router, Stack, useRouter } from "expo-router";

export default function HomeRoutesLayout() {

  //TODO: remove this code later
  const router = useRouter()

  const { user } = useUser();

  if(!user) {
    return <Redirect  href={'/(auth)'}/>
  }

  return (
    <Stack
      screenOptions={{
        ...(process.env.EXPO_OS !== "ios") ? {}
        : {
          headerLargeTitle: true,
          headerTransparent: true,
          headerBlurEffect: "systemChromeMaterial",
          headerShadowVisible: true,
          headerLargeStyle: {
            backgroundColor: "transparent"
          }
        }
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: "Shopping Lists"}}/>
      <Stack.Screen name="list/new/index" 
        options={{
          presentation: 'formSheet',
          sheetGrabberVisible: true,
          headerShown: false
        }}
      />
       <Stack.Screen name="profile" 
        options={{
          presentation: 'formSheet',
          sheetAllowedDetents: [0.75, 1],
          sheetGrabberVisible: true,
          headerShown: false
        }}
      />
      <Stack.Screen name="list/new/scan" 
        options={{
          presentation: 'fullScreenModal',
          headerLargeTitle: false,
          headerTitle: "Scan QR code",
          headerLeft: () => (
            <Button variant="ghost" onPress={() => router.back()}>
              Cancel
            </Button>
          )
        }}
      />

    </Stack>
  )
}