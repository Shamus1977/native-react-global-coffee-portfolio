import React from 'react';
import Directory from './DirectoryComponent';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        charities: state.charites
    }
}


function CharityDirectoryComponent(props){

    return (
        <Directory
            regions={props.charites.charites}
        />
    )
}

export default connect(mapStateToProps)(CharityDirectoryComponent);