import { tasksDB} from '../../Helpers/config'
export default({
    state: {
        tasks: tasksDB,
        taskID: 4
    },
    mutations: {
        COMPLETE_TASK(state, payload){
            state.tasks.find(n => n.id === payload.id).completed = payload.completed;
        },

        ADD_TASK(state, payload){
            state.taskID += 1;
            payload.id = state.taskID;
            state.tasks.push(payload);
        },

        UPDATE_TASK(state, payload){
            // return console.log(payload)
            state.tasks.find(n => n.id === payload.id).title = payload.title;
            state.tasks.find(n => n.id === payload.id).description = payload.description;
            state.tasks.find(n => n.id === payload.id).assigned_to = payload.assigned_to;
            state.tasks.find(n => n.id === payload.id).due_date = payload.due_date;
            state.tasks.find(n => n.id === payload.id).priority = payload.priority;
            state.tasks.find(n => n.id === payload.id).completed = payload.completed;
        },

        DELETE_TASK(state, payload){
            let tasks = state.tasks.filter(n => n.id !== payload);
            state.tasks = tasks;
        },
    },
    actions: {
        completeTask(context, payload){
            context.commit('COMPLETE_TASK', payload)
        },

        handleAddTask(context, payload){
            context.commit('ADD_TASK', payload)
        },

        handleEditTask(context, payload){
            context.commit('UPDATE_TASK', payload)
        },

        handleDeleteTask(context, payload){
            context.commit('DELETE_TASK', payload)
        }
    },
    getters:{
        getTasks: state=> state.tasks,
    }
})