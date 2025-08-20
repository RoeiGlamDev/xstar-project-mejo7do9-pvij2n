```typescript
// types/index.ts

export interface Property {
    id: string;
    title: string;
    description: string;
    pricePerNight: number;
    location: string;
    images: string[];
    amenities: string[];
    rating: number;
    reviewsCount: number;
    host: Host;
}

export interface Host {
    id: string;
    name: string;
    profilePicture: string;
    responseRate: number;
    superHost: boolean;
}

export interface Booking {
    id: string;
    propertyId: string;
    userId: string;
    startDate: Date;
    endDate: Date;
    totalPrice: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
    profilePicture: string;
    bookings: Booking[];
}

export interface Review {
    id: string;
    propertyId: string;
    userId: string;
    rating: number;
    comment: string;
    createdAt: Date;
}

export interface Amenity {
    id: string;
    name: string;
    icon: string; // URL or path to the icon
}

export interface Location {
    city: string;
    state: string;
    country: string;
    latitude: number;
    longitude: number;
}

export interface SearchFilters {
    location: string;
    checkInDate: Date | null;
    checkOutDate: Date | null;
    guests: number;
    priceRange: [number, number];
    amenities: string[];
}
```

This code defines the types for a luxury Airbnb-like website named HouseIL, including properties, users, bookings, reviews, and search filters, all tailored for a high-end design.