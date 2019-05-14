import React, {Component} from 'react';
import { Text,
        StyleSheet,
        TouchableWithoutFeedback,
        View,
        LayoutAnimation
    } from 'react-native'
import { CardSection } from './common';
import { connect } from 'react-redux'
import * as actions from '../Actions/index'

class ListItem extends Component{

    componentWillUpdate(){
        LayoutAnimation.spring();
    }

    renderDescription (){
        if(this.props.expanded){
            return(
                <CardSection>
                    <Text
                        style={{flex: 1}}
                    >{this.props.library.description}</Text>
                </CardSection>
            );
        } 
    }
    
    render(){
        const {id, title} = this.props.library
        console.log(this.props)

        return(
            <TouchableWithoutFeedback
                onPress={()=>this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>

        )
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
})

const mapStateToProps = (state, ownProps)=>{

    const expanded = state.selectedLibraryId === ownProps.library.id
    return {expanded: expanded}
}

export default connect(mapStateToProps,actions)(ListItem);