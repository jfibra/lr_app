import * as Font from 'expo-font';

export const useFonts = async () => {
     Font.loadAsync({
        'ProtestStrike-Regular': require('../../assets/fonts/ProtestStrike-Regular.ttf'),
        'RethinkSans-Regular': require('../../assets/fonts/RethinkSans-Regular.ttf'),
        'TiltNeon-Regular': require('../../assets/fonts/TiltNeon-Regular.ttf'),
        'TiltWarp-Regular': require('../../assets/fonts/TiltWarp-Regular.ttf'),
        'Afacad-Italic': require('../../assets/fonts/Afacad-Italic.ttf'),
        'Afacad-Regular': require('../../assets/fonts/Afacad-Regular.ttf'),
        'Afacad-Bold': require('../../assets/fonts/Afacad-Bold.ttf'),
        'RethinkSans-SemiBold': require('../../assets/fonts/RethinkSans-SemiBold.ttf'),
    });
}; 
