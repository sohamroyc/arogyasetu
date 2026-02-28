const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const pages = fs.readdirSync(pagesDir).filter(file => file.endsWith('.jsx') && file !== 'LandingPage.jsx');

for (const page of pages) {
    const filePath = path.join(pagesDir, page);
    let content = fs.readFileSync(filePath, 'utf8');

    // Skip if already has Footer
    if (content.includes("import Footer from")) continue;

    // Add import
    const importStatement = "import Footer from '../components/Footer';\n";

    // Find last import
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

    // Add Footer component before </main> or very last closing tag
    if (content.includes('</main>')) {
        content = content.replace('</main>', '    <Footer />\n                </main>');
    } else {
        // Find last closing div
        const match = content.match(/<\/[a-zA-Z]+>\s*;\s*\}\s*;/);
        if (content.includes('</div>\n        </div>\n    );\n};')) {
            content = content.replace('</div>\n        </div>\n    );\n};', '    <Footer />\n        </div>\n        </div>\n    );\n};');
        } else {
            console.log(`Manual check needed for ${page}, could not find </main> or simple closing pattern.`);
        }
    }

    fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Script finished.');
