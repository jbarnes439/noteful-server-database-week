const FoldersService = {
  getAllFolders(knex) {
    return knex('noteful_folders')
      .select('*');
  },

  insertFolder(knex, newFolder) {
    return knex
      .insert(newFolder)
      .into('noteful_folders')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },

  getById(knex, id) {
    return knex('noteful_folders')
      .select('*')
      .where('id', id)
      .first();
  },

  deleteFolder(knex, id) {
    return knex('noteful_folders')
      .where({ id })
      .delete();
  },

  updateFolderName(knex, id, newFolderName) {
    return knex('noteful_folders')
      .where({ id })
      .update(newFolderName);
  }
};

module.exports = FoldersService;