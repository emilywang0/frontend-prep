const API_QUESTIONS_URL = 'https/';


async function fetchQuestionsAndSubmissions() {
    const response = await fetch(API_QUESTIONS_URL);
    const questions = await response.json();

    return questions; 
}

function getQuestionsByCategory(questions) {
    const questionsByCategory = {};

    questions.forEach(question => {
        if (questionsByCategory.hasOwnProperty(question.category)) {
            questionsByCategory(question.category).push(question);
        } else {
            questionsByCategory(question.category) = {question};
        }
    });
    return questionsByCategory;
}

function createCategory(category, questions) {
    // Create div with class="category"
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');

    // Create h2 element that has text content category and add to div
    const h2 = document.createElement('h2');
    h2.textContent = category;
    categoryDiv.append(h2);

    questions.forEach(question => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        const h3 = document.createElement('h3');
        h3.textContent = question.name;
        questionDiv.append(h3);
        categoryDiv.append(questionDiv);
    })
    return categoryDiv;
}

fetchAndAppendQuestions();

async function fetchAndAppendQuestions() {
    const questions = await fetchQuestionsAndSubmissions();
    const questionsByCategory = getQuestionsByCategory(questions);
    
    const wrapper = document.getElementById('wrapper') 

    for (const [category, questions] of Object.entries(questionsByCategory)) {
       const categoryDiv = createCategory(category, questions);
       wrapper.append(categoryDiv);
    }

}