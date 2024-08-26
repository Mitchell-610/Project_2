document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/api/pets?species=dog');
    const dogs = await response.json();
  
    // Compile Handlebars template
    const source = document.getElementById('dog-partial-template').innerHTML;
    const template = Handlebars.compile(source);
  
    // Render HTML
    const dogGallery = document.getElementById('dog-gallery');
    dogGallery.innerHTML = template({ dogs });
  });
  