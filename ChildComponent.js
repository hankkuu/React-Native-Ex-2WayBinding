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
            textInput: props.text
        }
    }
    static propTypes = {
        //text: PropTypes.string.isrequired,
        //updatecomment: PropTypes.func.isRequired
    }

    render() {
        const { textInput } = this.state;
        const { text } = this.props;
        return (
            <View style={styles.container}>
                <Text>ChildComponent</Text>
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
        const { textInput } = this.state;
        //const { updatecomment } = this.props;
        //updatecomment(textInput);       
        this.props.navigation.navigate("parent", {text: textInput})
    }
}
export default ChildComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: "600",
        fontSize: 20,
        width: width / 2
    }
});