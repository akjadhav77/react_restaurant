import images from './images';

const wines = [
  {
    title: 'Cabernet Shiraz By Sula',
    price: '₹895',
    tags: 'IN | 750ml',
  },
  {
    title: 'Sette by Fratelli Wines',
    price: '₹1700',
    tags: 'IN | 750ml',
  },
  {
    title: 'La Reserve by Grover Zampa',
    price: '₹1050',
    tags: 'IN | 750 ml',
  },
  {
    title: 'Reserve Tempranillo By Charosa',
    price: '₹1500',
    tags: 'IN | 750 ml',
  },
  {
    title: 'York Arros',
    price: '₹1150',
    tags: 'IN | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '₹1200',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '₹850',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '₹650',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '₹2400',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '₹1500',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
