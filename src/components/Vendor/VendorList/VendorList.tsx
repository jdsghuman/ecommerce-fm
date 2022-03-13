import VendorItem from '@components/Vendor/VendorItem'
import { VendorsPropType, Vendor } from '../Types'
import styles from './VendorList.module.scss'

const VendorList = ({ vendors }: VendorsPropType) => {
  return (
    <ul className={styles.products}>
      {vendors.map((vendor: Vendor) => {
        return (
          <VendorItem
            id={vendor.id}
            image={vendor.image}
            title={vendor.title}
            description={vendor.description}
            slug={vendor.slug}
            features={false}
          />
        )
      })}
    </ul>
  )
}

export default VendorList
