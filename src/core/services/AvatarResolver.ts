/**
 * AvatarResolver provides avatar urls based on user id.
 */
export class AvatarResolver {
  private base = 'https://api.dicebear.com/7.x/thumbs/svg?seed=';

  getAvatar(userId: string): string {
    return `${this.base}${encodeURIComponent(userId)}`;
  }
}
