export class Country {
  constructor(
    public id: string,
    public name: string,
    public imageUrl: string | null,
    public backgroundColor?: string
  ) {}
}
