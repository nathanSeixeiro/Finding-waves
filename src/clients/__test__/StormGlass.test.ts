import { stormGlass } from '@src/clients/stormGlass';

describe('StormGlass client', () => {
  it('should return the normalized forecast from the StormGlass service', () => {
    async () => {
      const lat = -8383;
      const lng = 8025.028;

      const stormGlass = new StormGlass();
      const response = await stormGlass.fetchPoints(lat, lng);
      expect(response).toEqual({});
    };
  });
});
