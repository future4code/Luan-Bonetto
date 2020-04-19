export class Video {
  constructor(
    private url: string,
    private description: string,
    private title: string,
    private id?: string
  ){}

  public getUrl(): string {
    return this.url
  }

  public getDescription(): string {
    return this.description
  }

  public getTitle(): string {
    return this.title
  }

  public getId(): string | undefined {
    return this.id
  }
}
