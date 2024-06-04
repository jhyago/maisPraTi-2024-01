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

function registerTask() {
    const year        = document.getElementById('year').value
    const month       = document.getElementById('month').value
    const day         = document.getElementById('day').value
    const type        = document.getElementById('type').value
    const description = document.getElementById('description').value

    const task = new Task(year, month, day, type, description)

    if(task.validateData()){
        Database.createTask(task)
    }
}

class Database {
    createTask(task) {
        localStorage.setItem(id, JSON.stringify(task))
    }
}