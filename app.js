function vowelCount(str){
    const vowelMap = new Map()
    for (let char of str.toLowerCase()){
        "aeiou".indexOf(char) >= 0 ? (vowelMap.has(char) ? vowelMap.set(char, vowelMap.get(char)+1) : vowelMap.set(char, 1)) : undefined
    }
    return vowelMap
}