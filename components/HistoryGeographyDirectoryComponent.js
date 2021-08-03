import React from 'react';
import ButtonDirectory from './ButtonDirectoryComponent';

function HistoryGeographyDirectory(props){
    return (
        <ButtonDirectory
            regions={props.regions}
            buttonRight='Geography'
            buttonLeft='History'
        />
    )
}

export default HistoryGeographyDirectory;