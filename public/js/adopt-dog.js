document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/api/dog');
  const dogs = await response.json();

  const source = document.getElementById('dog-partial-template').innerHTML;
  const template = Handlebars.compile(source);
  const dogGallery = document.getElementById('dog-gallery');
  dogGallery.innerHTML = template({ dogs });
});
  