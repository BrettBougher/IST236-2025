// /types.ts

export type ServiceOption = 
  | 'Basic Tune-Up'
  | 'Comprehensive Tune-Up'
  | 'Flat Tire Repair'
  | 'Brake Servicing'
  | 'Gear Servicing'
  | 'Chain Servicing'
  | 'Frame Repair'
  | 'Safety Check'
  | 'Accessory Install';

export interface OrderDetails {
  serviceTime: 'standard' | 'expedited' | 'next-day';
  selectedServices: ServiceOption[];
  newsletter: boolean;
  rentalMembership: boolean;
}
