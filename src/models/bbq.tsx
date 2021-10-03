import Guest from "models/guest"

interface BBQ {
    name: string,
    description: string,
    date: string,
    suggestedValue: number,
    guests: Array<Guest> | []
}

export default BBQ