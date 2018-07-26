import { AirportCommonModule } from './common.module';

describe('CommonModule', () => {
  let commonModule: AirportCommonModule;

  beforeEach(() => {
    commonModule = new AirportCommonModule();
  });

  it('should create an instance', () => {
    expect(commonModule).toBeTruthy();
  });
});
