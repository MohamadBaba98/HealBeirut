import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {

    },
    image: {

    },
})

const TopConcernsText = (props) => {
    return (
        <View>
            <Text>{props.topConcernsText}</Text>
        </View>
    );
}

export default TopConcernsText;