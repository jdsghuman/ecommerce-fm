/* eslint-disable @next/next/no-img-element */
import { Key, useEffect, useState, useRef } from 'react'
import CarouselItem from './CarouselItem'
import Pagination from './Pagination'
import { useSwipeable } from 'react-swipeable'
import styles from './Carousel.module.scss'
import { FeaturedVendorsPropType } from '@components/Types/PropTypes'

interface CarouselItemPropType {
  title: string
  image: string
  description: string
  slug: string
  id: string
}

interface CarouselPropType {
  featuredVendors: CarouselItemPropType[] | []
}

const Carousel = ({ featuredVendors }: FeaturedVendorsPropType) => {
  const readMoreButton = useRef<HTMLDivElement>(null)
  const [currentInterval, setCurrentInterval] = useState(0)
  const [style, setStyle] = useState(styles.carousel__container)

  const images = featuredVendors.map((vendor) => {
    return {
      key: vendor,
      label: vendor.data.name,
      path: vendor.data.image.url,
      description: vendor.data.description,
      slug: vendor.uid,
    }
  })

  const setFocus = (i: number) => {
    if (readMoreButton.current !== null) {
      readMoreButton.current.focus()
    }
    setCurrentInterval(i)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentInterval(currentInterval < featuredVendors.length - 1 ? currentInterval + 1 : 0),
    onSwipedRight: () =>
      setCurrentInterval(currentInterval > 0 ? currentInterval - 1 : featuredVendors.length - 1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStyle(styles['container--none'])

      setCurrentInterval(currentInterval < featuredVendors.length - 1 ? currentInterval + 1 : 0)
    }, 6000)
    return () => clearInterval(interval)
  })

  useEffect(() => {
    setStyle(styles.carousel__container)
  }, [currentInterval])

  return (
    <>
      <div {...handlers} className={styles.carousel}>
        <div className={style}>
          <img
            className={styles.carousel__image}
            src={images[currentInterval].path}
            alt={images[currentInterval].label}
          />
        </div>
        <div className={styles.carousel__controls}>
          <CarouselItem details={images[currentInterval]} readMoreRef={readMoreButton} />
        </div>
      </div>
      <ul className={styles.carousel__pagination}>
        {images.map((image, i) => (
          <Pagination
            key={`${i}-${image.key}`}
            active={image.label === images[currentInterval].label}
            count={i}
            setActiveImage={setFocus}
            activeNeighbor={i === currentInterval + 1 || i === currentInterval - 1 ? true : false}
          />
        ))}
      </ul>
    </>
  )
}

export default Carousel
