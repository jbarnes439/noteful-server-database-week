require('dotenv').config();
const knex = require('knex');
const FoldersService = require('./folders/folders-service');
const NotesService = require('./notes/note-service');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
});

console.log(FoldersService.getAllFolders());
console.log(NotesService.getAllNotes());
