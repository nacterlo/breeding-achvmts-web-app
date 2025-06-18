type UnifiedCountryCode = {
  countryCode: string;
  codeListId: string;
};

type Address = {
  addressKindCode: string;
  unifiedCountryCode: UnifiedCountryCode;
  regionName?: string;
  districtName?: string;
  cityName?: string;
  settlementName?: string;
  streetName?: string;
  roomNumber?: string;
  postCode: string;
};

type Communication = {
  channelCode: string;
  name: string;
  contact: string;
};

type Organization = {
  id: number;
  createdAt: string;
  updatedAt: string;
  businessEntityBriefName: string;
  countryCode: string;
  businessEntityName: string;
  taxpayer: string;
  addressList: Address[];
  communicationsList?: Communication[];
};

type Breed = {
  ID: number;
  name: string;
};

type Developer = {
  id: number;
  createdAt: string;
  updatedAt: string;
  businessEntityBriefName: string;
  countryCode: string;
  businessEntityName: string;
  taxpayer: string;
  addressList: Address[];
  communicationsList: Communication[];
};

type Status = {
  id: number;
  name: string;
};

export type Achievement = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  breedId: number;
  breed: Breed;
  performanceData: string;
  description: string;
  organizations: Organization[];
  developerId: number;
  developer: Developer;
  date: string;
  actNumber: string;
  authorityName: string;
  status: Status;
};