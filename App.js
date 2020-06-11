import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.body}>
              
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
  }
});

export default App;
