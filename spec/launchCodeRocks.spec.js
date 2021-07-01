const launchOutput = require('../launchCodeRocks.js');

// describe("launchOutput", function(){

//   it("A number ONLY divisible by 2, launchOutput returns 'Launch!'",function(){
//     let array = [0,3,4,5];
//     let output = launchOutput(array);
//     expect(output).toEqual("Launch!");
//     // let object = {2: 0}
//     // let output = launchOutput(object)
//     // expect(output).toEqual("Launch!")
//   });

//   it("A number ONLY divisible by 3, launchOutput returns 'Code!'",function(){
//     let array = [2,0,3,4];
//     let output = launchOutput(array);
//     expect(output).toEqual("Code!");
//   })

//   it("A number ONLY divisible by 5, launchOutput returns 'Rocks!'",function(){
//     let array = [2,2,0,2];
//     let output = launchOutput(array);
//     expect(output).toEqual("Rocks!");
//   })

//   it("A number divisible by 2 AND 3, launchOutput returns 'LaunchCode!'", function(){
//     let array = [0,0,2,2];
//     let output = launchOutput(array);
//     expect(output).toEqual("LaunchCode!");
//   })

//   it("A number divisible by 3 AND 5, return 'Code Rocks!'",function(){
//     let array = [2,0,0,2];
//     let output = launchOutput(array);
//     expect(output).toEqual("Code Rocks!");
//   })

//   it("A number divisible by 2 AND 5, return 'Launch Rocks! (CRASH!!!!)!'",function(){
//     let array = [0,2,0,2];
//     let output = launchOutput(array);
//     expect(output).toEqual("Launch Rocks! (CRASH!!!!)");
//   })

//   it("A number divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'",function(){
//     let array = [0,0,0,2];
//     let output = launchOutput(array);
//     expect(output).toEqual("LaunchCode Rocks!");
//   })

//   it("A number NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'",function(){
//     let array = [2,2,2,2];
//     let output = launchOutput(array);
//     expect(output).toEqual("Rutabagas! That doesn't work.")
//   })
// });


describe("launchOutput", function(){

  it("A number ONLY divisible by 2, launchOutput returns 'Launch!'",function(){
    let object = {2: 0}
    let output = launchOutput(object)
    expect(output).toEqual("Launch!")
  });

  it("A number ONLY divisible by 3, launchOutput returns 'Code!'",function(){
    let object = {3: 0}
    let output = launchOutput(object)
    expect(output).toEqual("Code!")
  })

  it("A number ONLY divisible by 5, launchOutput returns 'Rocks!'",function(){
    let object = {5: 0}
    let output = launchOutput(object)
    expect(output).toEqual("Rocks!")
  })

  it("A number divisible by 2 AND 3, launchOutput returns 'LaunchCode!'", function(){
    let object = {2: 0, 3: 0}
    let output = launchOutput(object)
    expect(output).toEqual("LaunchCode!")
  })

  it("A number divisible by 3 AND 5, return 'Code Rocks!'",function(){
    let object = {5: 0, 3: 0}
    let output = launchOutput(object)
    expect(output).toEqual("Code Rocks!")
  })

  it("A number divisible by 2 AND 5, return 'Launch Rocks! (CRASH!!!!)'",function(){
    let object = {2: 0, 5: 0}
    let output = launchOutput(object)
    expect(output).toEqual("Launch Rocks! (CRASH!!!!)")
  })

  it("A number divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'",function(){
    let object = {2: 0, 3: 0, 5: 0}
    let output = launchOutput(object)
    expect(output).toEqual("LaunchCode Rocks!")
  })

  it("A number NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'",function(){
    let object = {2: 1, 3: 1, 5: 1}
    let output = launchOutput(object)
    expect(output).toEqual("Rutabagas! That doesn't work.")
  })
});