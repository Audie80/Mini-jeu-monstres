export class De {
  public static lanceLeDe(max?: number): number {
    if (!max) max = 6;
    return Math.floor(Math.random() * max) + 1;
  }
}
