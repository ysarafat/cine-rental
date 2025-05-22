import StarIcon from "../assets/star.svg";

export default function Rating({ value }) {
  const stars = Array(value).fill(StarIcon);
  return stars.map((star, index) => (
    <img key={index} src={star} alt="Star" height={14} width={14} />
  ));
}
