<template>
    <div>
        <h1>To-Do</h1>
        <v-card>
            <v-data-table :items="todos" :headers="headers"></v-data-table>

        </v-card>
    </div>
</template>

<script setup>
const headers = [
    {title: 'ID', key: 'id'},
    {title: 'Title', key: 'title'},
    {title: 'Status', key: 'completed'}
]
const todos = ref([])

//Function to Populate the To-Do List
const getTodos = async () => {
 const data = await $fetch('https://jsonplaceholder.typicode.com/todos')
    todos.value = data
 console.log(data)
 
}

onMounted(() => {
    getTodos()

})
</script>