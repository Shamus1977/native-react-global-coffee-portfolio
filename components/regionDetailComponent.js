import React, { Component }  from 'react';
import { Text, View, ScrollView, Modal, StyleSheet, Button } from 'react-native';
import { Card, Icon, Rating, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { postFavorite, postRegionComment } from '../redux/ActionCreators';
import RenderComments from './RenderComments';



const mapStateToProps = state => {
    return {
        regions: state.regionsHistory,
        comments: state.regionsComments,
        favorites: state.favorites
    }
}

const mapDispatchToProps =  {
    postFavorite: regionId => (postFavorite(regionId)),
    postRegionComment: (regionId, rating, author, text) => (postRegionComment(regionId, rating, author, text))
}


function RenderRegionDetail({region, favorite, markFavorite, onShowModal, comments}) {
    if (region) {
        return (
            <ScrollView style={{backgroundColor:'#239945'}}>
                <Card 
                    featuredTitle={region.name}
                    image={require('../assets/images/coffee-beans-on-board.jpg')}
                >
                    <Text style={{margin: 10}}>
                        {region.description}
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
                    </View>
                </Card>
                <RenderComments comments={comments} />
            </ScrollView>
        );
    }
    return <View />;
}



class RegionDetail extends Component  {
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
        title: 'Region Information'
    }

    toggleModal(){
        this.setState({showModal: !this.state.showModal})
    }

    handleComment(regionId){
        this.props.postRegionComment(regionId, this.state.rating, this.state.author, this.state.text)
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

    markFavorite(regionId){
        this.props.postFavorite(regionId)
    }

    render(){
        const regionId = this.props.navigation.getParam('regionId');
        const comments = this.props.comments.regionsComments.filter(comment => comment.regionId === regionId);
        const region = this.props.regions.regionsHistory.filter(region => region.id === regionId)[0];
        return (
            <ScrollView>
                <RenderRegionDetail 
                    region={region}
                    favorite={this.props.favorites.includes(regionId)}
                    markFavorite={ () => this.markFavorite(regionId) }
                    onShowModal={ () => this.toggleModal()}
                    comments={comments}
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
                                    this.handleComment(regionId);
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

export default connect(mapStateToProps, mapDispatchToProps)(RegionDetail);
