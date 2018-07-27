import { IPilot } from './pilot';
import { IAirhostess } from '.';

export interface ICrew {
  id: number;
  pilot: IPilot;
  airhostesses: IAirhostess[];
}
