
function getSomething () {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000)
  })
}

async function printSomething(){
  console.log(1)
  console.log(await getSomething())
  console.log(3)
}

printSomething()
