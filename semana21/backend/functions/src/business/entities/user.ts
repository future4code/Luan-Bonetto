export class User {
  constructor(
    private name: string,
    private email: string,
    private password: string,
    private dateOfBirth: number,
    private photo: string
  ){}

  public getName(): string {
    return this.name
  }

  public getEmail(): string {
    return this.email
  }

  public getPassword(): string {
    return this.password
  }

  public getDateOfBirth(): number {
    return this.dateOfBirth
  }

  public getPhoto(): string {
    return this.photo
  }
}
