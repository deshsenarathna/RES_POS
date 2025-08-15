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

export const getAvatarName = (name) => {
  if (!name) return "";
  return name
    .split(" ")              // split by spaces into words
    .filter(word => word)    // remove empty strings if there are extra spaces
    .map(word => word[0])    // take the first character of each word
    .join("")                // join them together
    .toUpperCase();          // make uppercase
};


export const formatDate = (date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatTime = (date) => {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit', // Include seconds
  });
};

export const formatDateAndTime = (date) => {
  const dateAndTime = new Date(date).toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: 'Asia/Colombo'
  });

  return dateAndTime;
};


