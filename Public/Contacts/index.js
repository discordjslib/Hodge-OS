document.addEventListener('DOMContentLoaded', function () {
    // Retrieve contacts from Local Storage
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];

    // Render existing contacts
    const contactList = document.querySelector('.contact-list');
    savedContacts.forEach(contact => {
        const newContact = createContactElement(contact);
        contactList.appendChild(newContact);
    });

    const addContactForm = document.getElementById('newContactForm');
    const addContactButton = document.getElementById('addContact');

    addContactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        // Create new contact entry
        const newContact = { name, email, phone };

        // Save the new contact to Local Storage
        savedContacts.push(newContact);
        localStorage.setItem('contacts', JSON.stringify(savedContacts));

        // Render the new contact
        const contactList = document.querySelector('.contact-list');
        const newContactElement = createContactElement(newContact);
        contactList.appendChild(newContactElement);

        // Clear the form
        addContactForm.reset();
    });

    function createContactElement(contact) {
        // Create new contact entry
        const newContact = document.createElement('div');
        newContact.classList.add('contact');
        newContact.innerHTML = `
            <h2>${contact.name}</h2>
            <p>Email: ${contact.email}</p>
            <p>Phone: ${contact.phone}</p>
            <span class="delete-icon" onclick="deleteContact(this)">×</span>
        `;

        return newContact;
    }

    window.deleteContact = function (deleteIcon) {
        // Find the parent contact element and remove it
        const contactElement = deleteIcon.closest('.contact');
        const contactList = document.querySelector('.contact-list');
        contactList.removeChild(contactElement);

        // Remove the contact from Local Storage
        const contactIndex = Array.from(contactList.children).indexOf(contactElement);
        savedContacts.splice(contactIndex, 1);
        localStorage.setItem('contacts', JSON.stringify(savedContacts));
    };
});
