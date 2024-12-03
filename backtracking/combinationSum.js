const combiantionSum = (candidates, target) => {
  const result = [];
  const dfs = (start, target, path) => {
    if (target < 0) return;
    if (target === 0) {
      result.push([...path]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      dfs(i, target - candidates[i], path);
      path.pop();
    }
  };
  dfs(0, target, []);
  return result;
};

console.log(combiantionSum([2, 3, 6, 7], 7));
