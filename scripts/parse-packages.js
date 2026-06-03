const fs = require('fs');
const path = require('path');

const contentDir = path.resolve('..');
const outputFilePath = path.resolve('data', 'all-packages.json');

const markdownFiles = [
  'Africa_Content.md',
  'Americas_Content.md',
  'Asia_Content.md',
  'Europe_Content.md',
  'India_Domestic_Content.md',
  'Middle_East_Content.md',
  'Oceania_Content.md',
];

const allData = [];

function parseFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  let currentContinent = path.basename(filePath).replace('_Content.md', '').replace('_Domestic', '');
  let currentCountry = null;
  let currentPackage = null;
  
  let state = 'ROOT'; // ROOT, COUNTRY_OVERVIEW, PACKAGE_DETAILS, ITINERARY
  let currentField = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Match Country Headers (e.g. ## ITALY)
    // Avoid matching ## ITALY TOUR PACKAGES
    if (line.startsWith('## ') && !line.toUpperCase().includes('PACKAGES') && !line.includes('ENTIRE PROJECT')) {
      currentCountry = {
        name: line.replace('## ', '').trim(),
        continent: currentContinent,
        overview: '',
        markdownContent: '',
        packages: []
      };
      allData.push(currentCountry);
      state = 'COUNTRY_INFO';
      continue;
    }

    // Match Package Headers (e.g. ### Package 1: Classic Rome)
    if (line.startsWith('### Package')) {
      currentPackage = {
        title: line.replace(/### Package \d+:\s*/, '').trim(),
        slug: line.replace(/### Package \d+:\s*/, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        duration: '',
        overview: '',
        highlights: [],
        inclusions: [],
        itinerary: [],
        imagePrompts: []
      };
      if (currentCountry) {
        currentCountry.packages.push(currentPackage);
      }
      state = 'PACKAGE_DETAILS';
      continue;
    }
    
    if (!currentCountry) continue;
    
    if (state === 'COUNTRY_INFO' && !line.startsWith('### Package')) {
       // Avoid pushing empty lines repeatedly at the start
       if (currentCountry.markdownContent !== '' || line !== '') {
           currentCountry.markdownContent += lines[i] + '\n';
       }
    }

    if (state === 'PACKAGE_DETAILS' && currentPackage) {
      if (line.startsWith('**Duration:**')) {
        currentPackage.duration = line.replace('**Duration:**', '').trim();
      } else if (line.startsWith('**Overview:**')) {
        currentField = 'overview';
      } else if (line.startsWith('**Key Highlights:**')) {
        currentField = 'highlights';
      } else if (line.startsWith('**Included Features:**')) {
        currentField = 'inclusions';
      } else if (line.startsWith('**Detailed Itinerary:**')) {
        state = 'ITINERARY';
        currentField = null;
      } else if (line.startsWith('**AI Image Prompts:**')) {
        currentField = 'imagePrompts';
      } else if (line !== '' && !line.startsWith('---')) {
        if (currentField === 'overview') {
          currentPackage.overview += line + ' ';
        } else if (currentField === 'highlights' && line.startsWith('-')) {
          currentPackage.highlights.push(line.replace('- ', '').trim());
        } else if (currentField === 'inclusions' && line.startsWith('-')) {
          currentPackage.inclusions.push(line.replace('- ', '').trim());
        } else if (currentField === 'imagePrompts' && line.match(/^\d+\./)) {
          currentPackage.imagePrompts.push(line.replace(/^\d+\.\s*/, '').replace(/^"|"$/g, '').trim());
        }
      }
    } else if (state === 'ITINERARY' && currentPackage) {
      if (line.startsWith('**Day ')) {
        const dayTitle = line.replace(/\*\*/g, '').trim();
        currentPackage.itinerary.push({ title: dayTitle, activities: [] });
      } else if (line !== '' && !line.startsWith('---') && !line.startsWith('**AI Image Prompts:**')) {
        if (currentPackage.itinerary.length > 0) {
          const lastDay = currentPackage.itinerary[currentPackage.itinerary.length - 1];
          lastDay.activities.push(line);
        }
      } else if (line.startsWith('**AI Image Prompts:**')) {
        state = 'PACKAGE_DETAILS';
        currentField = 'imagePrompts';
      }
    }
  }
}

markdownFiles.forEach(file => {
  const fullPath = path.join(contentDir, file);
  if (fs.existsSync(fullPath)) {
    console.log(`Parsing ${file}...`);
    parseFile(fullPath);
  } else {
    console.warn(`File not found: ${fullPath}`);
  }
});

fs.writeFileSync(outputFilePath, JSON.stringify(allData.filter(c => c.packages.length > 0), null, 2), 'utf8');
console.log(`Successfully generated ${outputFilePath} with ${allData.filter(c => c.packages.length > 0).length} valid countries/regions.`);
