const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
console.log(teachers)
const reversedTeachers = teachers.reverse();
console.log(`teachers invertiti: ${reversedTeachers}`)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}
console.log(teachers)
console.log(`teachers con nome più lungo di 5 lettere: ${longNames}`)

// 3. Rimuovi 'Ed' dall'array teachers

teachers.splice(5, 1);
console.log('Ed rimosso', teachers)

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

const isFabioPresent = teachers.includes("Fabio");
console.log(teachers)
console.log(`Fabio è presente tra i teachers? ${isFabioPresent}`)

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.toString();
console.log(teachersString)


//start bonus
//end bonus