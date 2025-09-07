import type { LoginCredentials, RegisterCredentials, User } from '../types';

export class AuthService {
  /**
   * Simulates user login with validation
   */
  static async login(credentials: LoginCredentials): Promise<User> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Validate credentials (in real app, this would be an API call)
    if (!this.validateEmail(credentials.email)) {
      throw new Error('Please enter a valid email address');
    }

    if (credentials.password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }

    // Simulate successful login
    const user: User = {
      id: '1',
      email: credentials.email,
      name: credentials.email.split('@')[0],
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${credentials.email}`,
    };

    // Store in localStorage if remember me is checked
    if (credentials.rememberMe) {
      localStorage.setItem('user', JSON.stringify(user));
    }

    return user;
  }

  /**
   * Simulates user registration
   */
  static async register(credentials: RegisterCredentials): Promise<User> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Validate credentials
    if (!this.validateEmail(credentials.email)) {
      throw new Error('Please enter a valid email address');
    }

    if (credentials.password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }

    if (credentials.password !== credentials.confirmPassword) {
      throw new Error('Passwords do not match');
    }

    if (credentials.name.length < 2) {
      throw new Error('Name must be at least 2 characters long');
    }

    // Simulate successful registration
    const user: User = {
      id: '1',
      email: credentials.email,
      name: credentials.name,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${credentials.email}`,
    };

    return user;
  }

  /**
   * Simulates user logout
   */
  static async logout(): Promise<void> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Clear localStorage
    localStorage.removeItem('user');
  }

  /**
   * Gets user from localStorage
   */
  static getStoredUser(): User | null {
    if (typeof window === 'undefined') return null;
    
    try {
      const stored = localStorage.getItem('user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }

  private static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
