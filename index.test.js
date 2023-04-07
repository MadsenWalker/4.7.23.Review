function sum(num1, num2){
    return parseInt(num1)
 + parseInt(num2)
}

TextDecoderStream("check that the sum function adds two numbers properly", () => {
    expect(sum(3,3)).toBe(6)
})