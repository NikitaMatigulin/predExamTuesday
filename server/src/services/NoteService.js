const { Note } = require("../db/models");

class NoteService {
  static async create(data) {
    return await Note.create(data);
  }

  static async getAll() {
    return await Note.findAll();
  }

  static async getById(id) {
    return await Note.findByPk({ where: { id } });
  }

  static async update(id, data) {
    const note = await Note.findByPk(id);
    if (note) {
      return await note.update(data);
    }
    throw new Error("Note not found");
  }

  static async delete(id) {
    const note = await Note.findByPk(id);
    if (note) {
      return await note.destroy();
    }
    throw new Error("Note not found");
  }
}
module.exports = NoteService;
