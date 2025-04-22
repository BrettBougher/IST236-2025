export class Destination {
  constructor(
    public id: string,
    public countryId: string,
    public name: string,
    public cost: string,
    public yearFounded: number,
    public rating: number,
    public description: string,
    public imageUrl: string
  ) {}
}
