import { ServiceForm } from "./ServiceForm.js"
import { Services } from "./Services.js"
import { OrderButton } from "./OrderButton.js"
import { Requests } from "./Requests.js"



export const SinkRepair = () => {
    return `
    <h1>Maude and Merle's Sink Repair</h1>
    <article>
    <section class="serviceForm">
    ${ServiceForm()}
    </section>

    <section class="serviceForm">
    ${Services()}
    </section>

    <section class="serviceRequests">
        <h2>Service Requests</h2>
    </section>
    ${Requests()}
    </article>

       <article>
     ${OrderButton()}
        </article>
    `
}

