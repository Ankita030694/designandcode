const fs = require('fs');
const path = require('path');

const logFile = 'C:\\Users\\zaib7\\.gemini\\antigravity-ide\\brain\\d44016b2-bb48-44f3-a17a-2f07b98a3f0b\\.system_generated\\logs\\transcript_full.jsonl';

if (!fs.existsSync(logFile)) {
  console.log('Log file not found at:', logFile);
  process.exit(1);
}

const lines = fs.readFileSync(logFile, 'utf8').split('\n');
console.log(`Total lines: ${lines.length}`);

for (let i = lines.length - 1; i >= 0; i--) {
  const line = lines[i].trim();
  if (!line) continue;
  try {
    const obj = JSON.parse(line);
    if (obj.tool_calls) {
      for (const call of obj.tool_calls) {
        if (call.name && (call.name.includes('write') || call.name.includes('replace'))) {
          console.log(`--- Line ${i} (Step ${obj.step_index}) ---`);
          console.log(`Call name: ${call.name}`);
          
          let args = call.args;
          if (typeof args === 'string') {
            try {
              args = JSON.parse(args);
            } catch (e) {
              console.log(`JSON parse failed:`, e.message);
            }
          }
          if (args) {
            console.log(`Keys of args:`, Object.keys(args));
            const target = args.TargetFile || args.targetFile || '';
            console.log(`TargetFile:`, target);
            if (typeof target === 'string' && target.endsWith('page.tsx')) {
              const content = args.CodeContent || args.ReplacementContent || args.replacementContent || '';
              const outFile = `scratch/extracted_page_step_${obj.step_index}.tsx`;
              fs.writeFileSync(outFile, content);
              console.log(`SUCCESS: Wrote ${content.length} characters to ${outFile}`);
            }
          }
        }
      }
    }
  } catch (err) {
    console.log(`Parse error:`, err.message);
  }
}
