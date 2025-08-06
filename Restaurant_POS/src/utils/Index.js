export const getBgColor = () => {
  const bgarr = [
    "#A62A2A",
    "2887D0",
    "#8FCFFF",
    "#D9B54B",
    "#931783",
    "#148C0B",
    "#770D0E",
    "#F580F9",
  ];
  const randomBg = Math.floor(Math.random() * bgarr.length);
  const color = bgarr[randomBg];
  return color;
};
