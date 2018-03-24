import React from 'react';

const ContentInput = (props) => (
    <div>
        <textarea 
            rows="38" 
            cols="45" 
            value={props.content}
            onChange={(e) => {props.handleInput(e.target.value)}}
        />
    </div>
);

  export default ContentInput