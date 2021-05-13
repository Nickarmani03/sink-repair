import { getServices } from "./dataAccess.js"


export const Services = () => {
    const services = getServices()

    return `
        <h2>Services</h2>
        ${
            services.map(
                (serviceObject) => {
                    return `
                        <div>
                            Name: ${serviceObject.name}
                            Price: ${serviceObject.price}
                        </div>
                    `
                }
            ).join("")
        }
    `
}