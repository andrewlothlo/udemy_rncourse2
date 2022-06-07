import { Text, View, Image, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/color';

function GameOverScreen() {
    return (
        <View style ={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/success.png")}
                    style={styles.image}>

                </Image>
            </View>
           <Text>
               Your phone needed X rounds to guess the number Y.
           </Text>
        </View >
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        borderRadius: 150,
        height: 300,
        width: 300,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,

    },
    image: {
        width: '100%',
        height: '100%',
    }

})