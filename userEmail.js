//oject that models the data of gmail
var appData = {
    name: 'Gmail',
    //mailbox list that is in the object containing multiple strings
    mailboxes: [
            'inbox', 
            'junk',
            'sent',
    ],
    //contact list that is in the object containing an array
    contacts: [
            {name: 'Erin', draftEmail: false, email:'ew@cfh.org', lastMessage: "I wont be in class today", isSent: false}, 
            {name: 'Matt', draftEmail: false, email:'matt@cfh.org', lastMessage: "Today, we are going to rock it!", isSent: false}, 
            {name: 'Julian', draftEmail: false,email: 'julian@cfh.org', lastMessage: "Today, we are going to rock it!", isSent: false} 
    ]
    
    // Etc...
}
console.log(appData.mailboxes);//list of inbox names
console.log(appData.contacts);//get list of contacts

// list of email
for (i = 0; i < appData.contacts.length; i++) {
    console.log(appData.contacts[i].email)
} 
console.log(appData.contacts[1].lastMessage);//Last message of second contact
console.log(appData.contacts[0].isSent);//checks first contact to see if the message is sent or not
appData.contacts[0].isSent = true;//marks first contact's email as sent 
console.log(appData.contacts[0].isSent);//says that the email is sent
//adds a contact with draft email = true
appData.contacts.push({name: 'Matt', draftEmail: true, email:'matt@cfh.org', lastMessage: "Nice!", isSent: false});
console.log(appData.contacts);