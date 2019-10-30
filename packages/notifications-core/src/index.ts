export interface INotification<Payload> {
    id?: string;
    read: string[];
    message: string;
    payload: Payload;
    deleted?: boolean;
    channels: string[];
    processed: string[];
    target_type: string;
    target_ids: string[];
}
