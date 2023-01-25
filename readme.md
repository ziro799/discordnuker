# Discord Nuker
> A simple tool to destroy servers with a bot token

<sub>This is a beta, please let me know if you have any issues [here](https://github.com/RappyTV/discordnuker/issues)!</sub>

## Features
- [x] `/banall` - [Ban all bannable members](https://github.com/RappyTV/discordnuker/blob/master/src/commands/banall.js)
- [x] `/kickall` - [Kick all kickable members](https://github.com/RappyTV/discordnuker/blob/master/src/commands/kickall.js)
- [x] `/rmchannels` - [Delete all channels](https://github.com/RappyTV/discordnuker/blob/master/src/commands/rmchannels.js)
- [x] `/rmroles` - [Delete all roles](https://github.com/RappyTV/discordnuker/blob/master/src/commands/rmroles.js)
- [x] `/rmemojis` - [Delete all emojis](https://github.com/RappyTV/discordnuker/blob/master/src/commands/rmemojis.js)
- [x] `/rminvites` - [Delete all invites](https://github.com/RappyTV/discordnuker/blob/master/src/commands/rminvites.js)
- [x] `/rmwebhooks` - [Delete all webhooks](https://github.com/RappyTV/discordnuker/blob/master/src/commands/rmwebhooks.js)
- [x] `/renamechannels` - [Rename all channels](https://github.com/RappyTV/discordnuker/blob/master/src/commands/renamechannels.js)
- [x] `/renameroles` - [Rename all roles](https://github.com/RappyTV/discordnuker/blob/master/src/commands/renameroles.js)
- [x] `/spam` - [Spam text in all channels](https://github.com/RappyTV/discordnuker/blob/master/src/commands/spam.js)
- [x] `/channelspammer` - [Create a lot of channels (2-200)](https://github.com/RappyTV/discordnuker/blob/master/src/commands/channelspammer.js)
- [x] `/editprofile` - [Change server name & icon & banner](https://github.com/RappyTV/discordnuker/blob/master/src/commands/editprofile.js)

---

## 1️⃣ Installation

### Requirements
- [node.js](https://nodejs.org)
- a valid bot token with the `GUILD_MEMBERS` intent
<br>

You can clone the repository with
```
$ git clone https://github.com/RappyTV/discordnuker.git
```
Or download it [here](https://github.com/RappyTV/discordnuker/archive/refs/heads/master.zip) if you don't have [git](https://git-scm.com/downloads) installed.<br>
Then just install the needed dependencies with `npm i`.

## 2️⃣ Configuration
If you have downloaded and extracted all the files you should look for a file named [config.json](https://github.com/RappyTV/discordnuker/blob/master/config.json).<br>
It should look like this:
```json
{
    "token": "",
    "executor": ""
}
```
`token`: Enter the bot's token<br>
`executor`: If the bot should only accept commands by you then insert your userid. Otherwise just leave it blank

## 3️⃣ Start the script
Just run `node .` or `nodemon` if you have [nodemon](https://www.npmjs.com/package/nodemon) installed.

## 4️⃣ Have fun!
🔗 [Features](https://github.com/RappyTV/discordnuker/blob/master/readme.md#features)<br>
<strong>This is for educational purposes only!</strong>

---

### Social Networks

[<img align="left" alt="RappyTV | Website" width="22px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][website]
[<img align="left" alt="RappyTV | YouTube" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/youtube.svg" />][youtube]
[<img align="left" alt="RappyTV | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />][instagram]
[<img align="left" alt="RappyTV | Discord" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/discord.svg" />][server]
[<img align="left" alt="RappyTV | Bot" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/discord.svg" />][bot]
[<img align="left" alt="RappyTV | TikTok" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/tiktok.svg" />][tiktok]

[website]: https://www.rappytv.com/
[youtube]: https://youtube.com/@RappyyTV
[instagram]: https://instagram.com/rappyytv
[server]: https://rappytv.com/server
[bot]: https://rappytv.com/bot
[tiktok]: https://tiktok.com/@rappytv
