const launchOutput = require('../launchCodeRocks.js');

describe("launchOutput", function(){

  it("When passed a number that is ONLY divisible by 2, launchOutput returns 'Launch!'",function(){
    let array = [0,3,4,5];
    let output = launchOutput(array);
    expect(output).toEqual("Launch!");
  });

  it("When passed a number that is ONLY divisible by 3, launchOutput returns 'Code!'",function(){
    let array = [2,0,3,4];
    let output = launchOutput(array);
    expect(output).toEqual("Code!");
  })

  it("When passed a number that is ONLY divisible by 5, launchOutput returns 'Rocks!'",function(){
    let array = [2,2,0,2];
    let output = launchOutput(array);
    expect(output).toEqual("Rocks!");
  })

  it("When passed a number that is divisible by 2 AND 3, launchOutput returns 'LaunchCode!'", function(){
    let array = [0,0,2,2];
    let output = launchOutput(array);
    expect(output).toEqual("LaunchCode!");
  })

  it("When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'",function(){
    let array = [2,0,0,2];
    let output = launchOutput(array);
    expect(output).toEqual("Code Rocks!");
  })

  it("When passed a number that is divisible by 2 AND 5, return 'Launch Rocks! (CRASH!!!!)!'",function(){
    let array = [0,2,0,2];
    let output = launchOutput(array);
    expect(output).toEqual("Launch Rocks! (CRASH!!!!)");
  })

  it("When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'",function(){
    let array = [0,0,0,2];
    let output = launchOutput(array);
    expect(output).toEqual("LaunchCode Rocks!");
  })

  it("When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'",function(){
    let array = [2,2,2,2];
    let output = launchOutput(array);
    expect(output).toEqual("Rutabagas! That doesn't work.")
  })
});