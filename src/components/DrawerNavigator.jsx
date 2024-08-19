// src/navigation/DrawerNavigator.js
import { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faRightFromBracket, faDollarSign, faUser, faHeadset, faQrcode, faMessage, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

import { useFonts } from '../helpers/useFonts';

import Logout from '../screens/Logout';
import CustomDrawerContent from './CustomDrawerContent'; // Import your custom drawer component
import { useAuthProvider } from '../config/AuthProvider';

import LoginScreen from '../screens/LoginScreen';
import AgentDashboard from '../screens/AgentDashboard';
import MySalesPage from '../screens/MySalesPage';
import TawkToChatPage from '../screens/TawkToChatPage';
import ProfilePage from '../screens/ProfilePage';
import MyQRCode from '../screens/MyQRCode'; // Renamed to MyQRCode
import HelpPage from '../screens/HelpPage';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Dashboard') {
                        iconName = faHome;
                    } else if (route.name === 'My Sales') {
                        iconName = faDollarSign;
                    } else if (route.name === 'Referral') {
                        iconName = faQrcode;
                    } else if (route.name === 'Help') {
                        iconName = faCircleQuestion;
                    } else if (route.name === 'Me') {
                        iconName = faUser;
                    }

                    return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
                },
                headerShown: false,
                tabBarOptions: {
                    activeTintColor: '#cb3140', // Customize the active tab color
                    inactiveTintColor: '#001f3f', // Customize the inactive tab color
                },
            })}
        >
            <Tab.Screen name="Dashboard" component={AgentDashboard} />
            <Tab.Screen name="My Sales" component={MySalesPage} />
            <Tab.Screen name="Referral" component={MyQRCode} />
            <Tab.Screen name="Help" component={HelpPage} />
            <Tab.Screen name="Me" component={ProfilePage} />
        </Tab.Navigator>
    );
}

const CustomHeaderImage = () => {
    return <Image source={require('../../assets/images/logoMain.png')} style={{ width: 110, height: 50 }} />;
};

const DrawerNavigator = () => {
    const authenticated = useAuthProvider();

    useEffect(() => {
        useFonts();
    }, []);

    return (
        <Drawer.Navigator
            initialRouteName="Auth Screen"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="Auth Screen"
                component={authenticated ? AuthStack : LoginScreen}
                options={{
                    headerTitle: () => <CustomHeaderImage />,
                    headerStyle: {
                        height: 100,
                    },
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="Logout"
                component={Logout}
                options={{
                    drawerLabel: 'Logout',
                    drawerIcon: ({ focused, size }) => (
                        <FontAwesomeIcon icon={faRightFromBracket} size={size} color={focused ? 'red' : 'black'} />
                    ),
                    headerTitle: () => <CustomHeaderImage />, // Use the custom component for the header title
                    headerStyle: {
                        height: 150,
                    },
                    headerShown: false,
                }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;
