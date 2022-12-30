import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormglassWeather3Hours from '@test/fixtures/stormglass_weather_3_hours.json';
import stormGlassNormalized3HoursFixed from '@test/fixtures/stormglass_normalized_response_3_hours.json'

jest.mock('axios');

describe('StormGlass client', () => {
  it('should return the normalized forecast from the StormGlass service', () => {
    async () => {
      const lat = -8383;
      const lng = 8025.028;

      axios.get = jest.fn().mockReturnValue(stormglassWeather3Hours);

      const stormGlass = new StormGlass(axios);
      const response = await stormGlass.fetchPoints(lat, lng);
      expect(response).toEqual(stormGlassNormalized3HoursFixed);
    };
  });
});
