import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleChevronLeft, faComments, } from '@fortawesome/free-solid-svg-icons';

import chatSupportTicket from '../styles/chatSupportTicket'; // Import your common styles

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US');
};

const ViewChatSupportTicket = ({ route, navigation }) => {
    const { ticket } = route.params;
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    // Parse ticket.responses if it's a string
    useEffect(() => {
        if (typeof ticket.responses === 'string') {
            try {
                const parsedResponses = JSON.parse(ticket.responses);
                const formattedMessages = parsedResponses.map((msg, index) => ({
                    _id: index.toString(), // Use index as _id (converted to string)
                    text: msg.message,
                    createdAt: new Date(msg.date),
                    user: {
                        _id: msg.role === 'ADMIN' ? 1 : 2, // Assuming admin has _id 1 and agent has _id 2
                        // Assuming you have default avatar for admin and agent
                        // Replace placeholder URL with actual avatar URLs if available
                        avatar: msg.role === 'ADMIN' ? 'admin_avatar_url' : 'agent_avatar_url',
                    },
                }));
                setMessages(formattedMessages);
            } catch (error) {
                console.error('Error parsing ticket.responses:', error);
            }
        } else {
            // If it's already an array, use it directly
            setMessages(ticket.responses || []);
        }
    }, [ticket.responses]);


    const exampleConversation = [
        { _id: 0, text: "Hi there!", user: { _id: 1 } },
        { _id: 1, text: "Hello! How can I help you?", user: { _id: 1 } },
        { _id: 2, text: "I'm interested in your product. Can you provide more details?", user: { _id: 2 } },
        { _id: 3, text: "Sure! Our product is designed to...", user: { _id: 2 } },
    ];

    const onSend = (newMessages = []) => {
        setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
    };

    return (
        <View style={chatSupportTicket.container}>
            <GiftedChat
                messages={messages}
                onSend={onSend}
                user={{ _id: 1 }}
                renderUsernameOnMessage
            />
        </View>
    );
};

export default ViewChatSupportTicket;
