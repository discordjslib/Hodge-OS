export default class {
    constructor(displayName = '', id = '', contacts = {}){
        this.displayName = displayName
        this.id = id
        this.contacts = contacts
    }
    deleteContact(identifier){
        this.contacts.filter(c => c.id !== identifier)
    }
    deleteContactByIndex(i){
        delete this.contacts[i]
    }
    addContact(c){
        this.contacts.append(c)
    }
}