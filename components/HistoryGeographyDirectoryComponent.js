import React, { Component} from 'react';
import ButtonDirectory from './ButtonDirectoryComponent';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        regions: state.regionsHistory
    };
}

class HistoryGeographyDirectory extends Component{

    static navigationOptions = {
        title: 'History and Geography'
    }

    

    render() {

    const { navigate } = this.props.navigation;

        return (
            <ButtonDirectory
                regions={this.props.regions.regionsHistory}
                buttonRight='Geography'
                buttonLeft='History'
                pressButtonLeft='HistoryDirectory'
                pressButtonRight='GeographyDirectory'
                navigate={navigate}
            />
        )
    }
}

export default connect(mapStateToProps)(HistoryGeographyDirectory);