export function randomChar(count) {
  const chars =
    "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя";
  let str = "";
  for (let i = 0; i < count; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
}
