const https = require('https');

const urls = [
  "https://images.unsplash.com/photo-1541888086925-920a0fd5f598?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2671&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1623340333276-857c742c069c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496851473196-e26508c21494?q=80&w=1500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504307659564-90f67ab42dd2?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596541223130-5d56447cefe5?q=80&w=800&auto=format&fit=crop"
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(`${res.statusCode} - ${url.substring(0, 50)}...`);
  }).on('error', (e) => {
    console.error(e);
  });
});
