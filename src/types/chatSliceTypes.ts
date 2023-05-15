export interface chatSliceTypes {
    recipientPhoneNumber: string;
    messageValue: string;
    requestError: null | string;
    receivedMessages: Imessage[];
    isMessageSended: boolean;
}

export interface Imessage {
    id: string;
    senderName: string;
    message: string;
    time: string;
    isOwnMessage?: boolean;
}
