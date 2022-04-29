import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>APP</Text>
            </View>
        </SafeAreaView>
    );
};

export default App;
