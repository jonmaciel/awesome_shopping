const fetch = require('graphql-fetch')('/graphql');
const headers = new Headers({ 'Content-Type': 'application/json' });
const token = document.head.querySelector('[name="csrf-token"]').content;
headers.set('x-CSRF-token', token);
headers.set('X-Requested-With', 'XMLHttpRequest');

const opts = { headers, credentials: 'same-origin' };
const mutation = `
mutation setCart(
    $cart: [CartItemInput]!
  ){
  setCartMutation (input: {cart: $cart}) {
    success
  }
}

`;

export default cartItens =>
  fetch(mutation, cartItens, opts).then(r => {
    if (r.errors) return false;
    return r.data.success;
  });
