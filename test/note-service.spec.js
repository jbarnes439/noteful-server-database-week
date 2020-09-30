const { expect } = require("chai")
const NotesService = require('../src/notes/note-service');
const knex = require('knex');

describe(`Note service object`, function() {
  let db;
  
  before(() => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    });
  });

  describe(`getAllNotes()`, () => {
    it(`resolves all notes from 'noteful_notes' table`, () => {

    });
  });
});