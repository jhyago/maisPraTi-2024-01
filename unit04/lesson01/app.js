const conteudos = [
    [
        "Grécia me lembra filosofia",
        "Japão me lembra o monte Fuji e o Goku",
        "Coreia do sul me lembra Kpop"
    ],
    [
        "Alvorada me lembra minha vozinha",
        "Itália me lembra verão e cabriolet",
        "Florianópolis me lembra praia"
    ],
    [
        "Torres me lembra balonismo",
        "Portugal me lembra Nazaré",
        "Rio de Janeiro me lembra da minha sogra"
    ]
]

const btnTab1 = document.getElementById('btn-tab1')
const btnTab2 = document.getElementById('btn-tab2')
const btnTab3 = document.getElementById('btn-tab3')
const content = document.getElementById('content')

function displayContent(items) {

}

function activateButton(btn) {
    btnTab1.classname = ""
    btnTab2.classname = ""
    btnTab3.classname = ""
    btn.classname = 'active'
}

function handleClick(event) {
    const btnId = event.target.id
    activateButton(event.target)

    if(btnId === "btn-tab1"){
        displayContent(content[0])
    }
}

btnTab1.addEventListener("click", handleClick)
btnTab2.addEventListener("click", handleClick)
btnTab3.addEventListener("click", handleClick)