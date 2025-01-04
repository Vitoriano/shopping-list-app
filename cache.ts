import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { TokenCache } from '@clerk/clerk-expo/dist/cache';


const createTokenCache = ():TokenCache => {

  return {
    getToken: async (key: string) => {
      try {

        const item = await SecureStore.getItemAsync(key);

        if(item){
          console.log(`${key} as used \n `);
        } else {
          console.log('No values stored under key: ' + key);
        }

        return item;

      } catch (error) {
        console.log(error);
      }
    },
    saveToken: (key: string, token: string) => {
      return SecureStore.setItemAsync(key, token);
    },
    //clearToken: () => {}
  }
}

export const tokenCache = Platform.OS !== "web" ? createTokenCache() : undefined;