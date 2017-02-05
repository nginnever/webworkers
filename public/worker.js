self.addEventListener('message', (event) => {
  console.log(event)
  if(event.data === 'do some work') {
    var count = 0

    var run = function(cb) {
      console.log('counting')
      console.log(count)
      for(var i = 0; i < 100000; i++) {
        count += 1;
        for(var j = 0; j < 100000; j++) {
          count += 1;
        }
      }
      console.log(count)
      console.log('---')
      cb(count)
    }
    run((total)=> {
      console.log(total)
    })
  }
})
