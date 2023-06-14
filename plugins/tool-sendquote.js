async function handler(m) {
    if (!m.quoted) throw '*Reply to a message!*'
    let q = await m.getQuotedObj()
    if (!q.quoted) throw '*This message you reply to does not available!*'
    await q.quoted.copyNForward(m.chat, true)
}
handler.command = /^q$/i

export default handler
