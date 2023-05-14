export interface chatSliceTypes {
    recipientPhoneNumber: string;
    messageValue: string;
    requestError: null | string;
}

export interface Imessage {
    chatId: string;
    message: string;
}
