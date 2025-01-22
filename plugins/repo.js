const { cmd, commands } = require('../command');
const config = require('../config');

// repo info
cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Info about the bot repository",
    category: "main",
    react: "👨‍💻",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `*Hᴇʟʟᴏ Tʜᴇʀᴇ SʜᴀʙᴀSᴏʙxMᴅ Usᴇʀ! 👋🏻* 

> Sɪᴍᴘʟᴇ , Sᴛʀᴀɪɢʜᴛ Fᴏʀᴡᴏʀᴅ Bᴜᴛ Lᴏᴀᴅᴇᴀᴅ Wɪᴛʜ Fᴇᴀᴛᴜʀᴇs 🎊, Mᴇᴇᴛ Sʜᴀʙᴀɴ-Sᴏʙx-Mᴅ Wʜᴀᴛsᴀᴘᴘ Bᴏᴛ.

*TʜᴀɴᴋS FᴏR UsɪɴG Sʜᴀʙᴀɴ-Sᴏʙx-Mᴅ* 

> Dᴏɴᴛ Fᴏʀɢᴇᴛ Tᴏ Fᴏʀᴋ Tʜᴇ Rᴇᴘᴏ ⤵️

https://github.com/MRSHABAN40/SHABAN-SOBX-MD`;

        // Send image with caption
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/0D673y0/shaban-sobx-md.jpg` }, 
            caption: dec, 
            contextInfo: { 
                mentionedJid: [m.sender], 
                forwardingScore: 999, 
                isForwarded: true, 
                forwardedNewsletterMessageInfo: { 
                    newsletterJid: '120363358310754973@newsletter', 
                    newsletterName: 'SʜᴀʙᴀɴSᴏʙxMᴅ', 
                    serverMessageId: 143 
                } 
            } 
        }, { quoted: mek });

        // Send audio with contextInfo
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/repo.m4a' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender], 
                forwardingScore: 999, 
                isForwarded: true, 
                forwardedNewsletterMessageInfo: { 
                    newsletterJid: '120363358310754973@newsletter', 
                    newsletterName: 'SʜᴀʙᴀɴSᴏʙxMᴅ', 
                    serverMessageId: 143 
                } 
            }
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});