import React from 'react';
import propsTypes from 'prop-types'
HobbyList.propsTypes = {
    hobbyList : propsTypes.array
}

HobbyList.defautProps = {
    hobbyList : []
}
function HobbyList(props){
    const { hobbyList } = props;
    return (
        <ul>
            {hobbyList.map(hobby => (
            <li key={hobby.id}>{hobby.title}</li>
            ))}
        </ul>
    )
}
export default HobbyList