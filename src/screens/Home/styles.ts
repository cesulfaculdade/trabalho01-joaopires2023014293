import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        width: '100%'
    },
    purpleBox: {
        height: 173,
        backgroundColor: '#7A4A9E'
    },
    title: {
        color: '#F2F2F2',
        fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center',
        margin: 'auto'
    },
    form: {
        paddingHorizontal: 24
    },
    inputBox: {
        flexDirection: "row",
        top: -30,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        backgroundColor: '#F2F2F2',
        flex: 1,
        height: 54,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 16,
        borderRadius: 6,
        paddingHorizontal: 16,
        borderWidth: 0.5,
        borderColor: '#808080'
    },
    button: {
        width: 52,
        height: 52,
        backgroundColor: '#31C667',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 4
    },
    textButton: {
        margin: "auto"
    },
    textBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    list: {
        justifyContent: "center",
        borderTopColor: "#D9D9D9",
        borderStyle: "solid",
        borderTopWidth: 1,
    },
    emptyBox: {
        flex: 1,
        alignItems: "center",
        marginTop: 48,
    },
    boldText: {
        color: "#808080",
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 16,
    },
    normalText: {
        color: "#808080",
        fontSize: 14,
        textAlign: "center",
    },
    image: {
        width: 56,
        right: 56,
        marginTop: 48,
    }
})