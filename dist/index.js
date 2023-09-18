"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedMaker = exports.GuildedClient = void 0;
const guilded_js_1 = require("guilded.js");
class GuildedClient {
    constructor(token) {
        this.client = new guilded_js_1.Client({ token });
    }
    async run() {
        try {
            await this.client.login();
            console.log(this.client.user?.name + ' is ready');
        }
        catch (error) {
            console.error('Login failed:', error);
        }
    }
    async sendMessage(channelId, content) {
        try {
            const channel = await this.client.channels.fetch(channelId);
            if (channel) {
                await channel.send(content);
                console.log('Message sent successfully');
            }
            else {
                console.error('Cannel not found');
            }
        }
        catch (error) {
            console.error('Failed to send message:', error);
        }
    }
}
exports.GuildedClient = GuildedClient;
class EmbedMaker {
    constructor() {
        this.embed = new guilded_js_1.Embed;
    }
    title(title) {
        this.embed.title = title;
        return this;
    }
    description(description) {
        this.embed.description = description;
        return this;
    }
    thumbnail(url) {
        this.embed.thumbnail = { url };
        return this;
    }
    fields(name, value, inline = false) {
        if (!this.embed.fields) {
            this.embed.fields = [];
        }
        this.embed.fields.push({ name, value, inline });
        return this;
    }
    image(url) {
        this.embed.image = { url };
        return this;
    }
    build() {
        return this.embed;
    }
}
exports.EmbedMaker = EmbedMaker;
