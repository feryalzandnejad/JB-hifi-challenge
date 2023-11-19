export interface TextFiledProps  {
  label: string;
  onChange: any;
  value: string;
};

export interface GetWeatherProps {
  setWeatherData: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string>>; 
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  city: string;
  country: string;
};

export interface MyCardProps {
    description : string
};