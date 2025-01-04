import { ThemedText } from "@/components/ThemedText";
import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export default function SignInScreen() {

  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ issignIn, setIsSignIn ] = useState(false);

  return (
    <View>
      <ThemedText type="title">
        SignIn
      </ThemedText>
      <Link href={"/sign-up"}>Go to Sign In</Link>
    </View>
  )
}