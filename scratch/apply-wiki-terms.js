const fs = require('fs');

async function fetchCommonsImage(query, expectedCount = 5) {
  const images = [];
  try {
    let currentQuery = query;
    const stopwords = ['in', 'at', 'on', 'of', 'and', 'the', 'a', 'an', 'with'];
    
    while (currentQuery.split(' ').length > 0 && images.length < expectedCount) {
      const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(currentQuery)}&prop=imageinfo&iiprop=url&format=json&gsrlimit=10`;
      
      const res = await fetch(url, {
        headers: { 'User-Agent': 'RRHolidaysBot/4.0 (contact@rrholidays.net)' }
      });
      
      const data = await res.json();
      
      if (data && data.query && data.query.pages) {
        const pages = Object.values(data.query.pages);
        for (const p of pages) {
          if (p.imageinfo && p.imageinfo[0] && p.imageinfo[0].url) {
            const src = p.imageinfo[0].url;
            const srcLower = src.toLowerCase();
            if ((srcLower.includes('.jpg') || srcLower.includes('.jpeg') || srcLower.includes('.png')) && 
                !srcLower.includes('.svg') && !srcLower.includes('map') && !srcLower.includes('flag') && 
                !srcLower.includes('logo') && !srcLower.includes('icon') && !srcLower.includes('locator') &&
                !images.includes(src)) {
              images.push(src);
              if (images.length >= expectedCount) break;
            }
          }
        }
      }
      
      if (images.length >= expectedCount) break;
      
      const words = currentQuery.split(' ');
      words.pop();
      while (words.length > 0 && stopwords.includes(words[words.length - 1].toLowerCase())) {
        words.pop();
      }
      currentQuery = words.join(' ');
      if (!currentQuery) break;
      
      await new Promise(r => setTimeout(r, 400));
    }
  } catch (e) {
    console.log("Error fetching:", query, e.message);
  }
  return images;
}

async function applyTerms() {
  const allTerms = JSON.parse(fs.readFileSync('scratch/NEW_3_COUNTRIES_TERMS.json', 'utf8'));
  
  console.log(`Loaded ${allTerms.length} total packages from NEW_3_COUNTRIES_TERMS.json`);
  
  const dbFile = 'data/all-packages.json';
  const db = JSON.parse(fs.readFileSync(dbFile, 'utf8'));
  
  let successCount = 0;

  for (const pkgTerm of allTerms) {
    console.log(`Processing package: ${pkgTerm.title}`);
    
    let targetPkg = null;
    let targetCountry = null;
    
    for (const c of db) {
      for (const p of c.packages) {
        if (p.slug.includes(pkgTerm.slug)) {
          targetPkg = p;
          targetCountry = c;
          break;
        }
      }
      if (targetPkg) break;
    }
    
    if (!targetPkg) {
      console.log(`  -> [ERROR] Could not find package for slug: ${pkgTerm.slug}`);
      continue;
    }
    
    const fetchedImages = [];
    for (const term of pkgTerm.searchTerms) {
      const imgs = await fetchCommonsImage(term, 1);
      if (imgs.length > 0) {
        fetchedImages.push(imgs[0]);
      } else {
        console.log(`    Failed to find image for term: ${term}`);
      }
      await new Promise(r => setTimeout(r, 600)); // Polite delay
    }
    
    if (fetchedImages.length > 0) {
      targetPkg.images = fetchedImages;
      targetPkg.imageUrl = fetchedImages[0];
      successCount++;
      console.log(`  -> Updated ${targetPkg.title} with ${fetchedImages.length} images.`);
    }
  }
  
  // Update country covers
  db.forEach(c => {
    if (c.packages.length > 0 && c.packages[0].imageUrl) {
      c.imageUrl = c.packages[0].imageUrl;
    }
  });
  
  fs.writeFileSync(dbFile, JSON.stringify(db, null, 2));
  console.log(`\nMISSION ACCOMPLISHED! Updated ${successCount} out of ${allTerms.length} packages with destination-specific images!`);
}

applyTerms();
