export  class NotesAPI{
    

    static getAllNotes(){
        const notes = JSON.parse(localStorage.getItem('notesapp-notes') || '[]');


        return notes.sort((a,b)=>{
            return new Date(a.updated) > new Date(b.updated) ? -1: 1;
        })

         
    }

    static savNotes(noteToSave){
        const notes = NotesAPI.getAllNotes();
        noteToSave.id = Math.floor(Math.random() * 1000000);
        noteToSave.updated = new Date().toString();
        notes.push(noteToSave);
        localStorage.setItem('notesapp-notes',JSON.stringify(notes))
    }

    static deleteNote(id){

    }
}
console.log('hello from notesapi');