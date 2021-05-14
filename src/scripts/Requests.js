import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${requests.map(   // iterates the array as a parameter of the function. returns an array of strings in a different format
        (requestsObject) => { // invoke a function for each cake object
            // that converts each cake object into an HTML representation of that cake object
            return `
                <li> 
            ${requestsObject.id}" /> ${requestsObject.name}
            </li>`
        }// the name shopws that they are grouped together
        //the value is unique so we use id that the user selected. it is extracted
    )
            .join("")
        }
        </ul>
    `

    return html
}