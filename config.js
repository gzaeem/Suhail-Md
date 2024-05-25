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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923181556428";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_19_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgODQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDkxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUyLFxuICAgICAgICAzOCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA3MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDYwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODksXG4gICAgICAgIDIyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDYzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDgwLFxuICAgICAgICA1NixcbiAgICAgICAgMjE4LFxuICAgICAgICA3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDM5LFxuICAgICAgICA2MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUwLFxuICAgICAgICA2LFxuICAgICAgICA2NyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcwLFxuICAgICAgICAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxLFxuICAgICAgICA5MixcbiAgICAgICAgNzksXG4gICAgICAgIDI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDk2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDczLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJwNDFjZVJBTnBvQXJVcTBYNlRHOFpVYVB2VG5XQTdYakRMQmlKVHRrQ2VJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE4MTU1NjQyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDAyM0IxOTdDRTAzNkEzQ0I0RUI2NUIzQkI5N0M4MjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NjA3MTY2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTgxNTU2NDI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0MzlCMUExQTFBOUI1REI5RkJFMTYwRkZEQkIxMzI1NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY2MDcxNjZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY2pEZFZzWGRSVk9ER3d0THpHU1ctd1wiLFxuICBcInBob25lSWRcIjogXCJlZmU3NDhiOS03OTk3LTQzMTktYjVmNS1kOTg4NTgxMzBkNTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg5LFxuICAgICAgMjMzLFxuICAgICAgMTgxLFxuICAgICAgODMsXG4gICAgICAyMDYsXG4gICAgICAxOTEsXG4gICAgICAyMDgsXG4gICAgICA4OSxcbiAgICAgIDE3MCxcbiAgICAgIDI5LFxuICAgICAgMjUsXG4gICAgICAxNjEsXG4gICAgICAyMTMsXG4gICAgICA1NixcbiAgICAgIDY2LFxuICAgICAgMTg3LFxuICAgICAgMjUzLFxuICAgICAgNTQsXG4gICAgICAxMTcsXG4gICAgICA1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NCxcbiAgICAgIDIyOCxcbiAgICAgIDYsXG4gICAgICAyMzcsXG4gICAgICAxNTIsXG4gICAgICAxNTAsXG4gICAgICA2MSxcbiAgICAgIDY1LFxuICAgICAgOSxcbiAgICAgIDEzNSxcbiAgICAgIDIsXG4gICAgICAxOTgsXG4gICAgICAxMzgsXG4gICAgICAyMDQsXG4gICAgICAyMjYsXG4gICAgICAxNjQsXG4gICAgICAyMTEsXG4gICAgICAyNTAsXG4gICAgICAyMTAsXG4gICAgICAxNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1gxR1ZEMkpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE4MTU1NjQyODoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiWmFlZW0gT25saW5lIFNob3BwaW5nXCIsXG4gICAgXCJsaWRcIjogXCI2NjM3ODkyMDg5MDU4MzoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ091Vmc5UUZFTFd4eGJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwialdyMlJLMGFuekorNWdOcmV1WVpDNitEQkhudDZxLzNRbWROWFQvNGdRaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjTUc2N0RLZU4vSE85STlFQzlEZDRQSjVJYUpQVzdBcDc0WTJaSHNHS2FSSExMSk9MK2p5QUZmYXMzNmlTbG9pS0dSRGppZkNRN0tOcm5TOHNvZjlDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4a2dtTm5GYWZwREZULzV1YzdHaUsvQ0o3SURZb09rMU00cjdYREF3QitCb21sNzVEUHFWeFVXZHN1M1FjQzBJWnZ6V1k4VjErb2xHOC8rRHQyQVBCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxODE1NTY0Mjg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjYwNzE2MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9Ic1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT0hzLmpzb24iOiAie1wia2V5RGF0YVwiOlwicWR1aEtoWWptZm9scWNRYURqeHM2RjBRN3NDQXliMGdYVWpVMmdnaEY0VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTE4Mzg5OTk1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY2MDcxNjM4NzRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
