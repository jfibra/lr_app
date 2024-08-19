import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform, ActivityIndicator, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const TawkToChatPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 7); // Set a minimum duration in milliseconds (e.g., 500 ms)

        return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            {loading && (
                <View style={{ padding: 20, marginTop: 200, alignItems: 'center', height: '100%' }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text>Please wait while the page is loading.</Text>
                </View>
            )}
            <View style={styles.webViewContainer}>
                <WebView
                    source={{ uri: 'https://tawk.to/chat/6419410b31ebfa0fe7f3bfad/1gs1ac5ve' }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        marginTop: -40
    },
    loadingContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    webViewContainer: {
        flex: 1,
    },
});

export default TawkToChatPage;
