// CODE here for your Lambda Classes
class Person {
    constructor(personStuff) {
        this.name = personStuff.name;
        this.location = personStuff.location;
        this.age = personStuff.age;
        this.gender = personStuff.gender;
        this.favLanguage = personStuff.favLanguage;
        this.specialty = personStuff.specialty;
        this.catchPhrase = personStuff.catchPhrase;
    }
    sayName() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
};

class Instructor extends Person {
    constructor(constructorStuff) {
        super(constructorStuff);
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
    points(student) {
        student.grade += Math.ceil(Math.random() * 15)
        student.grade -= Math.ceil(Math.random() * 15)
        return `${this.name} changed ${student.name}'s grade to ${student.grade}`
    }
};

class Student extends Person {
    constructor(studentStuff) {
        super(studentStuff);
        this.previousBackground = studentStuff.previousBackground;
        this.className = studentStuff.className;
        this.favSubjects = studentStuff.favSubjects;
        this.grade = Math.ceil(Math.random() * 100);
    }
    listsSubjects() {
        return this.favSubjects.toString();
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate(student) {
        if (student.grade >= 70) {
            return 'You Graduated!'
        } else {
            return 'Keep working to get your grade up'
        }
    }
}

class ProjectManager extends Instructor {
    constructor(pmStuff) {
        super(pmStuff);
        this.gradClassName = pmStuff.gradClassName;
        this.favInstructor = pmStuff.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel} '@channel standup times!​​​​​'`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const olga = new Instructor({
    name: 'Olga',
    location: 'Germany',
    age: 68,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Teaching FSW',
    catchPhrase: `We will go over that later`
});

const george = new Instructor({
    name: 'George',
    location: 'Utah',
    age: 35,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Being a genius',
    catchPhrase: 'Got distracted'
});

const bill = new Instructor({
    name: 'Bill',
    location: `Mom's basement`,
    age: 48,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Being frugal by not paying rent',
    catchPhrase: `I don't know why girls don't like to date me`
})

const jason = new ProjectManager({
    name: 'Jason',
    location: 'California',
    age: 30,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'Great job',
    gradClassName: 'Web23',
    favInstructor: 'George'
});

const eric = new ProjectManager({
    name: 'Eric',
    location: 'Las Vegas',
    age: 25,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'cooking apps',
    catchPhrase: 'I never gamble',
    gradClassName: 'Web23',
    favInstructor: 'Napolean'
});

const penny = new ProjectManager({
    name: 'Penny',
    location: 'Oregon',
    age: 42,
    gender: 'female',
    favLanguage: 'Javascript',
    specialty: 'extreme ironing',
    catchPhrase: `What do you mean, you pump your own gas?`,
    gradClassName: 'Web23',
    favInstructor: 'Olga'
});

const morgan = new Student({
    name: 'Morgan',
    location: 'Oklahoma',
    age: 22,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    previousBackground: 'music prodigy',
    catchPhrase: 'Weeks of coding can save you hours of planning',
    className: 'FSW23',
    favSubjects: ['Web Dev', 'music', 'sulking', 'overthinking']
});

const greg = new Student({
    name: 'Greg',
    location: 'Florida',
    age: 55,
    gender: 'male',
    favLanguage: 'surfScript',
    specialty: 'surfing',
    previousBackground: 'surfing, only surfing',
    catchPhrase: 'surfing is the best thing to do!',
    className: 'FSW23',
    favSubjects: ['Web Dev', 'sleeping', 'coding', 'music']
});

const derek = new Student({
    name: 'Derek',
    location: 'New York',
    age: 41,
    gender: 'male',
    favLanguage: 'Italian',
    specialty: 'Front-end',
    previousBackground: 'Cop',
    catchPhrase: 'it is all trial and error',
    className: 'FSW23',
    favSubjects: ['Web Dev', 'cooking', 'hiking', 'family time']
});

console.table(greg.location);
console.table(greg.catchPhrase);
console.table(morgan.PRAssignment('math'));
console.table(derek.sprintChallenge('Node'));
console.table(jason.standUp('FSW23'));
console.table(morgan.listsSubjects());
console.table(olga.grade(morgan, 'Web Dev'));
console.table(bill.demo('how to code from your Mom\'s basement'));
console.table(jason.debugsCode(derek, 'JavaScript'));
console.table(morgan.grade);
console.table(olga.points(morgan));
console.table(morgan.graduate(morgan));
