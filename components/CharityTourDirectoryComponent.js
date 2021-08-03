import React from 'react';
import ButtonDirectory from './ButtonDirectoryComponent';

function HistoryGeographyDirectory(props){
    return (
        <ButtonDirectory
            regions={props.regions}
            buttonRight='Charities'
            buttonLeft='Tours'
        />
    )
}

export default HistoryGeographyDirectory;