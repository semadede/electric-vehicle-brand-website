const miniImages = [
  'images/item_mini_front.jpg',
  'images/item_mini_side.jpg',
  'images/miniRear.jpg',
  'images/miniInterior.jpg'
];

miniImages.forEach((src, index) => {
  const img = document.getElementById(`mini-img-${index}`);
  if (img) img.src = src;
});

const miniCardImage = document.getElementById('mini-card-img');
if (miniCardImage) miniCardImage.src = miniImages[0];

const miniModelsCardImage = document.getElementById('mini-models-card-img');
if (miniModelsCardImage) miniModelsCardImage.src = miniImages[0];
