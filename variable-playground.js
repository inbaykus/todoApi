var person = {
	name: 'Indra',
	age: 23
};

function updatePerson (obj) {
	// obj = {
	// 	name: 'Indra',
	// 	age: 25
	// }

	obj.age = 25;
}

updatePerson(person);
console.log(person);