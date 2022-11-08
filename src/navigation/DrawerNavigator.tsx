import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import TabOneScreen from '../screens/TabOneScreen';
import { Text, StyleSheet } from "react-native";
import { ChannelList, } from 'stream-chat-expo';
import ChannelScreen from '../screens/ChannelScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={CustomDrawerContent}>
            <Drawer.Screen name="ChannelScreen" component={ChannelScreen} options={{title: 'Channel'}} />
            


        </Drawer.Navigator>
    );
};

const CustomDrawerContent = (props: any ) => {
    const onChannelSelect = (channel: any) => {
props.navigation.navigate("ChannelScreen",{ channel})
    };
    return (
        <DrawerContentScrollView {...props}>
            <Text style={styles.title}> dong bao co nghe thay j ko</Text>
            <ChannelList onSelect={onChannelSelect} />
        </DrawerContentScrollView>
    );
}
const styles = StyleSheet.create({
    title: {
        color: 'white',
        frontWeight: "bold",
        alignSelf: "center",
        frontSize: 16,
        margin: 10,
    }
});
export default DrawerNavigator;