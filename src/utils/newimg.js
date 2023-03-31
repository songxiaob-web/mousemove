export const getImg = (name) => {
  // 需要使用 相对路径 **** 

  let url = new URL(`../assets/images/${name}`, import.meta.url).href;
  return url
}