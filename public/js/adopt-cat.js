document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/api/pets?species=cat');
    const cats = await response.json();
  
    // Compile Handlebars template
    const source = document.getElementById('cat-partial-template').innerHTML;
    const template = Handlebars.compile(source);
  
    // Render HTML
    const catGallery = document.getElementById('cat-gallery');
    catGallery.innerHTML = template({ cats });
  });
  