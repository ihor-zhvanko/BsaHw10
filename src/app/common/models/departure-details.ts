import { IFlight, ICrew, IPlane } from '.';

export interface IDepartureDetails {
  id: number;
  date: Date;
  flight: IFlight;
  crew: ICrew;
  plane: IPlane;
}
