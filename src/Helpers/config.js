import {randomDate} from './index';

export const taskPriorities = [
    {
        name: 'High',
        color: 'red'
    },
    {
        name:'Low',
        color: 'green'
    },
    {
        name: 'Critical',
        color: 'blue'
    },
    {
        name: 'Normal',
        color: 'orange'
    }
];

const date = (date) => {
    return new Date(date).toJSON().slice(0,10)//.replace(/-/g,'/');
}
export const taskCollaborators = ['Kevin Hart', 'Bill Burr', 'Chris Rock', 'Dave Chappelle'];

export const tasksDB = [
    {
        "id": 1,
        "title": "Create a Website",
        "description": "That will be done by Gopher.",
        "assigned_to": taskCollaborators[Math.floor(Math.random() * taskCollaborators.length)],
        "completed": false,
        "priority": 'Low',
        "due_date": date(randomDate(new Date(), new Date(2020, 2, 15))),
    },
    {
        "id": 2,
        "title": "Do dishes",
        "description": "That will be done by Gopher.",
        "assigned_to": taskCollaborators[Math.floor(Math.random() * taskCollaborators.length)],
        "completed": false,
        "priority": 'Low',
        "due_date": date(randomDate(new Date(), new Date(2020, 2, 15))),
    },
    {
        "id": 3,
        "title": "Get Template",
        "description": "That will be done by Gopher.",
        "assigned_to": taskCollaborators[Math.floor(Math.random() * taskCollaborators.length)],
        "completed": false,
        "priority": 'Low',
        "due_date": date(randomDate(new Date(), new Date(2020, 2, 15))),
    },
    {
        "id": 4,
        "title": "Cleaning the House",
        "description": "That will be done by Gopher.",
        "assigned_to": taskCollaborators[Math.floor(Math.random() * taskCollaborators.length)],
        "completed": false,
        "priority": 'Low',
        "due_date": date(randomDate(new Date(), new Date(2020, 2, 15))),
    }
];