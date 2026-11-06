import * as api from '@lp-labs/duration-parts-parser';
import { durationParts } from '@lp-labs/duration-parts-parser';
console.log(durationParts(90061007));
// @ts-expect-error invalid argument must be rejected by declarations
api.durationParts('1000');
