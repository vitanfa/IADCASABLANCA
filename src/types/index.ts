export interface AppointmentFormData {
  patient_name: string;
  phone: string;
  email: string;
  service_type: string;
  preferred_date: string;
  address: string;
  notes: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}
