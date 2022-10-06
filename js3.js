// Expected Result : 4200
// Direction :
// Find and returns the largest value

const item = [
    {
      name: 'spoon',
      details: {
        value: 4120,
      },
    },
    {
      name: 'fork',
      details: {
        value: 4200,
      },
    },
    {
      name: 'plate',
      details: {
        value: 2032,
      },
    },
  ];
  
  function result(item) {
    let sorted_item = item.sort(function(a, b){return b.details.value - a.details.value});
    return sorted_item[0].details.value
  }
  
  console.log(result(item));