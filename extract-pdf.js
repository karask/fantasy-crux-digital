const fs = require('fs');
const { join } = require('path');

async function extractPDF() {
    console.log('Reading PDF file...');

    // Use pdfjs-dist legacy build for Node.js
    const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');

    const pdfPath = join(__dirname, 'fantasy-crux-v1.4.1-printer.pdf');

    const loadingTask = pdfjsLib.getDocument({
        url: pdfPath,
        useSystemFonts: true
    });

    const doc = await loadingTask.promise;
    console.log(`Total pages: ${doc.numPages}`);

    let allText = '';

    for (let pageNum = 1; pageNum <= doc.numPages; pageNum++) {
        const page = await doc.getPage(pageNum);
        const content = await page.getTextContent();
        const strings = content.items.map(item => item.str);
        const pageText = strings.join(' ');
        allText += `\n\n=== PAGE ${pageNum} ===\n\n${pageText}`;

        if (pageNum % 20 === 0) {
            console.log(`Processed ${pageNum}/${doc.numPages} pages...`);
        }
    }

    console.log(`Total text length: ${allText.length} characters`);

    // Save full text
    fs.writeFileSync('./pdf-full-text.txt', allText, 'utf8');
    console.log('Saved full text to pdf-full-text.txt');

    // Split into chunks of ~50000 chars
    const chunkSize = 50000;
    const chunks = [];
    for (let i = 0; i < allText.length; i += chunkSize) {
        chunks.push(allText.substring(i, i + chunkSize));
    }

    for (let i = 0; i < chunks.length; i++) {
        const filename = `./pdf-chunk-${String(i + 1).padStart(2, '0')}.txt`;
        fs.writeFileSync(filename, chunks[i], 'utf8');
        console.log(`Saved chunk ${i + 1}/${chunks.length} to ${filename}`);
    }

    console.log('\nDone!');
}

extractPDF().catch(err => {
    console.error('Fatal error:', err);
});
