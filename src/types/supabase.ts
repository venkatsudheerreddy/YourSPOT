export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      seats: {
        Row: {
          id: string
          seat_name: string
          floor: string
          zone: string
          status: string // 'available' | 'booked' | 'blocked'
          created_at: string
        }
        Insert: {
          id?: string
          seat_name: string
          floor: string
          zone: string
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          seat_name?: string
          floor?: string
          zone?: string
          status?: string
          created_at?: string
        }
      }
      reservations: {
        Row: {
          id: string
          seat_id: string
          date: string // YYYY-MM-DD
          start_time: string
          end_time: string
          status: string // 'confirmed' | 'cancelled'
          created_at: string
        }
        Insert: {
          id?: string
          seat_id: string
          date: string
          start_time: string
          end_time: string
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          seat_id?: string
          date?: string
          start_time?: string
          end_time?: string
          status?: string
          created_at?: string
        }
      }
    }
  }
}
