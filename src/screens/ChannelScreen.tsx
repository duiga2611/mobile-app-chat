import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

import { Channel,MessageList,MessageInput } from 'stream-chat-expo';
const ChannelScreen =() =>{
    const route =useRoute();
    const channel = route.params?.channel;

    if (!channel){
        return(
        <View style= {styles.errorContainer}>;
            <Text style= {styles.errorText}> select a channel bro </Text>
        </View>
        );
    }
    return(
        <Channel channel={channel}> 
              
              {/* <Text style={{color:"pink",fontSize:20,margin:50}} onPress={()=> setSelectedChannel(null)}>GO BACK</Text> */}
              <MessageList/>
              <MessageInput/>
               </Channel>
    );
};
const styles = StyleSheet.create({
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
   
    },
    errorText: {
        color: 'white',
        fontSize: 16,
    }
});

export default ChannelScreen