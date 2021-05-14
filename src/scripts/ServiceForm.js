import {setCustomerName, setCustomerEmail, setCustomerPhoneNumber, setServiceDescription } from "./dataAccess.js"

const container = document.querySelector("#container")
// the main element with the id of container, it is the first element with the id of container

//this will need to capture user data from the users keypresses for all but the date. it will be captured on main.

container.addEventListener("keyup", (keyEvent) => { //listens to the whole document for any event to happen. what will happen when the key is released witth keyup. 
    if (keyEvent.target.id === "customerName") {//will be updated when the customer types into this field
        setCustomerName(keyEvent.target.value) //will set it in the key of name when its put in
    }
    else if (keyEvent.target.id === "customerEmail") {//will be updated when the customer types into this field
        setCustomerEmail(keyEvent.target.value) //will set it in the key of name when its put in
    }
    else if (keyEvent.target.id === "customerPhoneNumber") {//will be updated when the customer types into this field
        setCustomerPhoneNumber(keyEvent.target.value) //will set it in the key of name when its put in
    }
    else if (keyEvent.target.id === "serviceDescription") {//will be updated when the customer types into this field
        setServiceDescription(keyEvent.target.value) //will set it in the key of name when its put in
    }
}
)

//we will also be capturing when the value changes from the date picker

export const ServiceForm = () => { //the html data form the customer is filling out for the service order. 
    return `
    <h2>Service Event Form</h2> 
        
    <fieldset>
    <input id="customerName" placeholder="Your Name" type="text" />
    </fieldset>
    <fieldset>
    <input id="customerEmail" placeholder="Your email" type="text" />
    </fieldset>
    <fieldset>
    <input id="customerPhoneNumber" placeholder="Your phone number" type="text" />
    </fieldset>
    <fieldset>
    <input id="customerServiceDescription" placeholder="Service Description" type="text" />
    </fieldset>
    <fieldset>
    <label for="repairDate"> Event Date</label>
    <input id="repairDate" type="date" />
    </fieldset>
    `
} // the customer will be selecting a datte

