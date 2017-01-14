//require(["lib/modules/add","lib/modules/edit","lib/modules/deletenote"],

var notesapp = {
   notes:[],
   addNoteButton: document.getElementById("addNoteButton"),
   displayNotesButton: document.getElementById("displayNotes"),
  displayNotes:function(){
    console.log("Notes:", this.notes);
    },
  addNote:function(note){
    this.notes.push(note);
    addNoteButton.addEventListener('click',function(e){
    console.log("add button clicked");
    this.displayNotes();
    })
    },
   editNote:function(position, newNote){
     this.notes[position] = newNote;
     this.displayNotes();
    },
   eraseNote:function(position){
     this.notes.splice(position,1);
     this.displayNotes();
   }
};

console.log(notesapp.addNote("newnote")) //test addnote in console
//console.log(notesapp.editNote(0,"first")); //test editsnote
//console.log(notesapp.eraseNote(0)); //test eraseNote
