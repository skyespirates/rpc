export interface TourType {
  id: string;
  image: string;
  info: string;
  name: string;
  price: string;
  removeTour?: (id: string) => void;
}
