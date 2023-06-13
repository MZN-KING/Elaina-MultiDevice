var handler  = async (m, { conn, usedPrefix: _p }) => {
let info = ` 📚 _وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ_\n_wa\'alaikumussalam wr.wb._\n
*"THE PERSON WHO SAYS A SALAAM LIKE THIS THENHE GET 30 REWARDS, THEN, THE PERSON WHO IS INFRONT OF OR LISTENED TO HIM REPLIES WITH THE SAMESENTENCE WHICH IS WAALAIKUMUSSALAMWARAHMATULLAHI WABARAKATUH"* `
await conn.reply(m.chat, info, m)
return conn.sendMessage(m.chat, {
          react: {
            text: '🙏',
            key: m.key,
          }})
}
handler.customPrefix = /^(assalam(ualaikum)?|(salamualaiku|(sa(lamu|m)liku|sala))m)$/i
handler.command = new RegExp

export default handler
