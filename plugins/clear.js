let {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
let WhatsAlexa = require('../events');
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('unvoice');

WhatsAlexa.addCommand({pattern: 'clear', fromMe: true, desc: Lang.CLR_DESC}, (async (message, match) => {

    await message.client.sendMessage(message.jid, Lang.CLR_PROC, MessageType.text, {contextInfo: { forwardingScore: 1000, isForwarded: true }})

    await message.client.modifyChat(message.jid, ChatModification.delete);

    await message.client.sendMessage(message.jid, Lang.CLR_DONE, MessageType.text, {contextInfo: { forwardingScore: 1000, isForwarded: true }})

}));
