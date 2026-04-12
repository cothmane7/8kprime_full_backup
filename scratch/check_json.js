
const fs = require('fs');
const content = fs.readFileSync('data/blogs.json', 'utf8');
try {
    JSON.parse(content);
    console.log("JSON is valid");
} catch (e) {
    console.error("JSON Error:", e.message);
    const pos = e.message.match(/position (\d+)/);
    if (pos) {
        const index = parseInt(pos[1]);
        const start = Math.max(0, index - 50);
        const end = Math.min(content.length, index + 50);
        console.log("Context around error:");
        console.log(content.substring(start, end));
        console.log("Error at index:", index);
        console.log("Character at index:", content[index]);
    }
}
