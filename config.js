//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV05CUlpIUndLN1JxaUh5RXB0UktwVWNGenEvSGNMcXRWcDlLdHQzdHRWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnVkcmRZRWt1bmZmcWMrY0Vhb09RY1lMd1JaRUZ1Y1dwRW9ldmI0QU5EST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNREw0NVBRcUE5ZnNZVDBQZDcwSlQxbExZS3F0UWRMNUVvQmQ2NWV0RWxjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5amNxN0NvWm9uMm1PbUs0STJucXhqU3REbEhiZUNRT1JUcHlZcEZUQlFzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBGOU91UnNVRVl6d2NURkNmV2tidXhDNXN2RVpxaDJxMUJ1QzNkMVpuVU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQ4V1IzVk5PZ3BqUkoxVjFIbUpvNHpZaTdvRU12QnNSek9Xem9YMWhmd009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFBDZ1lqWVlhMFprTmdkVjdGZ0xoYnpwcVN2V3AvbmZpMXJWeGxOUWdWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZHJhOFBDTlBtQzMxYURQK0tDdjU1a1VETFFTTi8rZ2lpdmh5YlJ3RFNFYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBPajFLaXlDMzh2bW4vczRtUHZLcFNmVXNjV0VzMGEyWWFCTGxHekl5Y05IQWdmVE83Wi9YN1VFSHY4bVFWeDh5VnB2eTB2Y0lQNU1RVStwRlh2aGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5IjoiTytXZ3ViZFNjeUpERFg2ZUpJTXRTdE1PL1FlTDZZTUQ0cUhBc0pPemRoMD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxNjI0NDEyMjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkU4MzEyRUZBRUJGRjlFMkQ2N0Q0NjlDMTExMkRCQTgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDQzMDYxOH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTYyNDQxMjI4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjkzQkE1Mjc4MEU1MUY1ODA1MDIwMTc3ODdFNTNGNTlFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA0MzA2MTh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE2MjQ0MTIyOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1RDc2N0UxRjExRDRGMUIxOTlCQ0NENUU2OUE3REUyNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwNDMwNjIxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxNjI0NDEyMjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjk1MTFCODMzNEI4Qjc5MTQ3MkZGMUM0RjdEMjVDREQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDQzMDYyMX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiV09QYnUydnNTUmFwU2ZmZkRHYTZMQSIsInBob25lSWQiOiIwZjM0MjA3ZS1hYmM4LTRlMzQtOWFkMi0zZDcwODFkYTZmNzMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTlQ0Z3pJWjRLTTRPZGE5NkJCRE5jTzBMNlk0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY4T1JOWkRSamZVMVJMTUZaVmlQK3NIbjlpcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIzNEU0SllBRyIsIm1lIjp7ImlkIjoiOTIzMTYyNDQxMjI4OjEzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlVtYXIgQXpoYWly8J+ksvCfpLIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xIbXByUURFSXJncnJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkYwcHZ6R2paYkgvRlZxU3FFMmUwSTBjZHQycmRLR1VKM3lQRlh0RSs1Ums9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJPZTFFYnJnNnBiQ2tIQlRSbVhXYm5KV09zclAyS2ZSb2p3eW10SDhObHJ5V1VxUCsvUU1RdGRRay9FOTU1Rkx6cVJaV0xYRDY1WUFQaG1FVWhHRUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJNZVlveEsrRGF6bEZiK3JVRWdFQWJTK0ppd2hQV3FEeEk2TUVMc1NaVkZUZzdEN0EybjNNdkFzMCtFRGNxejloUWFyY2drWkhSbndFVGo5b28yUzdpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE2MjQ0MTIyODoxM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSZEtiOHhvMld4L3hWYWtxaE5udENOSEhiZHEzU2hsQ2Q4anhWN1JQdVVaIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNDMwNjE3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUIzNCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
