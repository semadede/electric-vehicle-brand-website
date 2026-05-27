const auraImages = [
  'images/item_aura_front.jpg',
  'images/item_aura_side.jpg',
  'images/auraInterior.jpg'
];

const auraModelsImage = document.getElementById('aura-models-card-img');
if (auraModelsImage) auraModelsImage.src = auraImages[0];

auraImages.forEach((src, index) => {
  const img = document.getElementById(`aura-img-${index}`);
  if (img) img.src = src;
});

const auraCardImage = document.getElementById('aura-card-img');
if (auraCardImage) auraCardImage.src = auraImages[0];
