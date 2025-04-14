export interface User {
  id: string
  email: string
  name: string
  role: 'CONTRACTOR' | 'HOMEOWNER' | 'ADMIN'
  createdAt: Date
  updatedAt: Date
}

export interface Contractor {
  id: string
  userId: string
  businessName: string
  description: string
  skills: string[]
  licenses: License[]
  location: Location
  portfolio: PortfolioItem[]
  services: Service[]
  availability: Availability
  rating: number
  reviewCount: number
}

export interface License {
  id: string
  type: string
  number: string
  state: string
  expirationDate: Date
  verificationStatus: 'PENDING' | 'VERIFIED' | 'REJECTED'
}

export interface Location {
  id: string
  address: string
  city: string
  state: string
  zipCode: string
  coordinates: {
    latitude: number
    longitude: number
  }
}

export interface PortfolioItem {
  id: string
  title: string
  description: string
  images: string[]
  category: string
  completionDate: Date
  cost: number
}

export interface Service {
  id: string
  name: string
  category: string
  description: string
  pricing: {
    type: 'FIXED' | 'HOURLY' | 'QUOTE'
    rate?: number
  }
}

export interface Project {
  id: string
  title: string
  description: string
  category: string
  budget: {
    min: number
    max: number
  }
  location: Location
  status: 'OPEN' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED'
  homeownerId: string
  contractorId?: string
  bids: Bid[]
  timeline: {
    startDate?: Date
    endDate?: Date
  }
  attachments: string[]
}

export interface Bid {
  id: string
  projectId: string
  contractorId: string
  amount: number
  description: string
  estimatedDuration: number
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED'
  createdAt: Date
}

export interface Product {
  id: string
  name: string
  description: string
  category: string
  price: number
  images: string[]
  inventory: number
  specifications: Record<string, string>
  customizable: boolean
  shipping: {
    weight: number
    dimensions: {
      length: number
      width: number
      height: number
    }
  }
  rating: number
  reviewCount: number
}

export interface Review {
  id: string
  userId: string
  targetId: string
  targetType: 'CONTRACTOR' | 'PRODUCT' | 'HOMEOWNER'
  rating: number
  comment: string
  images?: string[]
  createdAt: Date
}

export interface Order {
  id: string
  userId: string
  items: OrderItem[]
  status: 'PENDING' | 'PAID' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED'
  shipping: {
    address: Location
    method: string
    trackingNumber?: string
  }
  payment: {
    method: string
    status: string
    transactionId: string
  }
  total: number
  createdAt: Date
  updatedAt: Date
}

export interface Availability {
  id: string
  weeklySchedule: {
    [key in 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY']: {
      available: boolean
      hours?: {
        start: string
        end: string
      }
    }
  }
  specialDates?: {
    date: Date
    available: boolean
    hours?: {
      start: string
      end: string
    }
  }[]
}

export interface OrderItem {
  id: string
  productId: string
  quantity: number
  price: number
  customizations?: Record<string, string>
} 