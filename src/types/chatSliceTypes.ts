export interface chatSliceTypes {
    recipientPhoneNumber: string;
    messageValue: string;
    receivedMessages: Imessage[];
    isMessageSended: boolean;
    isMessageDataLoading: boolean;
}

export interface Imessage {
    id: string;
    senderName: string;
    message: string;
    time: string;
    isOwnMessage?: boolean;
}
