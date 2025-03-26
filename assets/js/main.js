// Load header and footer components
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));

    // Load footer
    fetch('/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('toolSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const toolCards = document.querySelectorAll('.tool-card');
            
            toolCards.forEach(card => {
                const title = card.querySelector('.tool-title').textContent.toLowerCase();
                const description = card.querySelector('.tool-description').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});

// Tool categories data
const toolCategories = {
    'image-tools': {
        name: 'Image Tools',
        icon: 'fas fa-image',
        tools: [
            { id: 'image-to-png', name: 'Image to PNG Converter', description: 'Convert images to PNG format' },
            { id: 'image-to-jpg', name: 'Image to JPG Converter', description: 'Convert images to JPG format' },
            { id: 'image-resizer', name: 'Image Resizer', description: 'Resize images while maintaining aspect ratio' },
            { id: 'image-compressor', name: 'Image Compressor', description: 'Compress images to reduce file size' },
            { id: 'image-cropper', name: 'Image Cropper', description: 'Crop images to desired dimensions' },
            { id: 'image-to-base64', name: 'Image to Base64', description: 'Convert images to Base64 format' },
            { id: 'webp-to-png', name: 'WebP to PNG', description: 'Convert WebP images to PNG format' },
            { id: 'gif-maker', name: 'GIF Maker', description: 'Create animated GIFs from images' },
            { id: 'qr-code-generator', name: 'QR Code Generator', description: 'Generate QR codes from text or URLs' },
            { id: 'screenshot-to-pdf', name: 'Screenshot to PDF', description: 'Convert screenshots to PDF format' }
        ]
    },
    'seo-tools': {
        name: 'SEO Tools',
        icon: 'fas fa-search',
        tools: [
            { id: 'meta-tag-generator', name: 'Meta Tag Generator', description: 'Generate SEO-friendly meta tags' },
            { id: 'keyword-density', name: 'Keyword Density Checker', description: 'Check keyword density in your text' },
            { id: 'sitemap-generator', name: 'Sitemap Generator', description: 'Generate XML sitemaps for your website' },
            { id: 'robots-txt-generator', name: 'Robots.txt Generator', description: 'Create robots.txt file for your website' },
            { id: 'google-index-checker', name: 'Google Index Checker', description: 'Check if your pages are indexed by Google' },
            { id: 'domain-authority', name: 'Domain Authority Checker', description: 'Check domain authority of websites' },
            { id: 'backlink-checker', name: 'Backlink Checker', description: 'Analyze backlinks of any website' },
            { id: 'page-speed-checker', name: 'Page Speed Checker', description: 'Check website loading speed' },
            { id: 'xml-sitemap-validator', name: 'XML Sitemap Validator', description: 'Validate your XML sitemap' },
            { id: 'mobile-friendly-test', name: 'Mobile-Friendly Test', description: 'Test website mobile responsiveness' }
        ]
    },
    'text-tools': {
        name: 'Text Tools',
        icon: 'fas fa-font',
        tools: [
            { id: 'word-counter', name: 'Word Counter', description: 'Count words and characters in text' },
            { id: 'character-counter', name: 'Character Counter', description: 'Count characters with and without spaces' },
            { id: 'case-converter', name: 'Case Converter', description: 'Convert text between different cases' },
            { id: 'plagiarism-checker', name: 'Plagiarism Checker', description: 'Check text for plagiarism' },
            { id: 'grammar-checker', name: 'Grammar Checker', description: 'Check text for grammar errors' },
            { id: 'text-to-speech', name: 'Text to Speech', description: 'Convert text to speech' },
            { id: 'speech-to-text', name: 'Speech to Text', description: 'Convert speech to text' },
            { id: 'url-encoder', name: 'URL Encoder/Decoder', description: 'Encode and decode URLs' },
            { id: 'fancy-text-generator', name: 'Fancy Text Generator', description: 'Generate fancy text styles' },
            { id: 'random-text-generator', name: 'Random Text Generator', description: 'Generate random text content' }
        ]
    },
    'developer-tools': {
        name: 'Developer Tools',
        icon: 'fas fa-code',
        tools: [
            { id: 'json-formatter', name: 'JSON Formatter', description: 'Format and validate JSON data' },
            { id: 'html-to-markdown', name: 'HTML to Markdown', description: 'Convert HTML to Markdown format' },
            { id: 'css-minifier', name: 'CSS Minifier', description: 'Minify CSS code' },
            { id: 'javascript-minifier', name: 'JavaScript Minifier', description: 'Minify JavaScript code' },
            { id: 'sql-formatter', name: 'SQL Formatter', description: 'Format SQL queries' },
            { id: 'htaccess-redirect', name: 'HTACCESS Redirect Generator', description: 'Generate redirect rules' },
            { id: 'markdown-to-html', name: 'Markdown to HTML', description: 'Convert Markdown to HTML' },
            { id: 'color-picker', name: 'Color Code Picker', description: 'Pick and convert color codes' },
            { id: 'base64-encoder', name: 'Base64 Encoder/Decoder', description: 'Encode and decode Base64' },
            { id: 'ip-lookup', name: 'IP Address Lookup', description: 'Look up IP address information' }
        ]
    },
    'calculators': {
        name: 'Calculators',
        icon: 'fas fa-calculator',
        tools: [
            { id: 'percentage-calculator', name: 'Percentage Calculator', description: 'Calculate percentages' },
            { id: 'age-calculator', name: 'Age Calculator', description: 'Calculate age from birth date' },
            { id: 'bmi-calculator', name: 'BMI Calculator', description: 'Calculate Body Mass Index' },
            { id: 'loan-emi-calculator', name: 'Loan EMI Calculator', description: 'Calculate loan EMI' },
            { id: 'scientific-calculator', name: 'Scientific Calculator', description: 'Advanced mathematical calculations' },
            { id: 'discount-calculator', name: 'Discount Calculator', description: 'Calculate discounts and savings' },
            { id: 'currency-converter', name: 'Currency Converter', description: 'Convert between currencies' },
            { id: 'time-zone-converter', name: 'Time Zone Converter', description: 'Convert between time zones' },
            { id: 'binary-decimal', name: 'Binary to Decimal', description: 'Convert binary to decimal' },
            { id: 'tip-calculator', name: 'Tip Calculator', description: 'Calculate tips and splits' }
        ]
    },
    'converters': {
        name: 'Unit Converters',
        icon: 'fas fa-exchange-alt',
        tools: [
            { id: 'length-converter', name: 'Length Converter', description: 'Convert between length units' },
            { id: 'weight-converter', name: 'Weight Converter', description: 'Convert between weight units' },
            { id: 'speed-converter', name: 'Speed Converter', description: 'Convert between speed units' },
            { id: 'temperature-converter', name: 'Temperature Converter', description: 'Convert between temperature units' },
            { id: 'volume-converter', name: 'Volume Converter', description: 'Convert between volume units' },
            { id: 'data-storage-converter', name: 'Data Storage Converter', description: 'Convert between storage units' },
            { id: 'energy-converter', name: 'Energy Converter', description: 'Convert between energy units' },
            { id: 'pressure-converter', name: 'Pressure Converter', description: 'Convert between pressure units' },
            { id: 'fuel-efficiency', name: 'Fuel Efficiency Converter', description: 'Convert fuel efficiency units' },
            { id: 'angle-converter', name: 'Angle Converter', description: 'Convert between angle units' }
        ]
    },
    'security-tools': {
        name: 'Security Tools',
        icon: 'fas fa-shield-alt',
        tools: [
            { id: 'md5-hash', name: 'MD5 Hash Generator', description: 'Generate MD5 hashes' },
            { id: 'sha256-hash', name: 'SHA256 Hash Generator', description: 'Generate SHA256 hashes' },
            { id: 'password-generator', name: 'Password Generator', description: 'Generate secure passwords' },
            { id: 'random-string', name: 'Random String Generator', description: 'Generate random strings' },
            { id: 'url-shortener', name: 'URL Shortener', description: 'Shorten long URLs' },
            { id: 'ip-geolocation', name: 'IP Geolocation Finder', description: 'Find location from IP' },
            { id: 'ssl-checker', name: 'SSL Certificate Checker', description: 'Check SSL certificate status' },
            { id: 'whois-lookup', name: 'WHOIS Lookup', description: 'Look up domain information' },
            { id: 'http-headers', name: 'HTTP Headers Checker', description: 'Check HTTP headers' },
            { id: 'privacy-policy', name: 'Privacy Policy Generator', description: 'Generate privacy policy' }
        ]
    },
    'social-media-tools': {
        name: 'Social Media Tools',
        icon: 'fas fa-share-alt',
        tools: [
            { id: 'youtube-thumbnail', name: 'YouTube Thumbnail Downloader', description: 'Download YouTube thumbnails' },
            { id: 'instagram-downloader', name: 'Instagram Photo Downloader', description: 'Download Instagram photos' },
            { id: 'twitter-video', name: 'Twitter Video Downloader', description: 'Download Twitter videos' },
            { id: 'facebook-video', name: 'Facebook Video Downloader', description: 'Download Facebook videos' },
            { id: 'tiktok-downloader', name: 'TikTok Video Downloader', description: 'Download TikTok videos' },
            { id: 'youtube-tags', name: 'YouTube Tags Extractor', description: 'Extract YouTube video tags' },
            { id: 'hashtag-generator', name: 'Hashtag Generator', description: 'Generate social media hashtags' },
            { id: 'social-post-generator', name: 'Social Post Generator', description: 'Generate social media posts' },
            { id: 'emoji-keyboard', name: 'Emoji Keyboard', description: 'Browse and copy emojis' },
            { id: 'twitter-counter', name: 'Twitter Character Counter', description: 'Count Twitter characters' }
        ]
    },
    'miscellaneous-tools': {
        name: 'Miscellaneous Tools',
        icon: 'fas fa-tools',
        tools: [
            { id: 'barcode-generator', name: 'Barcode Generator', description: 'Generate barcodes' },
            { id: 'meme-generator', name: 'Meme Generator', description: 'Create custom memes' },
            { id: 'resume-builder', name: 'Resume Builder', description: 'Create professional resumes' },
            { id: 'invoice-generator', name: 'Invoice Generator', description: 'Generate invoices' },
            { id: 'business-name', name: 'Business Name Generator', description: 'Generate business names' },
            { id: 'lottery-numbers', name: 'Lottery Number Generator', description: 'Generate lottery numbers' },
            { id: 'coin-flip', name: 'Flip a Coin', description: 'Simulate coin flips' },
            { id: 'random-number', name: 'Random Number Generator', description: 'Generate random numbers' },
            { id: 'dice-roller', name: 'Dice Roller', description: 'Roll virtual dice' },
            { id: 'internet-speed', name: 'Internet Speed Test', description: 'Test your internet speed' }
        ]
    }
};

// Function to render tools grid
function renderToolsGrid() {
    const toolsGrid = document.querySelector('.tools-grid');
    if (!toolsGrid) return;

    let html = '';
    Object.entries(toolCategories).forEach(([categoryId, category]) => {
        html += `
            <div class="category-section mb-5">
                <h2 class="mb-4">
                    <i class="${category.icon} me-2"></i>
                    ${category.name}
                </h2>
                <div class="row">
                    ${category.tools.map(tool => `
                        <div class="col-md-4 mb-4">
                            <div class="card tool-card h-100">
                                <div class="card-body">
                                    <h5 class="card-title tool-title">${tool.name}</h5>
                                    <p class="card-text tool-description">${tool.description}</p>
                                    <a href="/tools/${categoryId}/${tool.id}.html" class="btn btn-primary">Use Tool</a>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });

    toolsGrid.innerHTML = html;
}

// Initialize tools grid
document.addEventListener('DOMContentLoaded', renderToolsGrid); 