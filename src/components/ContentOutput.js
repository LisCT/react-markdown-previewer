import React from 'react';
const marked = require('marked');

const ContentOutput = (props) => (
    <div 
        className="content__output"
        dangerouslySetInnerHTML={{__html: marked(props.content)}}
    >
    </div>
);

export default ContentOutput;