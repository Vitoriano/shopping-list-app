import { ThemedText } from "@/components/ThemedText";
import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

import Button from "@/components/ui/button";
import TextInput from "@/components/ui/text-input";

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
      <TextInput label="E-mail" placeholder="Enter email"/>
      <Button>Sign In</Button>
      <Link href={"/sign-up"}>Go to Sign In</Link>
    </View>
  )
}