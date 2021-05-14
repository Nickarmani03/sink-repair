const applicationState = {  //everytime aspplication state is ran its overwritten with a new copy continuously
    requests: [], //this is a key
    orderBuilder: {  //tracks the state of what the customer has chose. grabs the state of the input fields
        name: "",
        email: "",
        phone: "",
        description: "",
        date: "",
        chosenServices: []//this tracks what the user has chosen until it moves to a permanent state by primary keys
    }
}

export const saveOrderToAPI = () => {
    console.log(applicationState.orderBuilder)

}
export const setCustomerName = (name) => {
    applicationState.orderBuilder.name = name   //will be passing into this funtion as an arguement
}

export const setCustomerEmail = (email) => {
    applicationState.orderBuilder.email = email   //will be passing into this funtion as an arguement
}

export const setCustomerPhoneNumber = (phone) => {
    applicationState.orderBuilder.phone = phone   //will be passing into this funtion as an arguement
}

export const setServiceDescription = (description) => {
    applicationState.orderBuilder.description = description   //will be passing into this funtion as an arguement
}

export const fetchServices = () => {
    return fetch("http://localhost:8088/services")//gets the data from the internet(the API). gets stings on the internet. only able to return strings. fetch keeps it in sync with the API state
        .then(
            response => response.json() //executs the json server to convert it to javascript
        )
        .then(
            (data) => { //the funtion that shows that you want to do with the data. its passed as an arguement. the data is the paramater sent back
                applicationState.services = data
            } //application state store it temporarily. it stores it as an object that contains arrays above at the top of this page doesnt modify the source.
        )
}

export const getServices = () => {
    return [...applicationState.services] //returns a copy of applicationState products
}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}
export const getRequests = () => {
    return [...applicationState.requests]
}





//responsible for accessing the data on this module.