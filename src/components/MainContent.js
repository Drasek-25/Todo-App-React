import React from 'react';
import AddItem from './AddItem'
import Todos from './Todos'

function MainContent(){
    return(
        <div className='col mainContent'>
            <AddItem/>
            <Todos />
        </div>
    );
}
export default MainContent;