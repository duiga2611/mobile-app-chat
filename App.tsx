import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

import { StreamChat } from 'stream-chat';

import {
  OverlayProvider,
  MessageInput, Chat,
  ChannelList, Channel,
  MessageList
} from "stream-chat-expo";
import AuthContext from './src/contexts/AuthContext';

const API_key = "94z24kzck433";
const client = StreamChat.getInstance(API_key);



export default function App() {
  const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();
  const [isReady, setIsReady] = useState(false);
  // const [selectedChannel, setSelectedChannel] = useState(null);

  useEffect(() => {

    return () => {
      client.disconnectUser();
    };
  }, [])


  //  const onChannelSelect = (channel: any) => {
  //  setSelectedChannel(channel);
  //   };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (

      <SafeAreaProvider>
        <AuthContext>
          <OverlayProvider>
            <Chat client={client}>

              <Navigation colorScheme={"dark"} />
              {/* {!selectedChannel ? (<ChannelList onSelect={onChannelSelect} />) : (
              <>
              <Channel channel={selectedChannel}> 
              
              <Text style={{color:"pink",fontSize:20,margin:50}} onPress={()=> setSelectedChannel(null)}>GO BACK</Text>
              <MessageList/>
              <MessageInput/>
               </Channel>
              </>
            )} */}

            </Chat>
          </OverlayProvider>
        </AuthContext>
        <StatusBar style="light" />
      </SafeAreaProvider>
    );
  }
}
