import { HomePage } from '@pages/home';
import { RoutesPahEnum } from '@/types';
import { NewsPage } from '@/pages/news';
import { DirectionsPage } from '@/pages/directions';

export const routes = [
  {
    path: RoutesPahEnum.HOME,
    element: <HomePage />,
  },
  {
    path: RoutesPahEnum.NEWS,
    element: <NewsPage />,
  },
  {
    path: RoutesPahEnum.DIRECTIONS,
    element: <DirectionsPage />,
  },
];
