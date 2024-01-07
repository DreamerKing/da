function insertSort(nums: number[]): number[] {
  const len = nums.length;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      let temp = nums[i];
      if (temp < nums[j]) {
        let k = i;
        while (k >= j) {
          nums[k] = nums[--k];
        }
        nums[j] = temp;
      }
    }
  }
  return nums;
}

console.log(insertSort([21, 1, 34, 20, 3, 32, 0, 12]));
