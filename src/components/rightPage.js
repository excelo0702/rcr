import React from 'react';
import RightPageCard from './rightPageCard';

function rightPage(){
    return(
        <div>
        
                <input placeholder="Search Bar" style={{maxWidth:'700px', width:'700px', margin:'10px 150px 10px 10px'}} />
            <RightPageCard/>
            <RightPageCard/>
            <RightPageCard/>
            <RightPageCard/>
            <RightPageCard/>
            <RightPageCard/>
        </div>
    );
}

export default rightPage;