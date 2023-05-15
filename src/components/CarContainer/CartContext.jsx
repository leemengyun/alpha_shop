// import React from 'react';
const dummyShopping = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
];

const initialCardDetails = {
  orderPrice: 200,
  cardHolderName: 'eva Lee',
  cardNum: '1234 5678 9012 3456',
  cardExpireDate: 'MM/YY',
  cardCvc: '333',
};

const cardDetails = {
  orderPrice: 0,
  cardHolderName: '',
  cardNum: '',
  cardExpireDate: '',
  cardCvc: '',
};

// const initialCardDetails = {
//   orderPrice: 200,
//   cardHolderName: 'eva Lee',
//   cardNum: '1234 5678 9012 3456',
//   cardExpireDate: 'MM/YY',
//   cardCvc: '333',
// };

export { dummyShopping, initialCardDetails, cardDetails };
