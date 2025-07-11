import { FeatureRelicProps } from '../../types/feature';

/**
 * FeatureRelic represents an app feature as a mystical relic.
 */
export class FeatureRelic implements FeatureRelicProps {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public icon: string
  ) {}
}
