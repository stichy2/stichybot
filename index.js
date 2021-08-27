const { Modmail, Intents } = require('modmail.js') 
const config = require('./config.json')
(async () => {
  try{
const client = await Modmail({ 
       token: process.env.token, 
       inbox: process.env.channel_id, 
       prefix: '++', 
       clientIntents: config.clientIntents,
       message: '@everyone',   
      resolve: 'client'
  });
client.once('ready', () => {
  client.user.setActivity('DM For Modmail');
})  
  }catch(e){
    console.log(e)
  }
})() 
