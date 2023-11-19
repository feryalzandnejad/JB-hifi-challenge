export interface InputProps  {
  label: string;
  onChange: any;
  value: string;
  name: string;
};

export interface GetWeatherProps {
  setWeatherData: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string>>; 
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  inputValues: {
    city: string;
    country: string;
  }
};

export interface MyCardProps {
    description : string
};

export interface BoxProps {
  children: React.ReactNode;
  onClick: any;
  disabled: boolean;
};