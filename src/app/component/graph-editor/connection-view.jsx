import React from 'react';
import NodeView from './node-view.jsx';

const ConnectionView = ({source, destination, updateNode}) =>
    <div className={'connection-holder'}>
        <NodeView node={source} updateNode={updateNode}/>
        <div className={'pointer'}>{' ⟶ '}</div>
        <NodeView node={destination} updateNode={updateNode}/>
    </div>
;

export default ConnectionView;
