// /utils/calculator.ts

import { ServiceOption } from '../types';

export const calculateTotal = (
  serviceTime: 'standard' | 'expedited' | 'next-day',
  selectedServices: ServiceOption[],
  newsletter: boolean,
  rentalMembership: boolean
): number => {
  let subtotal = 0;

  // Pricing for service time
  if (serviceTime === 'standard') subtotal += 0;
  if (serviceTime === 'expedited') subtotal += 50;
  if (serviceTime === 'next-day') subtotal += 100;

  // Pricing for selected services
  const servicePrices: Record<ServiceOption, number> = {
    'Basic Tune-Up': 50,
    'Comprehensive Tune-Up': 75,
    'Flat Tire Repair': 20,
    'Brake Servicing': 50,
    'Gear Servicing': 40,
    'Chain Servicing': 15,
    'Frame Repair': 35,
    'Safety Check': 25,
    'Accessory Install': 10,
  };

  selectedServices.forEach((service) => {
    subtotal += servicePrices[service];
  });

  // Add extra charges for newsletter and rental membership
  if (newsletter) subtotal += 0; // Newsletter is free
  if (rentalMembership) subtotal += 100;

  return subtotal;
};
