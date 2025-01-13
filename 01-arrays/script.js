const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log(`quarto teacher: ${fourthTeacher}`)

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers.splice(4, 1, 'Patrick');
console.log(`teachers: ${teachers}`)

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log(`teachers: ${teachers}`)
console.log(`teacher rimosso: ${lastTeacher}`)

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(`teachers: ${teachers}`)
console.log(`teacher rimosso: ${firstTeacher}`)

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa');
console.log(`teachers: ${teachers}`)

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

teachers.unshift('Sarah');
console.log(`teachers: ${teachers}`)

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf('Lewis');
console.log(`teachers: ${teachers}`)
console.log(`l'indice di ${teachers[lewisIndex]} è ${lewisIndex}`)

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
if (teachers.length > 0) {
  const isTeachersEmpty = false;
  console.log(`teachers è un array vuoto? ${isTeachersEmpty}`)
} else {
  const isTeachersEmpty = true;
  console.log(`teachers è un array vuoto? ${isTeachersEmpty}`)
}


//start code
//end code