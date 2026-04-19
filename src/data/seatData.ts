import { DivisionData } from '../types/seat';

export const divisionsData: DivisionData[] = [
  {
    name: 'Division A',
    seats: [
      // Buffer Zone (Left side)
      { id: 'A-B1', label: 'B1', status: 'buffer', division: 'Division A', cluster: 0 },
      { id: 'A-B2', label: 'B2', status: 'buffer', division: 'Division A', cluster: 0 },
      
      // Cluster 1 - Vertical group
      { id: 'A1', label: 'A1', status: 'booked', occupantName: 'Ayyappa', division: 'Division A', cluster: 1 },
      { id: 'A2', label: 'A2', status: 'booked', occupantName: 'Narendar', division: 'Division A', cluster: 1 },
      { id: 'A3', label: 'A3', status: 'available', division: 'Division A', cluster: 1 },
      { id: 'A4', label: 'A4', status: 'available', division: 'Division A', cluster: 1 },
      
      // Cluster 2 - Vertical group
      { id: 'A5', label: 'A5', status: 'booked', occupantName: 'Bedant', division: 'Division A', cluster: 2 },
      { id: 'A6', label: 'A6', status: 'booked', occupantName: 'Narsi', division: 'Division A', cluster: 2 },
      { id: 'A7', label: 'A7', status: 'booked', occupantName: 'Rajesh', division: 'Division A', cluster: 2 },
      { id: 'A8', label: 'A8', status: 'booked', occupantName: 'Anil', division: 'Division A', cluster: 2 }
    ]
  },
  {
    name: 'Division B',
    seats: [
      // Buffer Zone
      { id: 'B-B1', label: 'B1', status: 'buffer', division: 'Division B', cluster: 0 },
      { id: 'B-B2', label: 'B2', status: 'buffer', division: 'Division B', cluster: 0 },
      
      // Cluster 1
      { id: 'B1', label: 'B1', status: 'available', division: 'Division B', cluster: 1 },
      { id: 'B2', label: 'B2', status: 'booked', occupantName: 'Kumar', division: 'Division B', cluster: 1 },
      { id: 'B3', label: 'B3', status: 'available', division: 'Division B', cluster: 1 },
      { id: 'B4', label: 'B4', status: 'booked', occupantName: 'Sneha', division: 'Division B', cluster: 1 },
      
      // Cluster 2
      { id: 'B5', label: 'B5', status: 'available', division: 'Division B', cluster: 2 },
      { id: 'B6', label: 'B6', status: 'booked', occupantName: 'Lakshmi', division: 'Division B', cluster: 2 },
      { id: 'B7', label: 'B7', status: 'available', division: 'Division B', cluster: 2 },
      { id: 'B8', label: 'B8', status: 'booked', occupantName: 'Vikram', division: 'Division B', cluster: 2 }
    ]
  },
  {
    name: 'Division C',
    seats: [
      // Buffer Zone
      { id: 'C-B1', label: 'B1', status: 'buffer', division: 'Division C', cluster: 0 },
      { id: 'C-B2', label: 'B2', status: 'buffer', division: 'Division C', cluster: 0 },
      
      // Cluster 1
      { id: 'C1', label: 'C1', status: 'booked', occupantName: 'Meera', division: 'Division C', cluster: 1 },
      { id: 'C2', label: 'C2', status: 'available', division: 'Division C', cluster: 1 },
      { id: 'C3', label: 'C3', status: 'booked', occupantName: 'Arjun', division: 'Division C', cluster: 1 },
      { id: 'C4', label: 'C4', status: 'available', division: 'Division C', cluster: 1 },
      
      // Cluster 2
      { id: 'C5', label: 'C5', status: 'available', division: 'Division C', cluster: 2 },
      { id: 'C6', label: 'C6', status: 'booked', occupantName: 'Sanjay', division: 'Division C', cluster: 2 },
      { id: 'C7', label: 'C7', status: 'available', division: 'Division C', cluster: 2 },
      { id: 'C8', label: 'C8', status: 'booked', occupantName: 'Kavita', division: 'Division C', cluster: 2 }
    ]
  },
  {
    name: 'Division D',
    seats: [
      // Buffer Zone
      { id: 'D-B1', label: 'B1', status: 'buffer', division: 'Division D', cluster: 0 },
      { id: 'D-B2', label: 'B2', status: 'buffer', division: 'Division D', cluster: 0 },
      
      // Cluster 1
      { id: 'D1', label: 'D1', status: 'available', division: 'Division D', cluster: 1 },
      { id: 'D2', label: 'D2', status: 'booked', occupantName: 'Ramesh', division: 'Division D', cluster: 1 },
      { id: 'D3', label: 'D3', status: 'available', division: 'Division D', cluster: 1 },
      { id: 'D4', label: 'D4', status: 'available', division: 'Division D', cluster: 1 },
      
      // Cluster 2
      { id: 'D5', label: 'D5', status: 'booked', occupantName: 'Pooja', division: 'Division D', cluster: 2 },
      { id: 'D6', label: 'D6', status: 'available', division: 'Division D', cluster: 2 },
      { id: 'D7', label: 'D7', status: 'booked', occupantName: 'Suresh', division: 'Division D', cluster: 2 },
      { id: 'D8', label: 'D8', status: 'available', division: 'Division D', cluster: 2 }
    ]
  },
  {
    name: 'Division E',
    seats: [
      // Buffer Zone
      { id: 'E-B1', label: 'B1', status: 'buffer', division: 'Division E', cluster: 0 },
      { id: 'E-B2', label: 'B2', status: 'buffer', division: 'Division E', cluster: 0 },
      
      // Cluster 1
      { id: 'E1', label: 'E1', status: 'available', division: 'Division E', cluster: 1 },
      { id: 'E2', label: 'E2', status: 'booked', occupantName: 'Kiran', division: 'Division E', cluster: 1 },
      { id: 'E3', label: 'E3', status: 'available', division: 'Division E', cluster: 1 },
      { id: 'E4', label: 'E4', status: 'booked', occupantName: 'Anjali', division: 'Division E', cluster: 1 },
      
      // Cluster 2
      { id: 'E5', label: 'E5', status: 'available', division: 'Division E', cluster: 2 },
      { id: 'E6', label: 'E6', status: 'available', division: 'Division E', cluster: 2 },
      { id: 'E7', label: 'E7', status: 'booked', occupantName: 'Manish', division: 'Division E', cluster: 2 },
      { id: 'E8', label: 'E8', status: 'available', division: 'Division E', cluster: 2 }
    ]
  }
];

export function getSeatCounts(division: string): { available: number } {
  const divData = divisionsData.find(d => d.name === division);
  if (!divData) return { available: 0 };

  const available = divData.seats.filter(s => s.status === 'available').length;
  
  return { available };
}