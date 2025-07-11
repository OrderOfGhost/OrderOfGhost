import { AppUser } from '../../types/user';

/**
 * Domain model representing an authenticated user
 */
export class User implements AppUser {
  constructor(
    public id: string,
    public name: string,
    public avatarUrl: string
  ) {}
}
