import React, { Component} from 'react';
import ButtonDirectory from './ButtonDirectoryComponent';
import { REGIONS_HISTORY } from '../shared/regionsHistory';

class HistoryGeographyDirectory extends Component{
    constructor(props){
        super(props);
        this.state = {
            regions: REGIONS_HISTORY,
        }
    }

    static navigationOptions = {
        title: 'History and Geography'
    }

    

    render() {

    const { navigate } = this.props.navigation;

        return (
            <ButtonDirectory
                regions={this.state.regions}
                buttonRight='Geography'
                buttonLeft='History'
                pressButtonLeft='HistoryDirectory'
                pressButtonRight='GeographyDirectory'
                navigate={navigate}
            />
        )
    }
}

export default HistoryGeographyDirectory;