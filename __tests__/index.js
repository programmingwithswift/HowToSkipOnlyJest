describe('A: Skip test 2', () => {
  test('A: test 1', () => {
    console.log('A: test 1 complete')
  })
  
  test.skip('A: test 2', () => {
    console.log('A: test 2 complete')
  })
  
  test('A: test 3', () => {
    console.log('A: test 3 complete')
  })
})

describe.skip('B: Skip group B entirely', () => {
  test('B: test 1', () => {
    console.log('B: test 1 complete')
  })
  
  test('B: test 2', () => {
    console.log('B: test 2 complete')
  })
  
  test('B: test 3', () => {
    console.log('B: test 3 complete')
  })
})

// I have commented the below example 
// because they will stop all other tests from running

// describe.only('C: Only run this suite', () => {
//   test('C: test 1', () => {
//     console.log('C: test 1 complete')
//   })
  
//   test('C: test 2', () => {
//     console.log('C: test 2 complete')
//   })
  
//   test('C: test 3', () => {
//     console.log('C: test 3 complete')
//   })
// })

// describe('D: Only run test 2', () => {
//   test('D: test 1', () => {
//     console.log('D: test 1 complete')
//   })
  
//   test.only('D: test 2', () => {
//     console.log('D: test 2 complete')
//   })
  
//   test('D: test 3', () => {
//     console.log('D: test 3 complete')
//   })
// })