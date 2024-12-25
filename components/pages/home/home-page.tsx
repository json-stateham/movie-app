'use client';

import useTranslation from 'next-translate/useTranslation';
import { CategoryPreview } from 'components/pages/home/preview-category/CategoryPreview';
import { Wrapper } from 'components/shared';

import dynamic from 'next/dynamic';

const DynamicHeroSlider = dynamic(() =>
  import('../home/hero-slider/HeroSlider').then(mod => mod.HeroSlider),
);

export const HomePage = ({ trendMovies, topMovies }) => {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      {trendMovies && <DynamicHeroSlider items={trendMovies} />}
      {trendMovies && (
        <CategoryPreview
          link="/movies/popular"
          title={t('trending')}
          items={trendMovies}
        />
      )}
      {topMovies && (
        <CategoryPreview
          link="/movies/top_rated"
          title={t('topRated')}
          items={topMovies}
        />
      )}
    </Wrapper>
  );
};
