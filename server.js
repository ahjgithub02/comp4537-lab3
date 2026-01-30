import { STRINGS } from "./lang/en/en.js";
import { getDateAndTime } from "./modules/utils.js";
import http from 'http';
import url from 'url';
const PORT = 8888;
http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    if (q.pathname === "/COMP4537/labs/3/getDate/") {
        const name = q.query.name;
        const currentDate = getDateAndTime();
        const msg = `${STRINGS.GREETING}${name}${STRINGS.SMALL_TALK.replace("()", currentDate)}`;
    
        res.writeHead(200, {
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*"
        });
        res.end(`<div style="color:blue">${msg}</div>`);
    } else {
        res.writeHead(404);
        res.end("Not Found");
    }
}).listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});