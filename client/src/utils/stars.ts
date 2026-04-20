export function getStarsForRating(rating: number): string {
  let result = "";
  for (let i = 1; i <= rating; i++) {
    result += "★";
  }
  for (let i = 1; i <= 5 - rating; i++) {
    result += "☆";
  }
  return result;
}
