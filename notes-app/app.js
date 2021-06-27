const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')

//create note
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // for must type title on console
            type: 'string'
        }
    },
    handler: (argv) => { notes.addNote(argv.title, argv.body); }
})

//remove note
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'remove note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => { notes.removeNote(argv.title); }
})

//read note
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'read a particular note',
            demandOption: 'true',
            type: 'string'
        }
    },
    handler: (argv) => { notes.readNote(argv.title) }
})

//get all notes
yargs.command({
    command: 'list',
    describe: 'all notes',

    handler: () => { notes.getAllNotes() }
})

yargs.parse();








// console.log('app file');

// fs.writeFileSync('file1.txt',JSON.stringify(obj));

// fs.appendFileSync('notes.txt','and I want to become a great software developer')



