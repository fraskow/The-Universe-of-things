export interface Superhero {
    id: number;
    name: string;
    powerstats: {
      intelligence: number;
      strength: number;
      speed: number;
    };
    appearance:{
      gender: string;
      race: string;
    }
    images: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    }
  }
  