// src/navigation/AppNavigator.js
import { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddDeveloperSales from '../screens/AddDeveloperSales';
import AddBrokerageSales from '../screens/AddBrokerageSales';
import AddRentalSales from '../screens/AddRentalSales';
import VerifyEmailAddress from '../screens/VerifyEmailAddress';
import VerifyCodeEmail from '../screens/VerifyCodeEmail';
import VerifyChangePassword from '../screens/VerifyChangePassword';
import AgentProfile from '../screens/AgentProfile';
import MySalesPage from '../screens/MySalesPage';
import DrawerNavigator from './DrawerNavigator';
import ImagePickerComponent from './ImagePickerComponent';
import ImagePickerComponentBrokerage from './ImagePickerComponentBrokerage';
import ImagePickerComponentRental from './ImagePickerComponentRental';
import ImagePickerTechnicalSupportPage from './ImagePickerTechnicalSupportPage';
import ViewSupportTicketsPage from '../screens/ViewSupportTicketsPage';
import ViewTicketDetailsPage from '../screens/ViewTicketDetailsPage';
import ViewChatSupportTicket from '../screens/ViewChatSupportTicket';
import SaleDetailsPage from '../screens/SalesDetailsPage';
import EditBasicInformation from '../screens/EditBasicInformation';
import TawkToChatPage from '../screens/TawkToChatPage';

import { useFonts } from '../helpers/useFonts';
import FAQDetailsPage from '../screens/FAQDetailsPage';
import SearchPage from '../screens/SearchPage';
import ChangeProfileComponent from './ChangeProfileComponent';
import DownloadingPage from '../screens/DownloadingPage';

// Create a stack navigator
const Stack = createStackNavigator();

// Create the stack navigator component 
function AppStack() {

    useEffect(() => {
        useFonts();
    }, []);

    return (
        <Stack.Navigator>
            <Stack.Screen name="DrawerScreen" component={DrawerNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="ADD DEVELOPER SALES" component={AddDeveloperSales} />
            <Stack.Screen name="ADD BROKERAGE SALES" component={AddBrokerageSales} />
            <Stack.Screen name="ADD RENTAL SALES" component={AddRentalSales} />
            <Stack.Screen name="Verify Email Address" component={VerifyEmailAddress} />
            <Stack.Screen name="Verify Email Address Code" component={VerifyCodeEmail} />
            <Stack.Screen name="Change Password" component={VerifyChangePassword} />
            <Stack.Screen name="View Support Tickets" component={ViewSupportTicketsPage} options={{ headerShown: false }} />
            <Stack.Screen name="View Ticket Details" component={ViewTicketDetailsPage} />
            <Stack.Screen name="Chat with us" component={TawkToChatPage} />
            <Stack.Screen name="FAQ Search Page" component={SearchPage}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen name="FAQ Details Page" component={FAQDetailsPage}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen name="View Chat Support Ticket" component={ViewChatSupportTicket}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="Edit Basic Information" component={EditBasicInformation}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="Sale Details Page" component={SaleDetailsPage}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="Agent Profile" component={AgentProfile} />
            <Stack.Screen name="Downloadable Forms" component={DownloadingPage} />
            <Stack.Screen name="Sales Report" component={MySalesPage} />
            <Stack.Screen name="Change Profile" component={ChangeProfileComponent}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="Image Picker Technical Support Page" component={ImagePickerTechnicalSupportPage}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="Image Picker Component" component={ImagePickerComponent}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="Image Picker Component Brokerage" component={ImagePickerComponentBrokerage}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="Image Picker Component Rental" component={ImagePickerComponentRental}
                options={{
                    headerShown: false,
                }} />
        </Stack.Navigator>
    );
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    );
};

export default AppNavigator;
