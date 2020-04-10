const asyncFn = () =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log("*/*/*/")
        // Hata oluştu.
        resolve('asenkron data 1');
      console.log("sadasdasdsa")
    });
  });

const asyncFn2 = () =>
  new Promise(resolve => {
    setTimeout(() => {
      // Hata oluştu.
      resolve('asenkron data 2');
    }, 1000);
  });
asyncFn().then(((res)=>{console.log(res)}));
Promise.all([asyncFn(), asyncFn2(), 'senkron data']).then(values => console.log(values));
