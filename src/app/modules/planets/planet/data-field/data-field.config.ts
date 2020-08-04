import { DataField } from 'src/app/data/modules/planets/models';

export const DataFields: DataField[] = [
  {
    field: 'name',
    name: 'Navn',
    order: 1,
  },
  {
    field: 'diameter',
    name: 'Diameter (I KM)',
    order: 2,
  },
  {
    field: 'gravity',
    name: 'Tyngdecraft',
    order: 3,
  },
  {
    field: 'terrain',
    name: 'Terræn',
    order: 4,
  },
  {
    field: 'population',
    name: 'Beboer antal',
    order: 5,
  }
]
