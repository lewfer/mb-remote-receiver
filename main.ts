function decodeMessage (message: string) {
    comma1 = -1
    comma2 = -1
    for (let index = 0; index <= message.length; index++) {
        if (message.charAt(index) == ",") {
            if (comma1 == -1) {
                comma1 = index
            } else {
                comma2 = index
            }
        }
    }
    button = message.substr(0, comma1)
    x = parseFloat(message.substr(comma1 + 1, comma2 - comma1 - 1))
    y = parseFloat(message.substr(comma2 + 1, 999))
}
radio.onReceivedString(function (receivedString) {
    decodeMessage(receivedString)
    if (button == "A") {
    	
    }
    if (button == "B") {
    	
    }
})
let y = 0
let x = 0
let button = ""
let comma2 = 0
let comma1 = 0
radio.setGroup(11)
let clawOpen = 0
