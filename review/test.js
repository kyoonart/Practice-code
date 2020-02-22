function minNumberInRotateArray1(rotateArray) {
    // write code here
    const length = rotateArray.length;
    if (!length) {
        return 0;
    }
    return Math.min(...rotateArray);

}