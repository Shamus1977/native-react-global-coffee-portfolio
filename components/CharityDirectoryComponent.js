import React from 'react';
import Directory from './DirectoryComponent';
import { REGIONS_CHARITIES } from '../shared/regionsCharities';


function CharityDirectoryComponent(props){

    const regions = REGIONS_CHARITIES;
    return (
        <Directory
            regions={regions}
        />
    )
}

export default CharityDirectoryComponent;