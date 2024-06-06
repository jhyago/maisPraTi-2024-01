class Task {
    constructor(year, month, day, type, description){
        this.year = year
        this.month = month
        this.day = day
        this.type = type
        this.description = description
    }

    validateData(){
        for (let i in this){
            if(this[i] === undefined || this[i] === ""){
                return false
            }
        }
        return true
    }
}

class Database {

    constructor(){
        const id = localStorage.getItem('id')

        if(id === null){
            localStorage.setItem('id', 0)
        }
    }

    getTasks() {
        const tasks = Array()
        
        const id = localStorage.getItem('id')

        for(let i = 1; i <= id; i++){
            const task = JSON.parse(localStorage.getItem(i))

            if(task === null){
                continue
            }

            task.id = i
            tasks.push(task)
        }
        return tasks
    }

    createTask(task) {
        const id = getNextId()
        localStorage.setItem(id, JSON.stringify(task))
        localStorage.setItem('id', id)
    }

    removeTask(id) {
        localStorage.removeItem(id)
    }
}

const database = new Database()

function getNextId() {
    const nextId = localStorage.getItem('id')
    return parseInt(nextId) + 1;
}

function registerTask() {
    const year        = document.getElementById('year').value
    const month       = document.getElementById('month').value
    const day         = document.getElementById('day').value
    const type        = document.getElementById('type').value
    const description = document.getElementById('description').value

    const task = new Task(year, month, day, type, description)

    if(task.validateData()){
        database.createTask(task)
    }
}

function loadTasks() {
    const tasks = database.getTasks()

    const listTasks = document.getElementById('listTasks')

    tasks.forEach((t) => {
        const row = listTasks.insertRow()

        row.insertCell(0).innerHTML = `${t.day}/${t.month}/${t.year}`

        switch(t.type) {
            case '1': t.type = 'Studies'
                break
            case '2': t.type = 'Work'
                break
            case '3': t.type = 'Home'
                break
            case '4': t.type = 'Health'
                break
            case '5': t.type = 'Family'
                break
        }

        row.insertCell(1).innerHTML  = t.type
        row.insertCell(2).innerHTML = t.description

        const btn = document.createElement('button')

        btn.className = 'btn btn-danger'
        btn.id = t.id
        btn.innerHTML = 'Delete'
        btn.onclick = () => {
            const id = t.id
            database.removeTask(id)
            window.location.reload()
        }

        row.insertCell(3).append(btn)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    if(document.body.contains(document.getElementById('listTasks'))){
        loadTasks()
    }
})
