export interface Vendor {
  data: {
    about: {
      type: string
      text: string
      spans: []
    }
    description: string
    featured: boolean
    image: {
      url: string
    }
    name: string
  }
  first_publication_date: string
  last_publication_date: string
  id: string
  slugs: []
  tags: []
  type: string
  uid: string
}

export interface VendorsPropType {
  vendors: Vendor[]
}

export interface FeaturedVendorsPropType {
  featuredVendors: Vendor[]
}

export interface StoreProptype {
  vendor: Vendor
  products: ProductsPropType[]
}

interface ProductsPropType {
  description: string
  image: {
    url: string
  }
  name: string
  price: string
  vendorName: {
    first_publication_date: string
    id: string
    last_publication_date: string
    tags: []
  }
  options?: string
}

export interface StoreProductList {
  products: ProductsPropType[]
}

interface PricePropType {
  small?: number
  medium?: number
  large?: number
  xlarge?: number
  cup?: number
  quart?: number
  gallon?: number
}
