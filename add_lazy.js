const fs = require('fs');
const glob = require('glob');
// We need to install glob if not available. It's likely not.
// We can just use standard fs to recursively search src/**/*.tsx
const path = require('path');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
}

walk('./src', (filePath) => {
    if (filePath.endsWith('.tsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        // skip Header.tsx as we don't want to lazy load the logo
        if (filePath.includes('Header.tsx')) return;
        
        let modified = false;
        // replace <img with <img loading="lazy" where it doesn't already have loading=
        // naive regex:
        let newContent = content.replace(/<img(?![^>]*loading=)/g, '<img loading="lazy"');
        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Modified', filePath);
        }
    }
});
