import { saveOrderToAPI } from "./dataAccess.js"

const container = document.querySelector("#container")
// the main element with the id of container, it is the first element with the id of container

//this will need to capture user data from the users keypresses for all but the date. it will be captured on main.

container.addEventListener("click",
    (clickEvent) => { //a click happened on the page

        if (clickEvent.target.id === "submitOrder") { //a click happened on the button
            saveOrderToAPI()
        }
    }
)
export const OrderButton = () => {
    return `
        <button id="submitOrder">Submit The Order Request</button>
    `
}