/**
 * Makecode block for the Think Create Learn Remote.
 * Decodes the radio message into x, y, and button
 */
enum enumParameter {
    x,
    y,
    button
}

//% color="#ff7f50" icon="\uf09e" block="Remote"
namespace remote {
    
    let y = 0
    let x = 0
    let button = ""
    let lastMessage = ""

    class remoteData {
        x: number;
        y: number;
        button: string;
    }

    function decodeMessage (message: string) {
        let comma1 = -1
        let comma2 = -1
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

    //% blockId=getX
    //% block="get x from message %data"
    export function getX(message: string) {
        if (message != lastMessage)
            decodeMessage(message)
        return x;
    }

    //% blockId=getY
    //% block="get y from message %data"
    export function getY(message: string) {
        if (message != lastMessage)
            decodeMessage(message)
        return y;
    }

    //% blockId=getButton
    //% block="get button from message %data"
    export function getButton(message: string) {
        if (message != lastMessage)
            decodeMessage(message)
        return button;
    }
}
