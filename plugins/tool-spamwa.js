let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw '*⚠️ Please Enter the value of number that will be spammed!*\n* Use Properly:*\n*—◉ #spamwa number|text|value*\n*Example:*\n*—◉ #spamwa 94999999999|Hello!|25*'
if (!pesan) throw '*⚠️ Please message to put a message to spam!*\n*Use Properly:*\n*—◉ #spamwa number|text|value*\n*Example+*\n*—◉ #spamwa 94999999999|merespons :v|25*'
if (jumlah && isNaN(jumlah)) throw '*[ ⚠️ ] KUANTITAS HARUS ADALAH NOMOR!*\n*PENGGUNAAN YANG TEPAT:*\n*—◉ #spamwa number|text|value*\n*Examplr:*\n*—◉ #spamwa 94999999999|merespons :v|25*'

let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 50) throw '*[ ⚠️ ] TERLALU BANYAK PESAN! JUMLAH HARUS KURANG DARI 50 PESAN*️'
await m.reply(`*[❗] SPAM PESAN KE NOMOR ${nomor} ITU SUKSES DILAKUKAN*\n*JUMLAH TERKIRIM:*\n*—◉ ${fixedJumlah} waktu!*`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['tools']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = false
handler.private = true
handler.limit = true
export default handler
