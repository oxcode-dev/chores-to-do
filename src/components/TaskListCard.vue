<template>
    <div class="align-items-center px-3 py-2">
        <div class="d-flex pb-1">
            <span class="tag" :class="task.completed ? 'tag-red' : 'tag-blue'" style="cursor: pointer" @click="handleCompleteTask"  :title="`Mark as ${task.completed ? 'to do' : 'completed'}`">
                <Icon :name="task.completed ? 'x' : 'check-circle'" style="width:13px" />
            </span>
            <a href="#" class="text-inherit pl-2" @click.prevent="handleViewTask()">
                <span v-if="!task.completed">{{ task.title }}</span>
                <s v-else>{{ task.title }}</s>
            </a>
        </div>

        <div class="d-flex justify-content-between">
            <div>
                <small class="text-sm text-muted h-1x pr-2">{{ task.assigned_to }}</small>
                <small class="text-sm text-muted h-1x pr-2">{{ date(task.due_date) }}</small>
                <small @click="handleDeleteTask" class="text-danger text-sm h-1x" style="cursor:pointer; text-decoration: underline">delete</small>
            </div>

            <div>
                <span class="tag tag-rounded" :class="tagColor(task.priority)">{{ task.priority }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from '@/Shared/Icon'
import { taskPriorities} from '@/Helpers/config.js'
import { successAlert} from '@/Helpers/index.js'
export default {
    name: 'TaskListCard',
    components:{Icon},
    props:{
        task:{
            type: Object,
            required: true
        },
        id:{
            type: Number,
            required: true
        }
    },

    data(){
        return{
            action: this.task.completed
        }
    },

    methods:{
        date(date){
            return new Date(date).toJSON().slice(0,10)//.replace(/-/g,'/');
        },

        tagColor(tag){
            return 'tag-' + taskPriorities.find(n => n.name === tag).color
        },

        handleCompleteTask(){
            this.$store.dispatch('completeTask', {
                id: this.task.id,
                completed: !this.task.completed
            });
            if(this.task.completed)
            successAlert('Task Completed Successfully!');
        },

        handleViewTask(){
            this.$emit('view', this.task)
        },

        handleDeleteTask(){
            if(confirm('Are you sure, you want to delete this task?')){
                this.$store.dispatch('handleDeleteTask', this.task.id);
                successAlert('Task Deleted Successfully!');
            }
        }
    }
}
</script>

<style>

</style>
