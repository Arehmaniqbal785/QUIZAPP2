const question = [
    {
        'que': 'which of the following of the markup language',
        'a': 'HTMl',
        'b': 'CSS',
        'c': 'JAVA SCRIPT',
        'd': 'PHp',
        'correct': 'a'

    },

    {
        'que': 'What year was Java script lunched? ',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'None of the above',
        'correct': "b",

    },

    {
        'que': 'What dose CSS stand for? ',
        'a': 'Hyper markeo language',
        'b': 'Cascading style sheet    ',
        'c': 'Jason object notation',
        'd': 'Helicopters Terminals Motorboats Lamborginies',
        'correct': "b",

    },
    {
        'que': '',
        'a': 'Hyper markeo language',
        'b': 'Cascading style sheet    ',
        'c': 'Jason object notation',
        'd': 'Helicopters Terminals Motorboats Lamborginies',
        'correct': "b",

    }

]

let index = 0;
let total = question.length
console.log(total)
let right = 0,
    wrong = 0;
const quebox = document.getElementById("quebox")
const optioninput = document.querySelectorAll('.options')
const loardquation = () => {
    if(index === total){
        return endQuiz()
    }
    reset();
    const data = question[index]
    // debugger
    quebox.innerHTML = ` ${index + 1}) ${data.que}`;
    optioninput[0].nextElementSibling.innerText = data.a;
    optioninput[1].nextElementSibling.innerText = data.b;
    optioninput[2].nextElementSibling.innerText = data.c;
    optioninput[3].nextElementSibling.innerText = data.d;
}

const submintquiz = () => {
    const data = question[index]
    const ans = getanswer()
    if (ans === data.correct) {
        right++
    } else {
        wrong++;
    }
    index++
    loardquation();
    return;
}

const getanswer = () => {
    let answer;
    optioninput.forEach(
        (input) => {

            if (input.checked) {
                answer = input.value;
            
            }

        }
    )
    return answer;
}
const reset = () => {

    optioninput.forEach(
        (input) => {

            input.checked = false

        }
    )
}


const endQuiz = () => {
        document.getElementById("box").innerHTML = `
<div style= "text-align:center">
        <h3>Thank you for playing the Quiz </h3>
        <h2> ${right} / ${total} are correct </h2>
        </div>
        `
}


loardquation();

