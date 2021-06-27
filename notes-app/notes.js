
const fs = require('fs');
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length == 0) {
        notes.push({    //push first note in the blank array
            title: title,
            body: body
        })
        saveNotes(notes); //save notes
        console.log(chalk.green('New Note added'));
    } else {
        console.log(chalk.red('Note title taken'));
    }
}

const saveNotes = (notes) => {
    dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return [];
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const updatedNotes = notes.filter((note) => note.title !== title);

    if (notes.length != updatedNotes.length) {
        saveNotes(updatedNotes);
        console.log(chalk.green('Note remove successfully!'));
    } else {
        console.log(chalk.red('No note found with this title!'))
    }
}

const readNote = (title) => {
    const notes = loadNotes();

    const note = notes.find((note) => note.title === title);

    if (note) {
        console.log(chalk.blue.inverse(note.title) + " : " + chalk.inverse(note.body))
    } else {
        console.log(chalk.red.inverse('note is not present with this title'));
    }
}

const getAllNotes = () => {
    const notes = loadNotes();

    console.log(chalk.inverse('Your Notes !'))

    notes.forEach(note => {
        console.log(note.title)
    });
}

module.exports = {
    addNote: addNote,
    loadNotes: loadNotes,
    removeNote: removeNote,
    getAllNotes: getAllNotes,
    readNote: readNote
};