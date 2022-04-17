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
            image={vendor.data.image.url}
            title={vendor.data.name}
            description={vendor.data.description}
            slug={vendor.uid}
            key={vendor.id}
          />
        )
      })}
    </ul>
  )
}

export default VendorList
