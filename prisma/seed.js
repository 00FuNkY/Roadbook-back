const prisma = require('../src/prismaClient');

const city = ['Paris', 'London', 'Madrid', 'Lisboa', 'Berlin'];
const cityTab = city.map((elmt) =>
  prisma.city.create({ data: { label: elmt } })
);

const fail = (e) => {
  throw new Error(e.message);
};

    // insert here resolve chain when add collects
    Promise.all(createAdherents)
      .then((res) => console.log(res))
      .catch((e) => console.log(e.message));
  };

const promise = async () => {
  const createCommands = new Promise((resolve, reject) => {
    Promise.all(
      cityTab,
      )
    )
      .then((results) => resolve(results))
      .catch((e) => reject(e));
  });
  createCommands.then(success, fail);
};

promise();
}
main().catch((e) => console.error(e));