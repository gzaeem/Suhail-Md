const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "966561762398";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_17_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgODMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDI5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2MixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNixcbiAgICAgICAgNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDkxLFxuICAgICAgICA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExLFxuICAgICAgICA3NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDExMixcbiAgICAgICAgMTcyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NyxcbiAgICAgICAgODMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDg0LFxuICAgICAgICAxOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDczLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyLFxuICAgICAgICA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMixcbiAgICAgICAgNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgODIsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODAsXG4gICAgICAgIDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgODYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODEsXG4gICAgICAgIDk5LFxuICAgICAgICA1MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDg1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiakhHRFNMSFpBTUh3b3ZFd0toVDVYZ3B5UFM1aGdMU0ttWlZleE9KSWtFaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NjY1NjE3NjIzOThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE5QTNGRTMyRDE1MTNDMzEwNjJEMjRCREI3MEZDRTZEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjYyNTAyM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk2NjU2MTc2MjM5OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUZFOTE0MEZFOTI3Q0I1RUJBMTIzRDI4RkE3Q0QzQTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NjI1MDI0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRYQWc0dGhwVGtxTzJudEhKUURPOHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmU0MGI5NmEtMDc5ZC00NDEyLWE5MWMtMzgwYWMwMjhjZjM5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUwLFxuICAgICAgMjQyLFxuICAgICAgMjI4LFxuICAgICAgMTgsXG4gICAgICAxOTEsXG4gICAgICA4NCxcbiAgICAgIDE2MCxcbiAgICAgIDQ4LFxuICAgICAgMjA2LFxuICAgICAgMzcsXG4gICAgICA3MSxcbiAgICAgIDE3NCxcbiAgICAgIDE4NSxcbiAgICAgIDE5NSxcbiAgICAgIDE2NyxcbiAgICAgIDE3NyxcbiAgICAgIDEzOCxcbiAgICAgIDE3NyxcbiAgICAgIDQzLFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgMTg5LFxuICAgICAgMjI2LFxuICAgICAgMjUwLFxuICAgICAgNjAsXG4gICAgICA4LFxuICAgICAgMTYyLFxuICAgICAgMjMwLFxuICAgICAgMTcwLFxuICAgICAgMTY3LFxuICAgICAgMjIwLFxuICAgICAgMTkyLFxuICAgICAgMjksXG4gICAgICAxNzUsXG4gICAgICAyMjgsXG4gICAgICAxMixcbiAgICAgIDIyMixcbiAgICAgIDE5MyxcbiAgICAgIDE0MixcbiAgICAgIDEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlA3QVBHTDJTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NjY1NjE3NjIzOTg6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NzQ4OTcwMDA5ODEzMDoyMUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJBbm9ueW1vdXNcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPNjE4UDhIRVBpOHhySUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitOdElZSHNuaHQ3SzF6VEYrc21QTzMzNHVnSnhiRURleVZMdElrQnMxSGc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUUFzamdXdXVVMDNxSlJ0RXlrZ2UwdzBpektaQjFtT29SVXhmd0FmdWlrZnUwNmdSMzNHNWhiU1dBUk5jYkM5THdvaGhQVG96U2tZYzdKOUVhSlJiQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVFpEaGNuZGRCbTVoZkp0Ym1qZEV5UG13eGREcmx1VEwwVWZleG1HRzFPMEJWK0dOeHNIRmhlQjhYNTE0Y2pRTWFHSjlza3Eyb1hhL3dwQi84R3h4anc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTY2NTYxNzYyMzk4OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjYyNTAyMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtkZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2RmLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTW1VcTE3cFcxUHcvcWpWT2FQbnFVZElqcjJGVkxiR3o3anM5Q2pFUVVKVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTQ3MjI4Mzk3LFwiY3VycmVudEluZGV4XCI6MTQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwxNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
