//current step: adjust this code for your project

import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { marked } from 'marked';

const markdownFilePath = join(process.cwd(), 'data/post1.md');
const outputFilePath = join(process.cwd(), 'blog/post1.html');

async function generatePost() {
  try {
    const data = await readFile(markdownFilePath, 'utf-8');
    const htmlContent = marked.parse(data);

    const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Post 1</title>
  <link rel="stylesheet" href="../css/blog.css">
</head>
<body>
  <header>
    <a href="/blog">Back to Blog List</a>
  </header>
  <main>
    ${htmlContent}
  </main>
  <footer>
    <p>© 2025 Amirali Taqishah</p>
  </footer>
</body>
</html>`;
    await writeFile(outputFilePath, htmlTemplate);
    console.log('HTML file generated successfully:', outputFilePath);
  } catch (err) {
    console.error('Error:', err);
  }
}

generatePost();
