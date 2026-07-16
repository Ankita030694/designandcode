const fs = require('fs');
const path = require('path');

const files = [
  'Clip path group.svg',
  'Clip path group-1.svg',
  'Clip path group-2.svg',
  'Clip path group-3.svg',
  'Group 14.svg',
  'Vector.svg'
];

files.forEach(file => {
  const filePath = path.join('public', 'Client_Logo', file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Format SVG content so lines aren't too long
  // Replace ">" with ">\n" and wrap long attributes
  content = content.replace(/>/g, '>\n');
  content = content.replace(/d="([^"]+)"/g, (match, p1) => {
    // Wrap path data at 80 chars
    const wrapped = p1.match(/.{1,80}/g).join('\n    ');
    return `d="\n    ${wrapped}\n  "`;
  });
  
  console.log(`=== FILE: ${file} ===`);
  console.log(content);
  console.log('=====================\n');
});
