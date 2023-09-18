import { Client, Embed, ClientUser } from 'guilded.js';

export class GuildedClient {
    private client: Client;


    constructor(token: string) {
        this.client = new Client({ token });
        
        
    }

    async run() {
        try {
            await this.client.login();
            console.log(this.client.user?.name + ' is ready');
        } catch (error) {
            console.error('Login failed:', error);
        }
    }
    

    async sendMessage(channelId: string, content: string) {
        try {
            const channel = await this.client.channels.fetch(channelId);
            if (channel) {
                await channel.send(content);
                console.log('Message sent successfully');
            } else {
                console.error('Cannel not found');
            }
        } catch (error) {
            console.error('Failed to send message:', error);
        }
    }
}

export class EmbedMaker {
    private embed: Embed;

    constructor() {
        this.embed = new Embed;
    }

    title(title: string) {
        this.embed.title = title;
        return this;
    }

    description(description: string) {
        this.embed.description = description;
        return this;
    }

    thumbnail(url: string) {
        this.embed.thumbnail = { url };
        return this;
    }

    fields(name: string, value: string, inline = false) {
        if (!this.embed.fields) {
            this.embed.fields = [];
        }
        this.embed.fields.push({ name, value, inline });
        return this;
    }

    image(url: string) {
        this.embed.image = { url };
        return this;
    }

    build() {
        return this.embed;
    }
}
