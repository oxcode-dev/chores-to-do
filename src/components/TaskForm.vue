<template>
    <div class="px-3 py-2">
        <form @submit.prevent="submit">
            <div class="form-group">
                <label for="title">Title</label>
                <input id="title" type="text" class="form-control" v-model="form.title" required />
            </div>
            <div class="form-group">
                <label for="assigned">Assigned To</label>
                <select id="assigned" class="form-control" required v-model="form.assigned_to">
                    <option :value="collaborator" v-for="(collaborator, key) in collaborators" :key="key">{{ collaborator }}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="priority">Priority</label>
                <select id="priority" class="form-control" required v-model="form.priority">
                    <option :value="priority.name" v-for="(priority, key) in priorities" :key="key">{{ priority.name }}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="due">Due Date</label>
                <input id="due" type="date" class="form-control" required v-model="form.due_date" />
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea id="description" class="form-control" required v-model="form.description"></textarea>
            </div>
            <div class="form-group">
                <div class="custom-control custom-checkbox" tabindex="0">
                    <input type="checkbox" class="custom-control-input" id="customCheck" v-model="form.completed">
                    <label class="custom-control-label" for="customCheck">Complete</label>
                </div>
            </div>
            <div class="mt-2">
                <button type="submit" class="btn btn-sm btn-info">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import { taskCollaborators, taskPriorities} from '@/Helpers/config';
import { successAlert} from '@/Helpers/index.js'
export default {
    name: 'TaskForm',
    props: {
        task:{
            type: Object,
            required: true
        }
    },
    data(){
        return{
            form: this.task
        }
    },

    methods:{
        submit(){
            if(this.form.id){
                this.$store.dispatch('handleEditTask', this.form);
                successAlert('Task Updated Successfully!');
            }
            else{
                this.$store.dispatch('handleAddTask', this.form);
                successAlert('Task Created Successfully!');
            }
            this.$emit('close', false)
        }
    },

    computed:{
        collaborators(){
            return taskCollaborators;
        },

        priorities(){
            return taskPriorities;
        }
    }
}
</script>

<style>

</style>
