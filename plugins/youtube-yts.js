import yts from 'yt-search'

var handler = async(m, { conn, usedPrefix, text, args, command }) => {
let name = await conn.getName(m.sender)

  if (!text) throw '*Please give me a text to search!*'
  let cari = await yts(`${text}`)
    let dapet = cari.all
    let listSections = []
	Object.values(dapet).map((v, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + v.title, [
          ['Video 🎥', usedPrefix + 'getvid ' + v.url, '\n⌚ *Duration:* ' + v.timestamp + '\n⏲️ *Uploaded:* ' + v.ago + '\n👁️ *Views:* ' + v.views + '\n📎 *Url:* ' + v.url],
          ['Audio 🎧', usedPrefix + 'getaud ' + v.url, '\n⌚ *Duration:* ' + v.timestamp + '\n⏲️ *Uploaded:* ' + v.ago + '\n👁️ *Views:* ' + v.views + '\n📎 *Url:* ' + v.url]
        ]])
	}) 
	return conn.sendList(m.chat, '*───「 Youtube Search 」───*', `Please select a video you requested below!\n*Requested video:* ${text}\n\nRetype *${usedPrefix + command}* to research videos from YouTube!`, author, `YouTube Search 🔎`, listSections, m)
}
handler.help = ['ytsearch <query>']
handler.tags = ['internet']
handler.command = /^yts(earch)?$/i


export default handler
