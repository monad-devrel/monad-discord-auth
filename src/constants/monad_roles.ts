export const MONAD_ROLES = {
  '1072682201658970112': 'full_access',
  '1164939877650022443': 'builder_dev',
  '1194343129147519026': 'builder_community',
  '1194342915598721105': 'builder_artdesign',
  '1194338643091935333': 'builder_product',
  '1194003002298740816': 'local_nads',
  '1051562453495971941': 'nads',
  '1151563303827554334': 'monartist',
  '1038728318666682378': 'quant',
  '1046330093569593418': 'nad-og',
  '1085044350939050075': 'running_hot',
  '1037873237159321612': 'mon',
  '1172573469108613130': 'mon2',
};

export const MONAD_DEFAULT_ROLE_NAME = 'pleb';

export type Role = 'nads' | 'full_access' | 'nad-og' | 'running_hot' | 'mon' | 'mon2' | 'monartist';
export const rolePriority: Role[] = [
  'mon2',
  'mon',
  'nad-og',
  'running_hot',
  'monartist',
  'nads',
  'full_access',
];
