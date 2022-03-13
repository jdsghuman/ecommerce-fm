export interface Vendor {
  id: string
  slug: string
  title: string
  description: string
  image: string
  features: boolean
  products?: any
}

export interface VendorsPropType {
  vendors: Vendor[]
}
