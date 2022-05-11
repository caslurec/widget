export interface SendMailData {
    subject: string;
    body: string;
    emailReplyTo?: string;
    emailSendTo?: string;
}
export interface MailAdapter {
    sendMail: (data: SendMailData) => Promise<void>;
}
