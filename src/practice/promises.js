const API_QUESTIONS_URL = 'https/';
const API_SUBMISSIONS_URL = 'https/';


async function fetchQuestionsAndSubmissions() {
 
    const [questionsRes, submissionsRes] = await Promise.all([
        fetch(API_QUESTIONS_URL),
        fetch(API_SUBMISSIONS_URL)
    ]);
    // Use Promise.all for multiple fetch() for json() (API calls)

    return await Promise.all([
        questionsRes.json(),
        submissionsRes.json()
    ]);

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

function createCategory(category, questions, submissionsById) {
    // Create div with class="category"
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');

    // Create h2 element that has text content category and add to div

    let correctCount = 0;

    questions.forEach(question => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        const status = document.createElement('div');
        status.classList.add('status');

        // Some JS functions

        // OPTIONAL CHAINING (?): only evaluates if non-null
        const statusClass = submissionsById[question.id]?.toLowerCase()?.replace('_', '-');

        // NULLISH COALESCING: provide fallback if null
        status.classList.add(statusClass ?? 'unattempted');
        questionDiv.append(status);

        if (submissionsById[question.id] === 'CORRECT') {
            correctCount++;
        }

        const h3 = document.createElement('h3');
        h3.textContent = question.name;
        questionDiv.append(h3);
        categoryDiv.append(questionDiv);
    })

    // Use `` and ${} to combine variables with strings
    h2.textContent = `${category} - ${correctCount} / ${questions.length}`
    const h2 = document.createElement('h2');

    // Use PREPEND to append to beginning
    categoryDiv.prepend(h2);
    return categoryDiv;
}

fetchAndAppendQuestions();

async function fetchAndAppendQuestions() {
    const [questions, submissions] = await fetchQuestionsAndSubmissions();
    const questionsByCategory = getQuestionsByCategory(questions);
    
    const submissionsById = getSubmissionsById(submission);
    const wrapper = document.getElementById('wrapper') 

    for (const [category, questions] of Object.entries(questionsByCategory)) {
       const categoryDiv = createCategory(category, questions, submissionsById);
       wrapper.append(categoryDiv);
    }

}

function getSubmissionsById(submissions) {
    const submissionsById = {};
    submissions.forEach(submission => {
        submissionsById[submission.questionId] = submission.status;

    });

    return submissionsById;
}