export interface IHashedPassword {
  hash: string;
  salt: string;
  iterations: number;
}
