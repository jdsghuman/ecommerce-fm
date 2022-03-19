export interface VendorProptype {
  data: {
    id: string
    title: string
    description: string
    image: string
    featured: boolean
    products: ProductsPropType[]
  }
}

interface ProductsPropType {
  id: string
  title: string
  description: string
  price: PricePropType[]
  image: string
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
