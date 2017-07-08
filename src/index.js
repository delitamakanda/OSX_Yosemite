import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GroceryList from './GroceryList';
import TrelloBoardContainer from './TrelloBoardContainer';

/*
let cardsList = [
    {
        id: 1,
        title: "Always stay update",
        description: "i want to be *stay update*",
        status: "in-progress",
        color: "#bd8d31",
        tasks: []
    },
    {
        id: 2,
        title: "Write some code",
        description: "Code anytime everywhere",
        status: "todo",
        color: "#3a7e28",
        tasks: [
            {
                id: 1,
                name: "Trello Example",
                done: true
            },
            {
                id: 2,
                name: "Trello Example",
                done: false
            },
            {
                id: 3,
                name: "A component",
                done: false
            }
        ]
    },
    {
        id: 3,
        title: "New card very very very very long to show the Proptypes validation.",
        description: "Text Example",
        status: "done",
        color: "#bbdd77",
        tasks: []
    },
];
*/

ReactDOM.render(<TrelloBoardContainer />, document.getElementById('root'));

