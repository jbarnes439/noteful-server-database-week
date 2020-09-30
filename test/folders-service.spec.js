const { expect } = require("chai")
const FolderssService = require('../src/folders/folders-service');
const knex = require('knex');

describe(`Folder service object`, function() {
  let db;
  let testFolders = [
    {
      id: 1,

    }
  ];

  before(() => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    });
  });
  
  describe(`getAllFolders()`, () => {
    it(`resolves all folders from 'noteful_folders' table`, () => {

    });
  });
});