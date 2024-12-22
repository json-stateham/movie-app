'use client';

import useTranslation from 'next-translate/useTranslation';
import { Wrapper } from 'ui/components';
import { CategoryPreview } from 'ui/pages/main/CategoryPreview';
import { HeroSlider } from 'ui/widgets';

export default function HomePage({ trendMovies, topMovies }) {
  const { t } = useTranslation('common');

  return (
    <Wrapper className="pb-50">
      {trendMovies && <HeroSlider images={trendMovies} />}
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
}
