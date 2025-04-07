let contactList = [];

let iD = 0;

function createContact(name, phoneNumber, email, address){
    iD++;
    return {
        id : iD,
        name : name,
        phoneNumber : phoneNumber,
        email : email
    }
}

function addContact(){
    let name = prompt("Enter name:");
    let phoneNumber = prompt("Enter phone number:");
    let email = prompt("Enter email:");

    let newContact = createContact(name, phoneNumber, email);
    contactList.push(newContact);
    alert("Contact added successfully!");

} 

function viewContacts(){
    // console.log(`==========Contact List==========`);
    if(contactList.length == 0){
        alert("No contacts available!");
        return;
    }

    // for(let i = 0; i < contactList.length; i++){
    //     alert(`ID: ${contactList[i].id}, 
    //         Name: ${contactList[i].name}, 
    //         Phone Number: ${contactList[i].phoneNumber}, 
    //         Email: ${contactList[i].email}`);
    // }    
    let text = contactList.reduce((result, contact, index) => { //index of array above
        return result + 
        `${index + 1}. ID: ${contact.id}
        Tên: ${contact.name}
        Email: ${contact.email}
        Phone: ${contact.phoneNumber}
        -----------------\n`;
    }, "");

    alert(text);
}

function searchContactByPhoneNumber(){
    let searchNumber = prompt("Enter the phone number to search:");
    let foundContact = contactList.find(contact => contact.phoneNumber === searchNumber);

    if(foundContact){
        alert(`Contact found: 
        ID: ${foundContact.id}, 
        Name: ${foundContact.name}, 
        Phone Number: ${foundContact.phoneNumber}, 
        Email: ${foundContact.email}`);
    }else{
        alert("No contact found with that phone number!");
    }
}

function editContactById(){
    let idTOEdit = prompt("Enter the ID of the contact to edit:");

    contactList[idTOEdit - 1].name = prompt("Enter new name:");
    contactList[idTOEdit - 1].phoneNumber = prompt("Enter new phone number:");
    contactList[idTOEdit - 1].email = prompt("Enter new email:");

    alert("Contact updated successfully!");
}

function deleteContactById(){
    let idToDelete = prompt("Enter the ID of the contact to delete:");
    let indexToDelete = contactList.findIndex(contact => contact.id == idToDelete);

    if(indexToDelete !== -1){
        contactList.splice(indexToDelete, 1);
        alert("Contact deleted successfully!");
    }else{
        alert("No contact found with that ID!");
    }
}

while(true){
    let choice = prompt(`==========Menu==========
        1. add to contacts
        2. view contacts
        3. search contacts via phone numbers
        4. edit contact with id
        5. delete contact with id
        6. exit`);

    switch(choice){
        case "1" : {
            addContact();
            break;
        }
        case "2" : {
            viewContacts();
            break;
        }
        case "3" : {
            searchContactByPhoneNumber();

            break;
        }
        case "4" :{
            editContactById();
            break;
        }
        case "5" : {
            deleteContactById();
            break;
        }
        case "6" : {
            alert("Goodbye!");
            break;
        }
    }
    if(choice == "6"){
        break;
    }
}

