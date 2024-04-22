let questions = [
    {
    question: "15+15?",
    options: ["30", "35", "81", "44"],
    correctAnswer: "30"
    },
    {
    question: "12 * 12?",
    options: ["420", "120", "122", "144"],
    correctAnswer: "144"
    },
    {
    question: "Количество океанов в на планете земля?",
    options: ["7", "3", "4", "5"],
    correctAnswer: "5"
    },
    {
    question: "Сасиска в...?",
    options: ["печке", "тесте", "ловаше", "рулете"],
    correctAnswer: "тесте"
    },
    {
    question: "какого цвета вода?",
    options: ["белого", "серого", "чёрного", "прозрачная"],
    correctAnswer: "прозрачная"
    },
    {
    question: "сколько метров в километре?",
    options: ["10", "100", "1000", "10000"],
    correctAnswer: "1000"
    },
    ];

    let currentQuestion = 0;
    let correctAnswers = 0;
    // функция для отображения вопроса с ответами
    function displayQuestion() {
    let questionElement = document.getElementById("question");
    questionElement.textContent = `Вопрос ${currentQuestion+1}: ${questions[currentQuestion].question}`
    let optionsElement = document.getElementById("options");
    //очистка
    optionsElement.innerHTML = "";
    //масив ответов
    let optionsArray = questions[currentQuestion].options;
    //создаём кнопки с ответами и привязываем к ним функцию nextquestion
    optionsArray.forEach((option)=>{
        let button = document.createElement('button');
        optionsElement.append(button);
        button.textContent = option;
    })
    // при клике на блок с кнопками:
    optionsElement.addEventListener('click', (event)=> {
    // получаем переменную кнопку на которую кликнули
        let target = event.target;
        nextQuestion(target.textContent);
    // вызовем функцию проверки ответа и перехода к следующему вопросу
    }, { once: true })
}

    // функция для перехода к следующему вопросу
    function nextQuestion(answer) {
    // если переданный ответ = корректному, то 
        if(answer === questions[currentQuestion].correctAnswer) {
    // Увеличиваем на единицу кол-во верных ответов
            correctAnswers++;
    }

    currentQuestion++; // переход к следующему вопросу
    if(currentQuestion < questions.length) { // если № текущего вопроса меньше кол-ва вопросов то отображаем следующий вопрос
        displayQuestion();
    } else {
        // иначе отобразить результат теста
       displayResult()
    }
}

// функция отображения результата теста
function displayResult() {
    let username = document.getElementById("name").value
    let scores = 2;
    if(correctAnswers == 3) {scores = scores + 1;}  
    if(correctAnswers == 4) {scores = scores + 1;}
    if(correctAnswers == 5) {scores = scores + 2;}
    if(correctAnswers == 6) {scores = scores + 3;}
    let procent = 0;
    if(correctAnswers == 1) {procent = procent + 16.6}
    if(correctAnswers == 2) {procent = procent + 33.2}
    if(correctAnswers == 3) {procent = procent + 50}
    if(correctAnswers == 4) {procent = procent + 66.6}
    if(correctAnswers == 5) {procent = procent + 83.3}
    if(correctAnswers == 6) {procent = procent + 100}
    const questionElement = document.getElementById("question"); //блок с вопросом
    const optionsElement = document.getElementById("options"); //Блок с вариантоми ответов
    const resultElement = document.getElementById("result"); // блок для отображения результата
    questionElement.style.display = 'none'
    optionsElement.style.display = 'none'
    resultElement.textContent = `${username}, правильных ответов: ${correctAnswers}, (${procent}%) из ${questions.length}, оценка ${scores}`;
}


displayQuestion();