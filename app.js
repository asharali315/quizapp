var questionAsked = 0
var score = 0
var questions = document.getElementById("question")
var optionsElement = document.getElementsByClassName("opt-element")
var correctAnswer = ""
var quiz = [
    {
        id: 0,
        question: "who was the last viceroy of India?",
        answer: "MOUNT BATTEN",
        options: [
            "MOUNT BATTEN",
            "CAPABLANCA",
            "CHARLIE",
            "WARREN HASTING"
        ]
    },
    {
        id: 1,
        question: "what was first generation of computer consist of: ",
        answer: "VACUUM TUBES",
        options: [
            "TRANSISTORS",
            "VACUUM TUBES",
            "ELECTRONIC CARDS",
            "DRUMS"
        ]
    },
    {
        id: 2,
        question: "how many byte does 1KB consist of:",
        answer: "1024 BYTES",
        options: [
            "1000 BYTES",
            "1036 BYTES",
            "1024 BYTES",
            "1020 BYTES"
        ]
    },
    {
        id: 3,
        question: "what is decimal equivalent of 1101",
        answer: "13",
        options: [
            "13",
            "10",
            "11",
            "12"
        ]
    },
    {
        id: 4,
        question: "According to De morgan theorem Nand Gate is equivalent to ____ gate ",
        answer: "OR GATE",
        options: [
            "AND GATE",
            "OR GATE",
            "N-OR GATE",
            "XOR GATE"
        ]
    },
    {
        id: 5,
        question: "What is the national animal of Pakistan",
        answer: "MARKHOR",
        options: [
            "SHEEP",
            "MARKHOR",
            "GOAT",
            "COW"
        ]
    },
    {
        id: 6,
        question: "who composed music for the national anthem of Pakistan",
        answer: "AHMED GHULAM ALI CHAGLA",
        options: [
            "AHMED GHULAM ALI CHAGLA",
            "HAFEEZ JHALANDRI",
            "ALLAMA IQBAL",
            "ALTAF HUSSAIN HALI"
        ]
    },
    {
        id: 7,
        question: "who composed national indian song Saare jahan se acha",
        answer: "ALLAMA IQBAL",
        options: [
            "ALLAMA IQBAL",
            "RABINDRANATH TAGORE",
            "JAWAHAR LAL NEHRU",
            "NONE"
        ]
    },
    {
        id: 8,
        question: "which type of bond is formed by mutual sharing of pair of electron between bounded atom",
        answer: "COVELENT BOND",
        options: [
            "IONIC BOND",
            "DATIVE BOND",
            "COVELENT BOND",
            "CO-ORDINATE COVALENT BOND"
        ]
    },
    {
        id: 9,
        question: "who is the current(2019-2020) world chess champion",
        answer: "MAGNUS CARLSEN",
        options: [
            "VISHWANATAN ANAND",
            "HIKARU NAKAMURA",
            "MAGNUS CARLSEN",
            "BROOKLYN DAVE"
        ]
    },
    {
        id: 10,
        question: "which is the fastest land animal",
        answer: "CHEETAH",
        options: [
            "CHEETAH",
            "TIGER",
            "LION",
            "PANTHER"
        ]
    },
    {
        id: 11,
        question: "Urdu was declared national language of Pakistan in:",
        answer: "APRIL 1954",
        options: [
            "APRIL 1954",
            "APRIL 1952",
            "APRIL 1951",
            "APRIL 1953"
        ]
    },
    {
        id: 12,
        question: "What was the old name of Lahore",
        answer: "LAVPUR",
        options: [
            "HUDUD-I-ALAM",
            "KALACHI",
            "BEGRAM",
            "LAVPUR"
        ]
    },
    {
        id: 13,
        question: "The first Rocket launched by Pakistan was:",
        answer: "RAHBAR",
        options: [
            "RAHBAR",
            "GHAURI",
            "BADAR",
            "GHAZNAVI"
        ]
    },
    {
        id: 14,
        question: "What type of operating system MS-DOS is :",
        answer: "COMMAND LINE INTERFACE",
        options: [
            "MENUDRIVENINTERFACE",
            "MULTITASKING",
            "GRAPHICAL USER INTERFACE",
            "COMMAND LINE INTERFACE"
        ]
    },
]
var array = []
var questionNo = 0



function start() {
    questionNo = Math.floor((Math.random() * 14))
    array.push(quiz[questionNo].id)
    questions.innerHTML = quiz[questionNo].question
    for (let index = 0; index < optionsElement.length; index++) {
        optionsElement[index].innerHTML = quiz[questionNo].options[index]

    }
    correctAnswer = quiz[questionNo].answer
    questionAsked++
}

function addActive(opt) {
    removeActive()
    opt.classList.add("active")
}

function removeActive() {
    var element = document.getElementsByClassName("active")
    for (let index = 0; index < element.length; index++) {
        element[index].classList.remove("active")

    }
}

function submit() {

    var active = document.getElementsByClassName("active")
    if (active[0].innerHTML === correctAnswer) {

        score += 10

        if (array.length ===10 ) {
            alert("you won your total score is :" + score)
            if (confirm("do you want to retry")) {
                window.location.reload()
            }
        }

        else {
            var flag = false
            do {

                questionNo = Math.floor((Math.random() * 14))
                for (let index = 0; index < array.length; index++) {
                    if (questionNo === array[index]) {
                        flag = true
                        break
                    }
                    flag=false
                }
            }
            while (flag)
            array.push(quiz[questionNo].id)
            questions.innerHTML = quiz[questionNo].question
            for (let index = 0; index < optionsElement.length; index++) {
                optionsElement[index].innerHTML = quiz[questionNo].options[index]

            }//end of for loop
            correctAnswer = quiz[questionNo].answer
            questionAsked++
            removeActive()
        }//second if elses



    }
    else {
        alert("Wrong answer  \n your total score is :" + score)
        score = 0
        if (confirm("do you want to retry")) {
            window.location.reload()
        }

    }//first if's else

}
