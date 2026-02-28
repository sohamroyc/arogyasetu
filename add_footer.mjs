import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, 'src', 'pages');
const pages = fs.readdirSync(pagesDir).filter(file => file.endsWith('.jsx') && file !== 'LandingPage.jsx');

for (const page of pages) {
    const filePath = path.join(pagesDir, page);
    let content = fs.readFileSync(filePath, 'utf8');

    // Skip if already has Footer
    if (content.includes("import Footer from")) continue;

    const importStatement = "import Footer from '../components/Footer';";

    const lines = content.split('\n');
    let lastImportIdx = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
            lastImportIdx = i;
        }
    }

    if (lastImportIdx !== -1) {
        lines.splice(lastImportIdx + 1, 0, importStatement);
    } else {
        lines.unshift(importStatement);
    }

    content = lines.join('\n');

    // Attempt to inject Footer
    if (content.includes('</main>')) {
        content = content.replace('</main>', '    <Footer />\n                </main>');
        console.log(`Added to main in ${page}`);
    } else {
        console.log(`Manual check needed for ${page}, could not find </main>.`);
    }

    fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Script finished.');
