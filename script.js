const form = document.querySelector('form');
const queueList = document.querySelector('#queue');

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = form.name
const age = form.age.value;
const gender = form.gender.value;
const problem = form.problem.value;

// calculate severity score based on the medical problem
let severityScore;
if (problem.includes('chest pain')) {
severityScore = 10;
} else if (problem.includes('difficulty breathing')) {
severityScore = 8;
} else if (problem.includes('bleeding')) {
severityScore = 6;
} else if (problem.includes('fever')) {
severityScore = 4;
} else {
severityScore = 2;
}

// create a new patient object with the input values and severity score
const patient = {
name,
age,
gender,
problem,
severityScore
};

// add the patient to the queue list
const li = document.createElement('li');
li.innerHTML = ${patient.name} - ${patient.age} - ${patient.gender} - ${patient.problem} - Severity Score: ${patient.severityScore};
// insert the patient into the queue based on their severity score
let inserted = false;
const queueItems = queueList.querySelectorAll('li');
queueItems.forEach(item => {
const itemSeverity = parseInt(item.innerText.match(/Severity Score: (\d+)/)[1]);
if (patient.severityScore > itemSeverity) {
queueList.insertBefore(li, item);
inserted = true;
return;
}
});

if (!inserted) {
queueList.appendChild(li);
}

// clear the form
form.reset();
});