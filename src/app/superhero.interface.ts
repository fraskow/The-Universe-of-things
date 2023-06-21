export interface Superhero {
    id: number;
    name: string;
    powerstats: {
      intelligence: number;
      strength: number;
      speed: number;
    };
    image: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    }
  }
  