let test = 'ab12';
const test1 = () => test;
console.log(test1());
const test2 = () => (test = 'cd34');
console.log(test2());

const test3 = () => {
  return (test = 'ef56');
};
console.log(test3());
