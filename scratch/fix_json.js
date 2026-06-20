
const fs = require('fs');
let content = fs.readFileSync('data/blogs.json', 'utf8');

// The error is between two huge strings.
// String 1 ends with: p>Pick your device. Set up 8KPRIME TV. Enjoy limitless streaming.</p>"
// String 2 starts with: "content": "<h2>The Complete IPTV Device Guide:

const s1_end = 'p>Pick your device. Set up 8KPRIME TV. Enjoy limitless streaming.</p>"';
const s2_start = '"content": "<h2>The Complete IPTV Device Guide:';

const pos1 = content.indexOf(s1_end);
const pos2 = content.indexOf(s2_start, pos1);

if (pos1 !== -1 && pos2 !== -1) {
    console.log("Found both segments. Fixing...");
    // We want to remove everything from just before pos2 back to pos1 + s1_end.length
    // But wait, we actually want to REMOVE one of the content fields entirely.
    // Let's remove the first one.
    const startOfFirstContent = content.lastIndexOf('"content":', pos1);
    if (startOfFirstContent !== -1) {
        const newContent = content.substring(0, startOfFirstContent) + content.substring(pos2);
        fs.writeFileSync('data/blogs.json', newContent);
        console.log("Success! Duplicate content removed.");
    }
} else {
    console.log("Segments not found:", pos1, pos2);
}
