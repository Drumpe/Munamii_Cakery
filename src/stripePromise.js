import { loadStripe } from '@stripe/stripe-js';
// The publishable key is safe to be exposed on the client side
export const stripePromise = loadStripe(import.meta.env.STRIPE_PUBLIC_KEY);