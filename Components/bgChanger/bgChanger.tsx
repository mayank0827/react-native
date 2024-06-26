import { useState } from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const BackGround = () => {
    const [randomColor, setRandomColor] = useState('#ffffff')

    const generateColor = () => {
        const hexColor = "0123456789ABCDEF";
        let color = '#'

        for (let i = 0; i < 6; i++) {
            color += hexColor[Math.floor(Math.random() * 16)]
        }
        setRandomColor(color)
    }

    return (
        <>
            <StatusBar backgroundColor={randomColor} />
            <View style={[styles.container, { backgroundColor: randomColor }]}>
                <TouchableOpacity onPress={generateColor}>
                    <View style={styles.actionBtn}>
                        <Text style={styles.actionBtnTxt}>Press me</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 760,
        alignItems: "center",
        justifyContent: "center"
    },
    actionBtn: {
        borderRadius: 12,
        backgroundColor: "#6A1B4D",
        paddingVertical: 10,
        paddingHorizontal: 40
    },
    actionBtnTxt: {
        fontSize: 24,
        color: "#FFFFFF",
        textTransform: "uppercase"
    }
});

export default BackGround;