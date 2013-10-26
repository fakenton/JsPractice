function Profile() {
	var character = this;
	return 'name: '+ character.name +'\n'+ 'age: ' + character.age +'\n'+ 'skill: ' + character.skill;
}

function kill(character) {
	character.killedBy = this.name;
	character.status ='dedz';
}

function attack(character) {
	var dmg = Math.random*10;
	character.life -= 10;
} 

function character(name, age, skill, life) {
	return {
		name: name,
		age: age,
		skill: skill,
		profile: Profile,
		life: life,
		status: 'alive',
		kill: kill,
		killedBy: null,
		attack: attack 
	}
}

var kenton = new character('kenton', 12, 'biking', 100);
var monster = new character('monster', 12, 'coding', 20);

do{
	alert('monster ahead');
	var choice = prompt('enter a option: attack')
	choice = choice.toLowerCase();

	if(choice == 'attack'){
		kenton.attack(monster)
		alert('you attacked the monster, the monster has ' + monster.life + 'health')
	}

	if(monster.life <= 0 ){
		kenton.kill(monster)
	}
}while(monster.status != 'dedz');

alert('you killed the monster');