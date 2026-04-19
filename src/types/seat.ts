export type SeatStatus = 'available' | 'selected' | 'booked';

export interface Seat {
  id: string;
  label: string;
  status: SeatStatus;
  zone: string;
  occupantName?: string;
  cluster?: number;
}

export interface DivisionData {
  name: string;
  seats: Seat[];
}