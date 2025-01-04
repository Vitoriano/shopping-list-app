import * as Haptics from "expo-haptics";

import { ThemedText } from "@/components/ThemedText";
import { useSignIn } from "@clerk/clerk-expo";
import { Href, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { View } from "react-native";

import Button from "@/components/ui/button";
import TextInput from "@/components/ui/text-input";
import { BodyScrollView } from "@/components/ui/BodyScrollView";

export default function SignInScreen() {

  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ isSignIn, setIsSignIn ] = useState(false);

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) return;

    if (process.env.EXPO_OS === "ios") {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    setIsSignIn(true);

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: email,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    } finally {
      setIsSignIn(false);
    }
  }, [isLoaded, email, password]);

  const onNavigatePress = useCallback(
    async (path: Href) => {
      if (process.env.EXPO_OS === "ios") {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
      router.push(path);
    },
    [router]
  );


  return (
    <BodyScrollView
      contentContainerStyle={{
        padding: 16,
        marginTop: "20%"
      }}
    >
      <TextInput 
        label="E-mail" 
        value={email}
        placeholder="Enter email"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={setEmail}
      />

    <TextInput 
        label="Password" 
        value={password}
        placeholder="Enter password"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Button 
        onPress={onSignInPress}
        loading={isSignIn}
        disabled={!email || !password || isSignIn}
      >
        Sign In
      </Button>

      <View 
        style={{
          marginTop: 16, 
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <ThemedText>Don't have an account?</ThemedText>
        <Button variant="ghost" onPress={() => router.push("/sign-up")}>Sign Up</Button>
      </View>

      <View 
        style={{
          marginTop: 16, 
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <ThemedText>Forgot password?</ThemedText>
        <Button variant="ghost" onPress={() => router.push("/reset-password")}>Reset Password</Button>
      </View>

    </BodyScrollView>
  )
}