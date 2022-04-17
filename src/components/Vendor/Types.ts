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
