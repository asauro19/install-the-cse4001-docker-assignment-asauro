const fs = require('fs');
const path = require('path');

const SCREENSHOT_NAME = 'screenshot.jpg';
const README_PATH = 'README.md';

// --------------------
// Recursively search for screenshot.jpg
// --------------------
function findScreenshot(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isFile() && entry.name === SCREENSHOT_NAME) {
      return fullPath;
    }

    if (entry.isDirectory() && entry.name !== '.git' && entry.name !== 'node_modules') {
      const found = findScreenshot(fullPath);
      if (found) return found;
    }
  }

  return null;
}

// --------------------
// Check README.md reference
// --------------------
function checkReadmeReferencesScreenshot() {
  if (!fs.existsSync(README_PATH)) {
    console.error('❌ README.md not found');
    process.exit(1);
  }

  const readmeContent = fs.readFileSync(README_PATH, 'utf8');

  // Markdown image syntax referencing screenshot.jpg
  const regex = new RegExp(
    `!\\[[^\\]]*\\]\\([^\\)]*${SCREENSHOT_NAME}\\)`,
    'i'
  );

  if (!regex.test(readmeContent)) {
    console.error(`❌ README.md does not reference ${SCREENSHOT_NAME}`);
    process.exit(1);
  }

  console.log(`✅ README.md references ${SCREENSHOT_NAME}`);
}

// --------------------
// Main
// --------------------
(function main() {
  try {
    checkReadmeReferencesScreenshot();

    const screenshotPath = findScreenshot(process.cwd());

    if (!screenshotPath) {
      console.error(`❌ ${SCREENSHOT_NAME} not found anywhere in repository`);
      process.exit(1);
    }

    console.log(`✅ Found ${SCREENSHOT_NAME} at: ${screenshotPath}`);
    process.exit(0);

  } catch (err) {
    console.error('❌ Unexpected error:', err);
    process.exit(1);
  }
})();
