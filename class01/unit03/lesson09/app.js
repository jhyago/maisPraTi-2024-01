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

    createTask(task) {
        const id = getNextId()
        localStorage.setItem(id, JSON.stringify(task))
        localStorage.setItem('id', id)
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
