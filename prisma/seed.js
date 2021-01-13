const prisma = require('../src/prismaClient');

(async () => {
  await prisma.city.create({});
  // NAME

  const nameTab = prisma.city.create({
    city: 'Paris',
    country: 'France',
    text: 'fromage',
    longitude: 10,
    latitude: 111,
    video_id: 1,
    image_id: 1,
  });
  // COUNTRY

  const country = ['France', 'United Kingdom', 'Spain', 'Portugal', 'Germany'];
  const countryTab = country.map((item) =>
    prisma.city.create({ country: { label: item } })
  );

  // TEXT

  const text = ['Fromage', 'Jelly', 'Paella', 'Sausage', 'Beer'];
  const textTab = text.map((item) =>
    prisma.city.create({ text: { label: item } })
  );

  // LONGITUDE

  const longitude = ['001', '002', '003', '004', '005'];
  const longitudeTab = longitude.map((item) =>
    prisma.city.create({ longitude: { label: item } })
  );

  // LATITUDE

  const latitude = ['111', '222', '333', '444', '555'];
  const latitudeTab = latitude.map((item) =>
    prisma.city.create({ latitude: { label: item } })
  );

  // VIDEO ID

  const videoId = ['1', '2', '3', '4', '5'];
  const videoTab = videoId.map((item) =>
    prisma.city.create({ text: { label: item } })
  );

  // IMAGE ID

  const imageId = ['1', '2', '3', '4', '5'];
  const imageTab = imageId.map((item) =>
    prisma.city.create({ text: { label: item } })
  );

  await Promise.all(nameTab).then(() => {
    console.log('Seeds done !');
  });
})().finally(async () => {
  console.log('city seed done');
  await prisma.$disconnect();
});
