import { StyleSheet } from 'react-native';

const chatSupportTicket = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    headerTitle: {
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 99,
        width: '100%',
        backgroundColor: '#dc3545',
        paddingVertical: 20,
        paddingLeft: 10,
        borderColor: '#e4e7eb',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    headerArea: {
        marginLeft: 25,
        flexDirection: 'row',
    },
    headerTitleText: {
        fontFamily: 'Afacad-Bold',
        fontSize: 20,
        paddingLeft: 10,
        color: 'white',
        flexWrap: 'wrap',
        width: '80%',
    },
    messagesList: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        height: 620,
        width: '100%',
    },
    messageLine: {
        flexDirection: 'row',
        width: '100%',
    },
    messageContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10,
        maxWidth: '100%',
    },
    adminImage: {
        width: 40,
        height: 40,
        borderRadius: 20, // To make the image circular
        marginRight: 10, // Adjust spacing between image and message text
    },
    agentImage: {
        width: 40,
        height: 40,
        borderRadius: 20, // To make the image circular
        marginRight: 10, // Adjust spacing between image and message text
    },
    adminMessageContainer: {
        alignSelf: 'flex-start', // Align messages from admin to the left
        backgroundColor: '#007bff', // Background color for messages from admin
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10,
        maxWidth: '90%',
    },
    agentMessageContainer: {
        alignSelf: 'flex-end', // Align messages from the agent to the right
        backgroundColor: '#f9bc07',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10,
        marginRight: 10,
        maxWidth: '85%',
    },
    messageText: {
        fontSize: 16,
    },
    adminMessageText: {
        color: '#ffffff', // Text color for messages from admin
        fontSize: 16,
    },
    agentMessageText: {
        color: '#ffffff', // Text color for messages from admin
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#ffffff',
    },
    input: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#0084FF',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    sendButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default chatSupportTicket;
