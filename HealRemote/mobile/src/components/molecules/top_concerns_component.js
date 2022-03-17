import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {

    },
    image: {

    },
})

const TopConcernsComponent = ({props, navigation}) => {
    return (
        <View>
            <Text>{props.topConcernsText}</Text>

        </View>
    );
}

export default TopConcernsComponent;