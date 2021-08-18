import React from 'react';
import { View, Button } from 'react-native';
import { Icon } from 'react-native-elements';

const CartButton = () => {
    return (
        <View>
            <Button
                title='Go To Cart'
                titleStyle={{marginLeft:5, color: 'black'}}
                icon={<Icon
                    name='shopping-cart'
                    type='font-awesome'
                    size={30}
                />}
                onPress={ () => navigate('ShoppingCart')}
            />
        </View>
    )
}

export default CartButton;