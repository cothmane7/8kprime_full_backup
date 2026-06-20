import fs from 'fs';
import path from 'path';

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
}

export async function getBlogs(): Promise<BlogPost[]> {
    const filePath = path.join(process.cwd(), 'data', 'blogs.json');
    if (!fs.existsSync(filePath)) return [];
    const fileData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileData) as BlogPost[];
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | undefined> {
    const blogs = await getBlogs();
    return blogs.find((b) => b.slug === slug);
}
