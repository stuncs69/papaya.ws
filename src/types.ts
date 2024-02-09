type Message = {
    confirm: boolean,
    message: string,
    room: string
}

function stringToMessage(message: string): Message {
    return JSON.parse(message) as Message
}