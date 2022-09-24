import NotesAPI from "./NotesAPI"

NotesAPI.savNote({
    title: "New Note!",
    body: "I am a new note."
});

console.log(NotesAPI.getAllNotes());
console.log('working ')
