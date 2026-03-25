import * as cheerio from 'cheerio';
import fs from 'fs';

const slugs = [
    "best-devices-iptv-2025-buyers-guide",
    "firestick-vs-android-tv-iptv-2025",
    "iptv-keeps-freezing-fix",
    "do-you-need-vpn-for-iptv-2025",
    "how-to-fix-iptv-buffering-2026",
    "is-iptv-legal-usa",
    "iptv-vs-cable-comparison",
    "firestick-iptv-setup-2025",
    "best-iptv-sports-streaming-2025"
];

const results = [];

async function scrape() {
    for (const slug of slugs) {
        console.log("Fetching " + slug);
        try {
            const res = await fetch(`https://galaxystreamiptv.com/blog/post.php?slug=${slug}`);
            const html = await res.text();
            const $ = cheerio.load(html);
            
            const title = $('h1.article-title').text().trim() || $('h1').first().text().trim() || $('title').text().replace('- GalaxyStream IPTV', '').trim();
            const date = $('time').text().trim() || $('.article-meta').text().match(/[A-Z][a-z]+ \d{1,2}, \d{4}/)?.[0] || "March 23, 2026";
            
            let excerpt = $('meta[name="description"]').attr('content') || title;

            // Target ONLY the strict article content, avoiding breadcrumbs, headers, and footer CTAs
            let contentNode = $('.article-content');
            if (!contentNode.length) contentNode = $('article');
            if (!contentNode.length) contentNode = $('.prose');

            let contentHtml = '';
            
            if (contentNode.length) {
                // Remove unwanted elements
                contentNode.find('script, iframe, .sidebar, .share-buttons, nav').remove();
                
                // Keep only the inner HTML of the content wrapper to avoid bringing in layout classes
                contentHtml = contentNode.html();
            } else {
                console.warn(`WARNING: Could not find .article-content for ${slug}`);
                contentHtml = "<p>Content could not be parsed correctly.</p>";
            }

            // Convert some basic image srcs to be absolute if they exist
            if (contentHtml) {
                contentHtml = contentHtml.replace(/src="([^"]+)"/g, (match, p1) => {
                    if (p1.startsWith('http')) return match;
                    if (p1.startsWith('/')) return `src="https://galaxystreamiptv.com${p1}"`;
                    return `src="https://galaxystreamiptv.com/blog/${p1}"`;
                });
                
                // Clean up excessive newlines and whitespace that might be causing weird spacing
                contentHtml = contentHtml.replace(/\n\s*\n/g, '\n').trim();
            }

            results.push({
                slug,
                title,
                date,
                excerpt,
                content: contentHtml
            });
        } catch (err) {
            console.error(`Failed to fetch ${slug}:`, err);
        }
    }

    if (!fs.existsSync('data')) fs.mkdirSync('data');
    fs.writeFileSync('data/blogs.json', JSON.stringify(results, null, 2));
    console.log("Scraping complete! Saved " + results.length + " blogs to data/blogs.json");
}

scrape();
