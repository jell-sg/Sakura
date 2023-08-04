const chalk = require('chalk')
const fs = require('fs')

//SELEBIHNYA JIKA MAU SETTING ADA DI FOLDER JS 

//api ibeng
global.apiibeng = 'APIKEY' // letakan apikey kalian daftar dlu ya
// •> https://api.ibeng.tech
//lalu klian daftar jika sudah daftar di dashboard ada tulisan apikey kalian salin aja Paste di 'APIKEY'





global.owner = ['6285791762177'] 
global.ownernomer = "6285791762177"
global.socialmedia = "IG: vlntncptr"
global.yutub = "YT: lenttobs"
global.lokasi = "Indonesia, Jawatimur, Lumajang"
global.sakuraurl = 'https://lenttobs.xyz'
global.packgename = "by" 
global.author = "lenttobs" 
global.title = 'SakuraMD'
global.body = 'Subscribe lenttobs'
global.welcome = false //false mati true nyala
global.left = false //false mati true nyala
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})