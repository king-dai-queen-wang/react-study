import React from 'react';

const ToDoLink = ({active, children, onClick}) => (
    <button onClick={onClick}
            disabled={active}
            style={{marginLeft: '4px'}}>
        {children}
    </button>
);

/*ToDoLink.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};*/

export default ToDoLink;
