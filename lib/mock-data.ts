export interface Property {
  id: string
  name: string
  location: string
  price: number
  beds: number
  baths: number
  sqft: number
  image: string
  description: string
  status: "available" | "reserved" | "sold"
  agent?: string
  agentId?: string
  createdAt: string
  // optional multi-unit support
  unitsTotal?: number
  unitsAvailable?: number
}

export interface Agent {
  id: string
  name: string
  email: string
  phone: string
  properties: number
  status: "active" | "inactive"
  joinDate: string
}

export interface Reservation {
  id: string
  customerId: string
  customerName: string
  propertyId: string
  propertyName: string
  date: string
  time: string
  status: "pending" | "confirmed" | "completed" | "cancelled"
  notes: string
  agentId?: string
}

export interface ChatMessage {
  id: string
  conversationId: string
  senderId: string
  senderName: string
  senderRole: "agent" | "customer"
  message: string
  timestamp: string
  isRead: boolean
}

export interface Conversation {
  id: string
  customerId: string
  customerName: string
  agentId: string
  agentName: string
  propertyId: string
  propertyName: string
  status: "active" | "pending" | "completed"
  lastMessage: string
  lastMessageTime: string
  unreadCount: number
}

// Mock data arrays removed - only TypeScript interfaces are used in the application
// All data is now fetched from Supabase database
