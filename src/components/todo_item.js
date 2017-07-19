import React from 'react';

export const TodoItem = ({todoItem, indexKey, deleteTodo}) => {
    return (
        <li className="list-group-item" key={indexKey}>
            {todoItem}
            <button type="button"
                    style={deleteBtnStyle}
                    className="btn btn-danger"
                    onClick={() => { deleteTodo(indexKey) }}>Delete
            </button>
        </li>
    );
};

const deleteBtnStyle = {
    float: 'right',
    position: 'relative',
    top: '-.4em'
};



