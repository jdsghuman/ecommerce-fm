/* eslint-disable @next/next/no-img-element */
import { Key, useEffect, useState } from 'react'
import CarouselItem from './CarouselItem'
import Pagination from './Pagination'
import { useSwipeable } from 'react-swipeable'
import styles from './Carousel.module.scss'

interface CarouselItemPropType {
  title: string
  image: string
  description: string
  slug: string
  id: string
}

interface CarouselPropType {
  featuredPosts: CarouselItemPropType[]
}

const Carousel = ({ featuredPosts }: CarouselPropType) => {
  const [currentInterval, setCurrentInterval] = useState(0)
  const [style, setStyle] = useState(styles.carousel__container)

  const images = featuredPosts.map((post) => {
    return {
      key: post.id,
      label: post.title,
      path: post.image,
      description: post.description,
      slug: post.slug,
    }
  })

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentInterval(currentInterval < featuredPosts.length - 1 ? currentInterval + 1 : 0),
    onSwipedRight: () =>
      setCurrentInterval(currentInterval > 0 ? currentInterval - 1 : featuredPosts.length - 1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStyle(styles['container--none'])

      setCurrentInterval(currentInterval < featuredPosts.length - 1 ? currentInterval + 1 : 0)
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
          <CarouselItem details={images[currentInterval]} />
        </div>
      </div>
      <ul className={styles.carousel__pagination}>
        {images.map((image: { key: Key | null | undefined; label: any }, i: number) => (
          <Pagination
            key={image.key}
            count={i}
            setActiveImage={setCurrentInterval}
            active={image.label === images[currentInterval].label}
            activeNeighbor={i === currentInterval + 1 || i === currentInterval - 1 ? true : false}
          />
        ))}
      </ul>
    </>
  )
}

export default Carousel
