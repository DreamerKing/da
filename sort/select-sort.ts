function selectSort(nums: number[]): number[] {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < nums[i]) { // nums[i] 维护着第i+1小的值
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  return nums;
}

console.log(selectSort([21, 1, 34, 20, 3, 32, 0, 12]));
