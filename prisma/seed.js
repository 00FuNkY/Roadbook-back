const { hashPassword } = require('../src/auth/util');
const prisma = require('../src/prismaClient');

(async () => {
  await prisma.user.create({
    data: {
      email: 'admin@dev.com',
      password: hashPassword('superadmin'),
    },
  });

  await prisma.city.create({
    data: {
      name: 'Tirana',
      country: 'Albania',
    },
  });

  await prisma.city.create({
    data: {
      name: 'Andorra la Vella',
      country: 'Andorra',
    },
  });

  await prisma.city.create({
    data: {
      name: 'Yerevam',
      country: 'Armenia',
    },
  });

  await prisma.city.create({
    data: {
      name: 'Vienna',
      country: 'Austria',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Baku',
      country: 'Azerbaidjan',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Minsk',
      country: 'Belarus',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Brussels',
      country: 'Belgium',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Sarajevo',
      country: 'Bosnia & Herzegovina',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Sofia',
      country: 'Bulgaria',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Zagreb',
      country: 'Croatia',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Nicosia',
      country: 'Cyprus',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Prague',
      country: 'Czechia',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Copenhagen',
      country: 'Denmark',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Tallinn',
      country: 'Estonia',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Helsinki',
      country: 'Finland',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Paris',
      country: 'France',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Tbilisi',
      country: 'Georgia',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Berlin',
      country: 'Germany',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Athens',
      country: 'Greece',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Budapest',
      country: 'Hungary',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Reykjavik',
      country: 'Iceland',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Dublin',
      country: 'Ireland',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Rome',
      country: 'Italy',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Nur-Sultan',
      country: 'Kazakhstan',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Pristina',
      country: 'Kosovo',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Riga',
      country: 'Latvia',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Vaduz',
      country: 'Liechtenstein',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Vilnius',
      country: 'Lithuania',
    },
  });
  await prisma.city.create({
    data: {
      name: 'Luxembourg',
      country: 'Luxembourg',
    },
  });
  await prisma.image.create({
    data: {
      link:
        'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
      city: {
        connect: {
          id: 2,
        },
      },
      user: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.image.create({
    data: {
      link:
        'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
      city: {
        connect: {
          id: 3,
        },
      },
      user: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.image.create({
    data: {
      link:
        'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
      city: {
        connect: {
          id: 16,
        },
      },
      user: {
        connect: {
          id: 1,
        },
      },
    },
  });
})().finally(async () => {
  console.log('Seed done');
  await prisma.$disconnect();
});
