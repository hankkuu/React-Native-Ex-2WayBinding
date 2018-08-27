import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    TextInput
} from "react-native";
import PropTypes from "prop-types";

const { width, height } = Dimensions.get("window")

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: props.text,
            clicked: true,
        }
    }
    static propTypes = {
        //text: PropTypes.string.isrequired,
        //updatecomment: PropTypes.func.isRequired
    }

    render() {
        const { textInput } = this.state;        
     
        return (
            <View style={styles.container}>
                <Text style={styles.title}>ChildComponent</Text>
                <TextInput style={styles.text} 
                    onChangeText={this._controllInput} 
                    value={textInput} 
                    returnKeyType={"done"}
                    onEndEditing={this._finishEditing}
                    underlineColorAndroid={"transparent"}
                    placeholder={"Input your Comment"} 
                />
            </View>
        );
    }
    _controllInput = (text) => {
        this.setState({ textInput : text })
    }

    _finishEditing = () => {
        const { textInput, clicked } = this.state;

        const { updatecomment } = this.props;
        updatecomment(textInput);

        // 네비게이터를 이용한 경우 
        //const { textInput } = this.state;
        //this.props.navigation.navigate("parent", { text: textInput })
    }
}
export default ChildComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',  
        backgroundColor: 'yellow',
        marginBottom: 350,
    },
    text: {
        fontWeight: "600",
        fontSize: 20,
        width: width / 2,
    },
    title: {
        color: 'red',
        fontSize: 30,
        marginTop: 50,
        fontWeight: '200',
        marginBottom: 30,
    },
});