import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import {Text} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

import { StreamChat } from 'stream-chat';

import { OverlayProvider, MessageInput,Chat, ChannelList, Channel , MessageList} from "stream-chat-expo";


const API_key = "nqexfrcrrhhq";
const client = StreamChat.getInstance(API_key);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [isReady, setIsReady] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState(null);

  const connectUser = async () => {
    await client.connectUser(
      {
        id: 'duiga',
        name: 'dinh dep trai',
        image: 'https://i.imgur.com/smRjnTm.jpeg',
      },
      client.devToken("duiga")
    );
    setIsReady(true);

    // const channel =client.channel("team","general",{name:"General"});
    // await channel.create();
  };

  useEffect(() => {
    connectUser();

  }, [])

  const onChannelSelect = (channel:any) => {
    setSelectedChannel(channel)
  }

  if (!isLoadingComplete || !isReady) {
    return null;
  } else {
    return (

      <SafeAreaProvider>
        <OverlayProvider>
          <Chat client={client}>
            {/* <navigation colorscheme={colorscheme}/> */}
            {!selectedChannel ? (<ChannelList onSelect={onChannelSelect} />) : (
              <>
              <Channel channel={selectedChannel}> 
              
              <Text style={{color:"pink",fontSize:20,margin:50}} onPress={()=> setSelectedChannel(null)}>GO BACK</Text>
              <MessageList/>
              <MessageInput/>
               </Channel>

              
              </>
            )}

          </Chat>

        </OverlayProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
