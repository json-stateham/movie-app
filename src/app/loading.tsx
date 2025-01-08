import { Skeleton, Wrapper } from 'shared/ui';

export default function Loading() {
  return (
    <Wrapper>
      <Skeleton width={1280} height={738} />
    </Wrapper>
  );
}
