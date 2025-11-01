import type {LngLat} from '@yandex/ymaps3-types';
import type {YMapDefaultMarkerProps} from '@yandex/ymaps3-default-ui-theme';

// Array containing GeoJSON data for markers
export const markersGeoJsonSource: Omit<YMapDefaultMarkerProps, 'popup'>[] = [
  {
    coordinates: [61.277436, 54.437900] as LngLat,
    title: 'Гранат',
    //subtitle: 'Описание',
    color: 'lavender',
    size: 'normal',
    iconName: 'fallback'
  },
  {
    coordinates: [61.518454, 55.173555] as LngLat,
    title: 'Чурилово 3.20',
    //subtitle: 'Описание',
    color: 'tulip',
    size: 'normal',
    iconName: 'fallback'
  },
  {
    coordinates: [61.381343, 55.189360] as LngLat,
    title: 'Островский',
    //subtitle: 'Описание',
    color: 'green',
    size: 'normal',
    iconName: 'fallback'
  },

];