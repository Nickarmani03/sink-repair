import { SinkRepair } from "./SinkRepair.js"
  
import { fetchServices } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchServices() //go fetch the data on the internet. promise to tell when its done
        .then(           
            () => {
                mainContainer.innerHTML = SinkRepair()
            }
        ) //2nd then do what you want it to do
}


render()

