export interface VendorProptype {
  data: {
    id: string
    title: string
    description: string
    image: string
    featured: boolean
    products: ProductsPropType[]
    slug: string
  }
  vendor: any
  products: any
}

interface ProductsPropType {
  id: string
  title: string
  description: string
  price: string
  image: string
  options?: string
}

export interface StoreProductList {
  products: ProductsPropType[]
  url: string
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
