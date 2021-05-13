const applicationState = {
    requests: []
}

export const fetchservices = () => {
    return fetch("http://localhost:6000/services")
        .then(
            response => response.json()
        )
        .then(
            (data) => {
                applicationState.services = data
            }
        )
}

export const getServices = () => {
    return [...applicationState.services]
}