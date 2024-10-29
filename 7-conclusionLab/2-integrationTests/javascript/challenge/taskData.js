let tasks = []
let idCounter = 0

const getTasks = () => tasks

const addTask = (title) => {
    const task = { id: idCounter++, title, completed: false }
    tasks.push(task)
    return task
}

const updateTask = (id, updates) => {
    const task = tasks.find((task) => task.id === id)

    if(task) {
        Object.assign(task, updates)
    }

    return task
}

const deleteTask = (id) => {
    const index = tasks.findIndex((task) => task.id === id)

    if(index > -1) {
        return tasks.splice(index, 1)[0]
    }

    return null
}

module.exports = { getTasks, addTask, updateTask, deleteTask }