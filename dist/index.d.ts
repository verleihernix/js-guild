import { Embed } from 'guilded.js';
export declare class GuildedClient {
    private client;
    constructor(token: string);
    run(): Promise<void>;
    sendMessage(channelId: string, content: string): Promise<void>;
}
export declare class EmbedMaker {
    private embed;
    constructor();
    title(title: string): this;
    description(description: string): this;
    thumbnail(url: string): this;
    fields(name: string, value: string, inline?: boolean): this;
    image(url: string): this;
    build(): Embed;
}
