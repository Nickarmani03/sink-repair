import { SinkRepair } from "./SinkRepair.js"
import { fetchServices } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchServices() //go fetch the data on the internet. promise to tell when its done
        .then(             // tell it to parse it as json if u parse it
            () => {
                mainContainer.innerHTML = SinkRepair() //converts it to html only when its retruned
            }
        ) //2nd then do what you want it to do
}


render()

/*fetch goes out and gets data from the internet. everything is a sting in the json database even the strings
GET goes and gets the data for the API server. you want the data so please give it to me. the API serve will give it to you
POST- creats the data. the API can tell it to create the data. you must specify the method
PUT- specifies to change/modify the data. when you request to change something., it will replace the data
Delete- asks the API to delete the data
CRUD - create read update and delete
*/


