// import useThemeColors from "@src/custom-hooks/useThemeColors";
import * as React from "react";
import { View, Dimensions, I18nManager, Platform } from "react-native";
import SnapCarousel, {
  AdditionalParallaxProps,
  Pagination,
} from "react-native-snap-carousel";
// import styles from "./styles";

interface OwnProps {
  renderContent: (
    item: any,
    index: number,
    parallaxProps?: AdditionalParallaxProps
  ) => React.ReactNode;
  data: any[];
  hasPagination?: boolean;
  hasParallaxImages?: boolean;
  itemWidth?: number;
  inactiveSlideOpacity?: number;
  enableSnap?: boolean;
  onSnapToItem?: (slideIndex: number) => void;
}

type CarouselProps = OwnProps;

const Carousel: React.FC<CarouselProps> = ({
  renderContent,
  data,
  hasPagination,
  itemWidth,
  inactiveSlideOpacity,
  enableSnap,
  hasParallaxImages,
  onSnapToItem,
}) => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  //   const { primary } = useThemeColors();

  const renderCarouselItem = (
    item: any,
    parallaxProps?: AdditionalParallaxProps
  ) => {
    if (renderContent) {
      return renderContent(item.item, item.index, parallaxProps);
    }
    return null;
  };

  const renderPagination = (dotsLength: number) => {
    return (
      <Pagination
        // containerStyle={styles.paginationContainer}
        dotsLength={dotsLength}
        activeDotIndex={activeSlide}
        // dotStyle={[
        //   styles.paginationDot,
        //   {
        //     backgroundColor: primary,
        //   },
        // ]}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  const handleOnCarouselSnapToItem = (index: number) => {
    setActiveSlide(index);
    onSnapToItem && onSnapToItem(index);
  };

  if (data) {
    return (
      <View>
        <View>
          <SnapCarousel
            data={data}
            //@ts-ignore
            renderItem={renderCarouselItem}
            sliderWidth={Dimensions.get("window").width}
            itemWidth={itemWidth}
            onSnapToItem={handleOnCarouselSnapToItem}
            inactiveSlideOpacity={inactiveSlideOpacity}
            inactiveSlideScale={1}
            showsHorizontalScrollIndicator={true}
            decelerationRate="normal"
            activeSlideAlignment={
              I18nManager.isRTL && Platform.OS === "android" ? "end" : "start"
            }
            enableSnap={enableSnap}
            removeClippedSubviews={false}
            // slideStyle={styles.slideStyle}
            hasParallaxImages={hasParallaxImages}
          />
        </View>
        {hasPagination && <View>{renderPagination(data.length)}</View>}
      </View>
    );
  }
  return null;
};

Carousel.defaultProps = {
  itemWidth: Dimensions.get("window").width,
  inactiveSlideOpacity: 1,
  enableSnap: false,
};

export default Carousel;
