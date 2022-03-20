//MCSTATUS BY C0R0N4/YHUYT
const ip = "La ip de tu servidor"
const port = "El puerto de tu servidor" /*el default es 19132*/
const api = (`https://api.mcsrvstat.us/bedrock/2/${ip}:${port}`)
module.exports = {
      name: "status",
      code: `
      $title[
🟢 MCPE STATUS

⚔️ Ip: $jsonRequest[${api};hostname]
🛡️ Port: $jsonRequest[${api};port]
🧿 Version: $jsonRequest[${api};version]
👥 Players: $jsonRequest[${api};players.online] / $jsonRequest[${api};players.max]
⛏️ Motd: $jsonRequest[${api};motd.clean]]
$color[GREEN]



      `
}
