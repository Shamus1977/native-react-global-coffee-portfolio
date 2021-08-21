import React, { Component }  from 'react';
import { Text, View, ScrollView, StyleSheet, Modal, Share} from 'react-native';
import { Card, Icon, Button, Rating, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { postFavorite, postCoffeeComment } from '../redux/ActionCreators';
import RenderComments from './RenderComments';



const mapStateToProps = state => {
    return {
        coffees: state.coffees,
        coffeesComments: state.coffeesComments,
        favorites: state.favorites
    }
}

const mapDispatchToProps =  {
    postFavorite: targetId => (postFavorite(targetId)),
    postCoffeeComment: (name, rating, author, text) => (postCoffeeComment(name, rating, author, text))
}

const shareProduct = (title, message, url) => {
    Share.share({
        title,
        massage: `${title}: ${message} ${url}`,
        url
    },
    {
        dialogTitle:'Share ' + title
    });
}


function RenderCoffeeDetail({coffee, comments, favorite, onShowModal, markFavorite}) {
    if (coffee) {

        return (
            <ScrollView style={{backgroundColor:'#239945'}}>
                <Card 
                    featuredTitle={coffee.name}
                    featuredTitleStyle={{fontSize: 55}}
                    image={require('../assets/images/coffee-beans-on-board.jpg')}
                >
                    <Text style={{margin: 10, fontSize: 28, textAlign:'center'}}>
                        {coffee.description}
                    </Text>
                    <Text style={{margin: 10, fontSize: 22, textAlign:'center'}}>
                        {coffee.text}
                    </Text>
                    <Text style={{margin: 20, fontSize: 20, textAlign:'center'}} >
                        {coffee.content}
                    </Text>
                    <View style={styles.cardRow}>
                        <Icon
                            name={favorite ? 'heart' : 'heart-o' }
                            type='font-awesome'
                            color='#f50'
                            raised
                            onPress={() =>favorite ? 
                                console.log('Already set as a favorite') : markFavorite()}
                        />
                        <Icon
                            name='pencil'
                            type='font-awesome'
                            color='blue'
                            raised
                            onPress={() => onShowModal()}
                        />
                        <Icon
                                name='share'
                                type='font-awesome'
                                color='blue'
                                raised
                                onPress={() => shareProduct(coffee.name, coffee.description, 'This will be the URL')}
                            />
                    </View>
                </Card>
                <RenderComments comments={comments} />
            </ScrollView>
        );
    }
    return <View />;
}



class CoffeeDetail extends Component  {
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            rating: 5,
            text: '',
            author: '',
        }
    }

    static navigationOptions = {
        title: 'Coffee Detail'
    }

    toggleModal(){
        this.setState({showModal: !this.state.showModal})
    }

    handleComment(name){
        this.props.postCoffeeComment(name, this.state.rating, this.state.author, this.state.text)
        console.log(JSON.stringify(this.state));
        this.toggleModal();
    }

    resetForm(){
        this.setState({
            showModal: false,
            rating: 5,
            text: '',
            author: '',
        })
    }

    markFavorite(targetId){
        this.props.postFavorite(targetId)
    }

    render(){
        const targetId = this.props.navigation.getParam('targetId');
        const coffee = this.props.coffees.coffees.filter(coffee => coffee.id === targetId)[0];
        const comments = this.props.coffeesComments.coffeesComments.filter(comment => comment.name === coffee.name);
        const name = coffee.name;
        const favName = coffee.name;

        return (
            <ScrollView>
                <RenderCoffeeDetail 
                    coffee={coffee}
                    comments={comments}
                    favorite={this.props.favorites.includes(targetId)}
                    markFavorite={ () => this.markFavorite(targetId) }
                    onShowModal={ () => this.toggleModal()}
                />
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal}>
                        <Rating
                            showRating
                            startingValue={this.state.rating}
                            imageSize={40}
                            onFinishRating={rating => this.setState({rating: rating})}
                            style={{paddingVertical: 10}}
                        />
                        <Input
                            placeholder='Your Name'
                            leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                            leftIconContainerStyle={{paddingRight: 10}}
                            onChangeText={author => this.setState({author: author})}
                            value={this.state.author}
                        />
                        <Input
                            placeholder='Your Comment'
                            leftIcon={{ type: 'font-awesome', name: 'comment-o' }}
                            leftIconContainerStyle={{paddingRight: 10}}
                            onChangeText={text => this.setState({text: text})}
                            value={this.state.text}
                        />
                        <View style={{margin: 10}}>
                            <Button
                                onPress={() => {
                                    this.handleComment(name);
                                    this.resetForm();
                                }}
                                title='Submit'
                                color='#c8cbae'
                            />
                        </View>
                        <View style={{margin: 10}}>
                            <Button
                                onPress={() => {
                                    this.toggleModal();
                                    this.resetForm();
                                }}
                                title='Cancel'
                                color='#c8cbae'
                            />
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    cardRow:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        flexDirection:'row',
        margin:20
    },
    modal:{
        justifyContent:'center',
        margin:20,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeDetail);