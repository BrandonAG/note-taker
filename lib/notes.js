const fs = require("fs");
const path = require("path");

function findById(id, notes) {
    const result = notes.filter((note) => note.id === id)[0];
    return result;
}
  
function createNewNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notes }, null, 2)
    );
    return note;
}

function deleteNote(id, notes) {
    // const result = notes.filter((note) => note.id !== id);
    const index = notes.findIndex((note) => note.id === id)
    notes.splice(index, 1)
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notes }, null, 2)
    );
    return;
}

function validateNote(note) {
    if (!note.title || !note.text) {
        return false;
    }
    return true;
}

module.exports = {
    findById,
    createNewNote,
    deleteNote,
    validateNote,
};