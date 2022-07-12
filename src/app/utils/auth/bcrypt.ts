
import * as bcrypt from 'bcrypt';


export function hashPassword(pass: string): string {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(pass, salt);
}

export function checkHash(pass: string, hash: string): boolean {
  return bcrypt.compareSync(pass, hash);
}
