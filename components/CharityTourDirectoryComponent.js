import React from 'react';
import ButtonDirectory from './ButtonDirectoryComponent';

function CharityTourDirectory(props){
    return (
        <ButtonDirectory
            regions={props.regions}
            buttonRight='Charities'
            buttonLeft='Tours'
        />
    )
}

export default CharityTourDirectory;