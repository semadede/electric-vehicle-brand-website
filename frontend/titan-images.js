const titanImages = [
  'images/titanFront.jpg',
  'images/titanInterior.jpg',
  'images/titanRear.jpg',
  'images/titanSide.jpg'
];

const titanCardImage = document.getElementById('titan-card-img');
if (titanCardImage) titanCardImage.src = titanImages[0];

const titanImg = document.getElementById('titan-models-card-img');
if (titanImg) titanImg.src = titanImages[0];

titanImages.forEach((src, index) => {
  const img = document.getElementById(`titan-img-${index}`);
  if (img) img.src = src;
});
