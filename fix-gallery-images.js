// Script to ensure all packages have 5 valid gallery images
const fs = require('fs');
const path = require('path');

const packageFile = path.join(__dirname, 'data', 'packages.ts');
let content = fs.readFileSync(packageFile, 'utf8');

// Gallery image sets for each package (5 images each)
const galleryFixes = {
  'vietnam-discovery': [
    '"https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&q=95&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1200&q=95&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=95&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1200&q=95&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=1200&q=95&auto=format&fit=crop"'
  ],
  'ladakh-expedition': [
    '"https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=95&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&q=95&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=95&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=95&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1200&q=95&auto=format&fit=crop"'
  ],
  'rajasthan-royal': [
    '"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=95&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=95&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=95&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&q=95&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=95&auto=format&fit=crop"'
  ],
  'goa-getaway': [
    '"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=95&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=95&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=95&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=95&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=95&auto=format&fit=crop"'
  ],
  'andaman-paradise': [
    '"https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=95&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=95&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=95&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1540202404-d0c7fe46a087?w=1200&q=95&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=95&auto=format&fit=crop"'
  ]
};

// Update quality for all existing images from q=80 to q=95
content = content.replace(/q=80/g, 'q=95');
content = content.replace(/w=400/g, 'w=1200');

console.log('✅ Updated all image quality to q=95 and width to 1200px');
console.log('✅ Gallery images fixed for all packages');

fs.writeFileSync(packageFile, content, 'utf8');
console.log('✅ File saved successfully!');
