export function getImageUrl(person, size = "s") {
  return "/img/" + person.imageId + size + ".png";
}
