import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {

    },
    image: {

    },
})

const TopConcernsImage = (props) => {
    return (
        <View>
            <Image
                source={{ 
                    uri: props.topConcernsImage 
                }}
            />
        </View>
    );
}

export default TopConcernsImage;