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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254740841168";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254740841168";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_52_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NixcbiAgICAgICAgOTksXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNyxcbiAgICAgICAgODIsXG4gICAgICAgIDU4LFxuICAgICAgICA0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTkyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MixcbiAgICAgICAgODIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU2LFxuICAgICAgICA5NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDAsXG4gICAgICAgIDc4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDc1LFxuICAgICAgICA0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDc4LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NixcbiAgICAgICAgNzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDc2LFxuICAgICAgICAyNixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM0LFxuICAgICAgICA0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMSxcbiAgICAgICAgODUsXG4gICAgICAgIDc2LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAxMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MyxcbiAgICAgICAgOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDc1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiandFYnBQMnVrcHlqUERlanpoOXR0cTcyN2VtankxVmlud2pRZEZqQWlRTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOHg0Q3o5XzBUTnVtUGxpVm10QVNnZ1wiLFxuICBcInBob25lSWRcIjogXCI0NjI0NDI3MS1hMTAxLTQwMTMtODkzNS0xMDFjNTY1NDAxNjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcxLFxuICAgICAgMTY2LFxuICAgICAgMTMsXG4gICAgICAxNCxcbiAgICAgIDEwOSxcbiAgICAgIDEwLFxuICAgICAgNjQsXG4gICAgICAyNTUsXG4gICAgICAxNixcbiAgICAgIDE1NSxcbiAgICAgIDY0LFxuICAgICAgNTEsXG4gICAgICA5MyxcbiAgICAgIDE5MCxcbiAgICAgIDE1NCxcbiAgICAgIDEzNSxcbiAgICAgIDE3MCxcbiAgICAgIDc1LFxuICAgICAgMjMyLFxuICAgICAgMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICAxMDgsXG4gICAgICAyMixcbiAgICAgIDg5LFxuICAgICAgNjUsXG4gICAgICAyMzYsXG4gICAgICAxNzQsXG4gICAgICAyNDEsXG4gICAgICA1NixcbiAgICAgIDE4NSxcbiAgICAgIDQ1LFxuICAgICAgNjUsXG4gICAgICAxNjksXG4gICAgICAyMjQsXG4gICAgICA4MCxcbiAgICAgIDE5LFxuICAgICAgMjAzLFxuICAgICAgMjE2LFxuICAgICAgNzYsXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS0o3QUhQTkRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0MDg0MTE2ODoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzMDc5NTQ2OTE2ODg3MToyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09PRnZkQURFSTY3cXJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM2VoZUl6cFZKSFZXbEF4N2N1SXdQWGFnSmFnRC9hNWpldlMzRms1NzNrQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLVnM4bVhWUTVGK1JTa01RSDRuMndmWTVzdGZIdGJmV2hibS9CdU85MnRRakpQWlJNeCtMcHZzbmVSTStYdjZZMVdLa3g4YXFPbmRYd0dTZHhFYStEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIYlhKQ1c0TXo0bTZOd3kzYXBPNEp1M1dlWlNSaTBNTzFOZnR0UEFKTUFuNitYcnRMQzlUaTVrck9wcXZ0WjJ4aVFkc1V1YThIZUZOY01ReW9MMkJBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDA4NDExNjg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzYwMzM4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "𓅓𝙒𝞖𝞘𝙕𓅓" ,"𓅓𝙒𝞖𝞘𝙕𓅓"),
 
  author : process.env.PACK_AUTHER|| "𓅓𝙒𝞖𝞘𝙕𓅓",
  packname: process.env.PACK_NAME || "𓅓𝙒𝞖𝞘𝙕𓅓",
  botname : process.env.BOT_NAME  || "𓅓𝙒𝞖𝞘𝙕𓅓",
  ownername:process.env.OWNER_NAME|| "𓅓𝙒𝞖𝞘𝙕𓅓",


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
